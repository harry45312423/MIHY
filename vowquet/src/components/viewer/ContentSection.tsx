import type { InvitationData } from "@/lib/types";

function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="w-14 h-px bg-gradient-to-r from-transparent to-accent/60" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-accent/70 shrink-0"
      >
        <path
          d="M8 0.5C8 0.5 10.5 3 10.5 5.5C10.5 7 9.5 8 8 8C6.5 8 5.5 7 5.5 5.5C5.5 3 8 0.5 8 0.5Z"
          fill="currentColor"
        />
        <path
          d="M8 15.5C8 15.5 10.5 13 10.5 10.5C10.5 9 9.5 8 8 8C6.5 8 5.5 9 5.5 10.5C5.5 13 8 15.5 8 15.5Z"
          fill="currentColor"
        />
        <path
          d="M0.5 8C0.5 8 3 5.5 5.5 5.5C7 5.5 8 6.5 8 8C8 9.5 7 10.5 5.5 10.5C3 10.5 0.5 8 0.5 8Z"
          fill="currentColor"
        />
        <path
          d="M15.5 8C15.5 8 13 5.5 10.5 5.5C9 5.5 8 6.5 8 8C8 9.5 9 10.5 10.5 10.5C13 10.5 15.5 8 15.5 8Z"
          fill="currentColor"
        />
      </svg>
      <div className="w-14 h-px bg-gradient-to-l from-transparent to-accent/60" />
    </div>
  );
}

export default function ContentSection({ data }: { data: InvitationData }) {
  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          "linear-gradient(180deg, #F5F7F3 0%, #F8FAF6 50%, #F5F7F3 100%)",
      }}
    >
      <div className="max-w-sm mx-auto text-center">
        {/* Top ornament */}
        <OrnamentDivider className="mb-14" />

        {/* Greeting text */}
        <div className="mb-16">
          <p
            className="text-[15px] leading-[2.2] text-text whitespace-pre-line"
            style={{
              fontFamily: "var(--font-serif)",
              wordBreak: "keep-all",
            }}
          >
            {data.greeting}
          </p>
        </div>

        {/* Subtle mid-section divider */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="w-8 h-px bg-accent/35" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          <div className="w-8 h-px bg-accent/35" />
        </div>

        {/* Closing text */}
        <div className="mb-14">
          <p
            className="text-[13px] leading-[2.2] text-text-light whitespace-pre-line"
            style={{
              fontFamily: "var(--font-serif)",
              wordBreak: "keep-all",
            }}
          >
            {data.closing}
          </p>
        </div>

        {/* Bottom ornament */}
        <OrnamentDivider />
      </div>
    </section>
  );
}
