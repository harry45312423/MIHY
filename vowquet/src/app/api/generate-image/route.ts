export const maxDuration = 60;

import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { buildImagePrompt, buildImageEditPrompt } from "@/lib/prompts";
import { getSeasonFromDate } from "@/lib/utils";
import type { Mood } from "@/lib/types";

const validMoods: Mood[] = ["classic", "modern", "warm", "romantic"];

function isMood(value: unknown): value is Mood {
  return typeof value === "string" && validMoods.includes(value as Mood);
}

interface PhotoAnalysis {
  description: string;
  style_keywords: string;
  couple_features: string;
}

function isPhotoAnalysis(value: unknown): value is PhotoAnalysis {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.description === "string" &&
    typeof obj.style_keywords === "string" &&
    typeof obj.couple_features === "string"
  );
}

interface GenerateImageRequest {
  mood: Mood;
  weddingDate: string;
  photoAnalysis?: PhotoAnalysis;
  photoBase64?: string;
}

function isValidRequest(body: unknown): body is GenerateImageRequest {
  if (typeof body !== "object" || body === null) return false;
  const obj = body as Record<string, unknown>;
  if (!isMood(obj.mood) || typeof obj.weddingDate !== "string") return false;
  if (obj.photoAnalysis !== undefined && !isPhotoAnalysis(obj.photoAnalysis)) return false;
  if (obj.photoBase64 !== undefined && typeof obj.photoBase64 !== "string") return false;
  return true;
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

    const { mood, weddingDate, photoAnalysis, photoBase64 } = body;
    const openai = getOpenAIClient();
    const season = getSeasonFromDate(weddingDate);

    let imageBase64 = "";

    try {
      if (photoBase64 && photoAnalysis) {
        const base64Data = photoBase64.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, "base64");
        const file = new File([buffer], "photo.png", { type: "image/png" });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK types don't include output_format for edit yet
        const editFn = openai.images.edit.bind(openai.images) as unknown as (params: Record<string, unknown>) => Promise<{ data: Array<{ b64_json?: string }> }>;
        const result = await editFn({
          model: "gpt-image-1",
          image: file,
          prompt: buildImageEditPrompt({ mood, season, photoAnalysis }),
          size: "1024x1536",
          output_format: "b64_json",
        });

        const b64 = result.data?.[0]?.b64_json;
        if (b64) {
          imageBase64 = `data:image/png;base64,${b64}`;
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK types don't include output_format for generate yet
        const genFn = openai.images.generate.bind(openai.images) as unknown as (params: Record<string, unknown>) => Promise<{ data: Array<{ b64_json?: string }> }>;
        const result = await genFn({
          model: "gpt-image-1",
          prompt: buildImagePrompt({ mood, season, photoAnalysis }),
          quality: "low",
          size: "1024x1536",
          output_format: "b64_json",
        });

        const b64 = result.data?.[0]?.b64_json;
        if (b64) {
          imageBase64 = `data:image/png;base64,${b64}`;
        }
      }
    } catch {
      imageBase64 = "";
    }

    return NextResponse.json({ imageBase64 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return NextResponse.json(
      { error: `이미지 생성 중 오류가 발생했습니다: ${message}` },
      { status: 500 }
    );
  }
}
