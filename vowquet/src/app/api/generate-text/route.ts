import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { buildTextPrompt } from "@/lib/prompts";
import type { Mood } from "@/lib/types";

const validMoods: Mood[] = ["classic", "modern", "warm", "romantic"];

function isMood(value: unknown): value is Mood {
  return typeof value === "string" && validMoods.includes(value as Mood);
}

interface GenerateTextRequest {
  groomName: string;
  brideName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  mood: Mood;
}

function isValidRequest(body: unknown): body is GenerateTextRequest {
  if (typeof body !== "object" || body === null) return false;
  const obj = body as Record<string, unknown>;
  return (
    typeof obj.groomName === "string" &&
    typeof obj.brideName === "string" &&
    typeof obj.weddingDate === "string" &&
    typeof obj.weddingTime === "string" &&
    typeof obj.venue === "string" &&
    isMood(obj.mood)
  );
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (!isValidRequest(body)) {
      return NextResponse.json(
        { error: "잘못된 요청 형식입니다." },
        { status: 400 }
      );
    }

    const { groomName, brideName, weddingDate, weddingTime, venue, mood } = body;
    const openai = getOpenAIClient();
    const prompt = buildTextPrompt({ groomName, brideName, weddingDate, weddingTime, venue, mood });

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.8,
      response_format: { type: "json_object" },
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "텍스트 생성에 실패했습니다." },
        { status: 500 }
      );
    }

    const parsed: unknown = JSON.parse(content);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof (parsed as Record<string, unknown>).greeting !== "string" ||
      typeof (parsed as Record<string, unknown>).closing !== "string"
    ) {
      return NextResponse.json(
        { error: "응답 형식이 올바르지 않습니다." },
        { status: 500 }
      );
    }

    const { greeting, closing } = parsed as { greeting: string; closing: string };
    return NextResponse.json({ greeting, closing });
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return NextResponse.json(
      { error: `텍스트 생성 중 오류가 발생했습니다: ${message}` },
      { status: 500 }
    );
  }
}
