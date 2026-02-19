"use client";

interface GeneratingOverlayProps {
  status: string;
  progress: number;
  statusMessage: string;
}

export default function GeneratingOverlay({
  status,
  progress,
  statusMessage,
}: GeneratingOverlayProps) {
  if (status === "idle") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* 프로그레스 바 */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-text-light">진행률</span>
            <span className="font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 상태 메시지 */}
        <div className="text-center">
          <p className="mb-2 text-lg font-medium text-text">
            {statusMessage}
            <span className="inline-block animate-pulse">...</span>
          </p>
          <p className="text-sm text-text-light">잠시만 기다려주세요</p>
        </div>

        {/* 상태에 따른 아이콘/인디케이터 */}
        <div className="mt-6 flex justify-center">
          <div className="flex gap-1.5">
            <span
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
