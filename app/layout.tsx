import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "برای حنا 💙",
  description: "یه دنیای کوچیک برای حنا.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}