import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
