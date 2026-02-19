import type { InvitationData, Mood } from "@/lib/types";

const moodGradients: Record<Mood, string> = {
  classic:
    "bg-gradient-to-b from-[#4A4235] via-[#8C7D5E] via-40% via-[#C4B896] via-65% to-[#F2F0EA]",
  modern:
    "bg-gradient-to-b from-[#3D3D32] via-[#6E7368] via-40% via-[#A8AFA0] via-65% to-[#EFF2EC]",
  warm:
    "bg-gradient-to-b from-[#A0522D] via-[#C4784A] via-40% via-[#DBA882] via-65% to-[#FDF5EE]",
  romantic:
    "bg-gradient-to-b from-[#9E6B8A] via-[#C9A0B8] via-40% via-[#E4C8D8] via-65% to-[#F8EEF4]",
};

const moodOverlays: Record<Mood, string> = {
  classic: "from-[#1a1000]/60 via-[#1a1000]/25 to-[#1a1000]/50",
  modern: "from-[#111111]/55 via-[#111111]/20 to-[#111111]/50",
  warm: "from-[#1a0d05]/55 via-[#1a0d05]/20 to-[#1a0d05]/50",
  romantic: "from-[#1a0a15]/50 via-[#1a0a15]/15 to-[#1a0a15]/45",
};

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${year}.${month}.${day}`;
}

function getDayOfWeek(dateStr: string): string {
  const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const date = new Date(dateStr);
  return days[date.getDay()];
}

export default function CoverSection({ data }: { data: InvitationData }) {
  const hasImage = data.imageBase64 && data.imageBase64.length > 0;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background: AI image or mood gradient */}
      {hasImage ? (
        <img
          src={data.imageBase64}
          alt="청첩장 커버"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.9) brightness(0.95)" }}
        />
      ) : (
        <div
          className={`absolute inset-0 w-full h-full ${moodGradients[data.mood]}`}
        />
      )}

      {/* Multi-layer gradient overlay for depth */}
      {hasImage && (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-b ${moodOverlays[data.mood]}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </>
      )}

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-12 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-8 flex flex-col items-center">
        {/* Small label */}
        <p
          className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.45em] uppercase text-white/60 mb-8"
        >
          Wedding Invitation
        </p>

        {/* Thin decorative line above names */}
        <div className="w-12 h-px bg-white/30 mb-8" />

        {/* Couple names */}
        <h1
          className="text-white leading-tight mb-3"
          style={{
            fontFamily: "var(--font-serif)",
            textShadow: "0 2px 20px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          <span className="block text-[2rem] md:text-[2.5rem] font-normal tracking-[0.15em]">
            {data.groomName}
          </span>
          <span className="block my-4">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              className="inline-block text-white/70"
            >
              <path
                d="M10 13.5C10 13.5 1 8.5 1 4C1 1.5 3 0.5 5 0.5C7 0.5 9 2 10 3.5C11 2 13 0.5 15 0.5C17 0.5 19 1.5 19 4C19 8.5 10 13.5 10 13.5Z"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </span>
          <span className="block text-[2rem] md:text-[2.5rem] font-normal tracking-[0.15em]">
            {data.brideName}
          </span>
        </h1>

        {/* Thin decorative line below names */}
        <div className="w-12 h-px bg-white/30 mt-8 mb-8" />

        {/* Date and day */}
        <p
          className="text-white/80 text-[13px] tracking-[0.3em] mb-1"
          style={{
            fontFamily: "var(--font-serif)",
            textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          {formatDate(data.weddingDate)}
        </p>
        <p
          className="text-white/70 text-[11px] tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-serif)",
            textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          {getDayOfWeek(data.weddingDate)}
        </p>
      </div>

      {/* Scroll indicator with gentle animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span
          className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.3em] text-white/55 uppercase"
        >
          Scroll
        </span>
        <div className="relative w-5 h-8 rounded-full border border-white/25 flex justify-center">
          <div
            className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5"
            style={{
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Keyframes for scroll indicator */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(6px);
          }
        }
      `}</style>
    </section>
  );
}
