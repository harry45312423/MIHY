import { NextRequest, NextResponse } from "next/server";
import { saveInvitation } from "@/lib/store";
import { generateId } from "@/lib/utils";
import type { Mood, InvitationData } from "@/lib/types";

const validMoods: Mood[] = ["classic", "modern", "warm", "romantic"];

function isMood(value: unknown): value is Mood {
  return typeof value === "string" && validMoods.includes(value as Mood);
}

function isValidRequest(
  body: unknown
): body is Omit<InvitationData, "id"> {
  if (typeof body !== "object" || body === null) return false;
  const obj = body as Record<string, unknown>;
  return (
    typeof obj.groomName === "string" &&
    typeof obj.brideName === "string" &&
    typeof obj.weddingDate === "string" &&
    typeof obj.weddingTime === "string" &&
    typeof obj.venue === "string" &&
    isMood(obj.mood) &&
    typeof obj.greeting === "string" &&
    typeof obj.closing === "string" &&
    typeof obj.imageBase64 === "string" &&
    typeof obj.createdAt === "string"
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

    const id = generateId();
    const invitation: InvitationData = { id, ...body };
    saveInvitation(invitation);

    return NextResponse.json({ id, shareUrl: `/w/${id}` });
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return NextResponse.json(
      { error: `초대장 저장 중 오류가 발생했습니다: ${message}` },
      { status: 500 }
    );
  }
}
