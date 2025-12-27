import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";


const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "진성종합무역 - 글로벌 건설자재 공급의 신뢰 파트너",
  description: "고품질 인테리어 자재를 공급하는 건설자재 전문 기업. SPC 바닥재, 울트라보드, FF 판넬, UV 스톤판넬, 온수판넬 등 프리미엄 제품.",
  keywords: ["SPC 바닥재", "울트라보드", "FF 판넬", "UV 스톤판넬", "건설자재", "인테리어 자재", "진성종합무역"],
  authors: [{ name: "JINSUNG" }],
  openGraph: {
    title: "진성종합무역 - JINSUNG",
    description: "글로벌 건설자재 공급의 신뢰 파트너",
    url: "https://www.jinsungco.com",
    siteName: "진성종합무역",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} ${inter.variable} font-sans antialiased`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
