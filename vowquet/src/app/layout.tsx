import type { Metadata } from "next";
import { Gowun_Batang, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VowQUET - AI 웨딩 청첩장",
  description: "사진이 청첩장이 된다. AI가 만드는 세상에 하나뿐인 모바일 청첩장",
  openGraph: {
    title: "VowQUET - AI 웨딩 청첩장",
    description: "사진이 청첩장이 된다. AI가 만드는 세상에 하나뿐인 모바일 청첩장",
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
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        className={`${gowunBatang.variable} ${cormorant.variable}`}
        style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
