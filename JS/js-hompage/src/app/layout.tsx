import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "진성종합무역 | JINSUNG - 프리미엄 인테리어 자재 전문",
  description: "SPC 바닥재, UV 스톤판넬, FF 판넬, 울트라보드 등 고품질 친환경 인테리어 건설자재 전문 기업 진성종합무역입니다.",
  keywords: "진성종합무역, SPC 바닥재, UV 스톤판넬, FF 판넬, 울트라보드, 온수판넬, 인테리어 자재, 건설자재",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
