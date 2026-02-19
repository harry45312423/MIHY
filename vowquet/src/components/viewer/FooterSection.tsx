"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FooterSectionProps {
  groomName: string;
  brideName: string;
}

export default function FooterSection({ groomName, brideName }: FooterSectionProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setCanShare(typeof navigator.share === "function");
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API 미지원 시 무시
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${groomName} ♥ ${brideName} 결혼합니다`,
        url: currentUrl,
      });
    } catch {
      // 사용자 취소 시 무시
    }
  };

  return (
    <section className="bg-sage-light/60 py-14 px-6">
      <div className="max-w-sm mx-auto text-center">
        {/* 안내 문구 */}
        <p className="font-[family-name:var(--font-serif)] text-[15px] text-text-light leading-relaxed mb-8">
          소중한 분들에게
          <br />
          알려주세요
        </p>

        {/* 버튼 영역 */}
        <div className="flex flex-col gap-3 mb-12">
          <button
            onClick={handleCopy}
            className="w-full py-3.5 rounded-xl border border-primary/50 bg-white text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {copied ? "링크가 복사되었습니다" : "링크 복사하기"}
          </button>

          {canShare && (
            <button
              onClick={handleShare}
              className="w-full py-3.5 rounded-xl bg-primary text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              공유하기
            </button>
          )}
        </div>

        {/* 브랜딩 */}
        <div className="border-t border-cream-dark/60 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] text-text-light/60 transition-colors hover:text-text-light/80"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-50"
            >
              <path
                d="M12 3C7.5 3 4 6 4 9.5C4 15 12 21 12 21C12 21 20 15 20 9.5C20 6 16.5 3 12 3Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M12 3C7.5 3 4 6 4 9.5C4 15 12 21 12 21C12 21 20 15 20 9.5C20 6 16.5 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span className="font-[family-name:var(--font-display)] font-medium tracking-wider">VowQUET</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
