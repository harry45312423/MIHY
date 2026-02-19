"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ShareActions({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const url = `${window.location.origin}/w/${id}`;
    setShareUrl(url);
    setCanShare(typeof navigator.share === "function");
  }, [id]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API 실패 시 무시
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "결혼 청첩장",
        url: shareUrl,
      });
    } catch {
      // 사용자가 공유 취소 시 무시
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          readOnly
          value={shareUrl}
          className="flex-1 px-4 py-3 border border-secondary rounded-lg bg-cream text-sm text-text outline-none"
        />
        <button
          onClick={handleCopy}
          className="px-5 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors shrink-0"
        >
          {copied ? "복사됨!" : "링크 복사"}
        </button>
      </div>

      <div className="flex gap-3">
        {canShare && (
          <button
            onClick={handleShare}
            className="flex-1 px-5 py-3 border-2 border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            공유하기
          </button>
        )}
        <Link
          href="/create"
          className="flex-1 px-5 py-3 border-2 border-accent text-accent text-sm font-medium rounded-lg hover:bg-accent hover:text-white transition-colors text-center"
        >
          새로 만들기
        </Link>
      </div>
    </div>
  );
}
