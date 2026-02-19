import { NextRequest, NextResponse } from "next/server";
import { getInvitation } from "@/lib/store";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const invitation = getInvitation(id);

    if (!invitation) {
      return NextResponse.json(
        { error: "초대장을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(invitation);
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return NextResponse.json(
      { error: `초대장 조회 중 오류가 발생했습니다: ${message}` },
      { status: 500 }
    );
  }
}
