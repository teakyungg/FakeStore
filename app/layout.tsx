import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "FakeStore",
  description: "FakeStore API를 사용한 연습용 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
