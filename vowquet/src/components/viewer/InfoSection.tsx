import type { InvitationData } from "@/lib/types";

function formatDateKorean(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}

function formatTimeKorean(timeStr: string): string {
  const [hourStr, minuteStr] = timeStr.split(":");
  const hour = Number(hourStr);
  const minute = Number(minuteStr);
  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour <= 12 ? hour : hour - 12;
  return minute > 0
    ? `${period} ${displayHour}시 ${minute}분`
    : `${period} ${displayHour}시`;
}

function getDayOfWeek(dateStr: string): string {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(dateStr);
  return days[date.getDay()];
}

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="text-accent"
    >
      <rect
        x="2"
        y="4"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M2 8H18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 2V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14 2V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="text-accent"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M10 5V10L13 12.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="text-accent"
    >
      <path
        d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="10" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function InfoSection({ data }: { data: InvitationData }) {
  const dayOfWeek = getDayOfWeek(data.weddingDate);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-sm mx-auto">
        {/* Section title */}
        <div className="text-center mb-10">
          <p
            className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.4em] uppercase text-accent mb-2"
          >
            Information
          </p>
          <h2
            className="text-lg text-text tracking-[0.15em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            예식 안내
          </h2>
        </div>

        {/* Info card */}
        <div
          className="rounded-2xl p-7 mb-10 border border-cream-dark"
          style={{
            background:
              "linear-gradient(145deg, #F8FAF6 0%, #F5F7F3 100%)",
          }}
        >
          {/* Date row */}
          <div className="flex items-start gap-4 pb-5 border-b border-cream-dark/70">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <CalendarIcon />
            </div>
            <div className="pt-0.5">
              <p className="text-[10px] tracking-[0.15em] uppercase text-text-light/70 mb-1.5">
                날짜
              </p>
              <p
                className="text-[15px] text-text font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {formatDateKorean(data.weddingDate)}
                <span className="text-text-light/60 text-[13px] ml-1.5">
                  ({dayOfWeek})
                </span>
              </p>
            </div>
          </div>

          {/* Time row */}
          <div className="flex items-start gap-4 py-5 border-b border-cream-dark/70">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <ClockIcon />
            </div>
            <div className="pt-0.5">
              <p className="text-[10px] tracking-[0.15em] uppercase text-text-light/70 mb-1.5">
                시간
              </p>
              <p
                className="text-[15px] text-text font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {formatTimeKorean(data.weddingTime)}
              </p>
            </div>
          </div>

          {/* Venue row */}
          <div className="flex items-start gap-4 pt-5">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <LocationIcon />
            </div>
            <div className="pt-0.5">
              <p className="text-[10px] tracking-[0.15em] uppercase text-text-light/70 mb-1.5">
                장소
              </p>
              <p
                className="text-[15px] text-text font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {data.venue}
              </p>
            </div>
          </div>
        </div>

        {/* Parents section */}
        {(data.groomParents || data.brideParents) && (
          <div className="text-center">
            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-px bg-gradient-to-r from-transparent to-accent/45" />
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="text-accent/50"
              >
                <rect
                  x="5"
                  y="0"
                  width="7.07"
                  height="7.07"
                  rx="1"
                  transform="rotate(45 5 0)"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </svg>
              <div className="w-14 h-px bg-gradient-to-l from-transparent to-accent/45" />
            </div>

            <div className="space-y-4">
              {data.groomParents && (
                <div
                  className="text-[14px] text-text leading-relaxed"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <span className="text-[11px] tracking-[0.15em] text-text-light/70 mr-4 uppercase">
                    신랑측
                  </span>
                  <span className="tracking-wide">
                    {data.groomParents}
                  </span>
                </div>
              )}
              {data.brideParents && (
                <div
                  className="text-[14px] text-text leading-relaxed"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <span className="text-[11px] tracking-[0.15em] text-text-light/70 mr-4 uppercase">
                    신부측
                  </span>
                  <span className="tracking-wide">
                    {data.brideParents}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom spacer divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-14 h-px bg-gradient-to-r from-transparent to-accent/45" />
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="text-accent/50"
              >
                <rect
                  x="5"
                  y="0"
                  width="7.07"
                  height="7.07"
                  rx="1"
                  transform="rotate(45 5 0)"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </svg>
              <div className="w-14 h-px bg-gradient-to-l from-transparent to-accent/45" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
