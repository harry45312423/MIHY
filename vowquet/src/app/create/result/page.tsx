"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { InvitationData } from "@/lib/types";
import ShareActions from "@/components/create/ShareActions";

function ResultContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<InvitationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError(true);
      return;
    }

    fetch(`/api/invitation/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json() as Promise<InvitationData>;
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-text-light text-sm">청첩장을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error || !data || !id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center px-6">
          <p className="text-text text-lg mb-4">
            청첩장을 찾을 수 없습니다
          </p>
          <Link
            href="/create"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            새로 만들기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[480px] mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] text-2xl text-text mb-2">
            청첩장이 완성되었습니다!
          </h1>
          <p className="text-text-light text-sm">
            {data.groomName} ♥ {data.brideName}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-secondary p-6 mb-8">
          <div className="text-center mb-5">
            <p className="text-sm text-text-light mb-4">미리보기</p>
            <div className="bg-cream rounded-xl p-6">
              <p className="font-[family-name:var(--font-serif)] text-lg text-text mb-2">
                {data.groomName}
                <span className="mx-2 text-primary">&#9829;</span>
                {data.brideName}
              </p>
              <p className="text-sm text-text-light mb-1">
                {data.weddingDate}
              </p>
              <p className="text-sm text-text-light">{data.venue}</p>
            </div>
          </div>

          <Link
            href={`/w/${id}`}
            className="block w-full py-3 bg-primary text-white text-center text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            청첩장 보기
          </Link>
        </div>

        <ShareActions id={id} />
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
