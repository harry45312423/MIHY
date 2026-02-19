import Link from "next/link";
import Header from "@/components/Header";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] md:w-[300px]">
      {/* Phone frame */}
      <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl shadow-black/20">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />

        {/* Screen content */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem]">
          {/* Photo background */}
          <img
            src="/images/sample-couple.png"
            alt="샘플 커플 사진"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "saturate(0.85) brightness(0.95)" }}
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/60" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16">
            <p
              className="font-[family-name:var(--font-display)] mb-1 text-[10px] tracking-[0.3em] text-white/70"
            >
              WEDDING INVITATION
            </p>
            <div className="my-3 h-px w-10 bg-white/30" />
            <h3
              className="font-[family-name:var(--font-serif)] text-center text-xl tracking-[0.1em] text-white"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              김민준
            </h3>
            <p className="font-[family-name:var(--font-serif)] my-1 text-white/50">
              &hearts;
            </p>
            <h3
              className="font-[family-name:var(--font-serif)] text-center text-xl tracking-[0.1em] text-white"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              이서연
            </h3>
            <div className="my-3 h-px w-10 bg-white/30" />
            <p className="text-xs tracking-widest text-white/80">
              2026.05.23
            </p>
          </div>
        </div>
      </div>

      {/* Reflection/glow effect */}
      <div className="absolute -bottom-8 left-1/2 h-16 w-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
    </div>
  );
}

function StepCard({
  num,
  title,
  desc,
  icon,
}: {
  num: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl border border-secondary/80 bg-gradient-to-b from-white to-cream/30 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md shadow-primary/20">
        {num}
      </div>
      <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-sage-light">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-light">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-[#F7F6F2] to-[#F0EDE5] px-4 pb-20 pt-16 md:pb-32 md:pt-20">

          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
            {/* Text side */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-[family-name:var(--font-display)] text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                AI Wedding Invitation
              </p>

              <h1 className="mt-6 font-[family-name:var(--font-serif)] text-4xl font-bold leading-[1.2] tracking-tight text-text md:text-5xl lg:text-6xl">
                사진이
                <br />
                <span className="text-primary">청첩장</span>이 된다
              </h1>

              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-text-light md:mx-0 md:text-lg">
                커플 사진을 올리면, AI가 웨딩 일러스트로 변환하고
                감동적인 초대 문구까지 완성합니다.
                <span className="font-semibold text-text"> 3분이면 충분합니다.</span>
              </p>

              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <Link
                  href="/create"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-md shadow-primary/15 transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                >
                  무료로 만들어보기
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/w/demo1"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-8 py-4 text-[15px] font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-md"
                >
                  샘플 청첩장 보기
                </Link>
              </div>
            </div>

            {/* Phone mockup side */}
            <div className="flex-shrink-0">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="font-[family-name:var(--font-display)] text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              How it works
            </p>
            <h2 className="mt-3 text-center font-[family-name:var(--font-serif)] text-2xl font-bold text-text md:text-3xl">
              세 단계면 충분합니다
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
              <StepCard
                num={1}
                title="정보 입력"
                desc="이름, 날짜, 장소를 입력하고 원하는 분위기를 선택하세요"
                icon={
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary">
                    <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="9" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="9" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
              />
              <StepCard
                num={2}
                title="AI가 만듭니다"
                desc="사진을 일러스트로 변환하고 감성적인 문구를 자동 생성합니다"
                icon={
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary">
                    <path d="M14 3L16.5 10.5H24L18 15L20 22.5L14 18L8 22.5L10 15L4 10.5H11.5L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                }
              />
              <StepCard
                num={3}
                title="링크 공유"
                desc="완성된 청첩장 링크를 카카오톡이나 SNS로 바로 공유하세요"
                icon={
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary">
                    <circle cx="19" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="9" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="19" cy="21" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="12" y1="12.5" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="12" y1="15.5" x2="16" y2="19" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gradient-to-b from-cream/40 to-white px-4 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="font-[family-name:var(--font-display)] text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Pricing
            </p>
            <h2 className="mt-3 text-center font-[family-name:var(--font-serif)] text-2xl font-bold text-text md:text-3xl">
              합리적인 가격
            </h2>

            <div className="mt-14 grid grid-cols-1 items-center gap-5 md:grid-cols-3">
              {/* Template */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-text-light/50">
                  Basic
                </p>
                <h3 className="mt-1 text-base font-bold text-text">
                  템플릿 청첩장
                </h3>
                <p className="mt-5 text-3xl font-bold text-text">무료~3만원</p>
                <div className="my-5 h-px bg-gray-100" />
                <ul className="space-y-2.5 text-left text-sm text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    정해진 템플릿 디자인
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    개성 표현 제한적
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    비슷한 결과물
                  </li>
                </ul>
              </div>

              {/* VowQUET */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-7 text-center shadow-xl shadow-primary/10 md:-my-4 md:py-9">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold tracking-wider text-white">
                  추천
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                  Premium
                </p>
                <h3 className="mt-1 text-lg font-bold text-primary">
                  VowQUET
                </h3>
                <p className="mt-5 text-3xl font-bold text-primary">5~15만원</p>
                <div className="my-5 h-px bg-primary/10" />
                <ul className="space-y-2.5 text-left text-sm text-text">
                  <li className="flex items-start gap-2 text-primary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    AI 맞춤 디자인
                  </li>
                  <li className="flex items-start gap-2 text-primary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    내 사진 기반 유니크한 결과
                  </li>
                  <li className="flex items-start gap-2 text-primary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    3분만에 빠른 제작
                  </li>
                  <li className="flex items-start gap-2 text-primary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    AI 문구 자동 생성
                  </li>
                </ul>
                <Link
                  href="/create"
                  className="mt-6 block rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  지금 시작하기
                </Link>
              </div>

              {/* Designer */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-text-light/50">
                  Custom
                </p>
                <h3 className="mt-1 text-base font-bold text-text">
                  디자이너 의뢰
                </h3>
                <p className="mt-5 text-3xl font-bold text-text">30~100만원</p>
                <div className="my-5 h-px bg-gray-100" />
                <ul className="space-y-2.5 text-left text-sm text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    완전 맞춤 디자인
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    소통 비용 높음
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    제작 기간 1~2주
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-b from-sage-light/80 to-cream px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-text md:text-4xl">
              지금 바로 시작하세요
            </h2>
            <p className="mt-4 text-lg text-text-light">
              3분이면 세상에 하나뿐인 청첩장이 완성됩니다
            </p>
            <Link
              href="/create"
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-12 py-5 text-lg font-bold text-white shadow-md shadow-primary/15 transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
            >
              무료로 만들어보기
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M7 4L12 9L7 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-secondary/50 bg-white px-4 py-8">
          <p className="text-center text-xs text-text-light/60">
            <span className="font-[family-name:var(--font-display)] font-bold tracking-wide">VowQUET</span>
            {" "}&middot; AI가 만드는 세상에 하나뿐인 모바일 청첩장
          </p>
        </footer>
      </main>
    </>
  );
}
