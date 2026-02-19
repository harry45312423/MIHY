import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide text-text"
        >
          VowQUET
        </Link>
        <Link
          href="/create"
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          만들기
        </Link>
      </div>
    </header>
  );
}
