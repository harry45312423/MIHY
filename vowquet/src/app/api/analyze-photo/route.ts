import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { buildPhotoAnalysisPrompt } from "@/lib/prompts";

function isValidRequest(body: unknown): body is { photoBase64: string } {
  if (typeof body !== "object" || body === null) return false;
  const obj = body as Record<string, unknown>;
  return typeof obj.photoBase64 === "string" && obj.photoBase64.length > 0;
}

interface PhotoAnalysisResult {
  description: string;
  style_keywords: string;
  couple_features: string;
}

function isPhotoAnalysisResult(value: unknown): value is PhotoAnalysisResult {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.description === "string" &&
    typeof obj.style_keywords === "string" &&
    typeof obj.couple_features === "string"
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

    const { photoBase64 } = body;
    const openai = getOpenAIClient();

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: buildPhotoAnalysisPrompt() },
            {
              type: "image_url",
              image_url: { url: photoBase64, detail: "low" },
            },
          ],
        },
      ],
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "사진 분석에 실패했습니다." },
        { status: 500 }
      );
    }

    const parsed: unknown = JSON.parse(content);
    if (!isPhotoAnalysisResult(parsed)) {
      return NextResponse.json(
        { error: "응답 형식이 올바르지 않습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      description: parsed.description,
      style_keywords: parsed.style_keywords,
      couple_features: parsed.couple_features,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return NextResponse.json(
      { error: `사진 분석 중 오류가 발생했습니다: ${message}` },
      { status: 500 }
    );
  }
}
