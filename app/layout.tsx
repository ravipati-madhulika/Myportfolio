import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/Cursor";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Ravipati Madhulika",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body style={{ fontFamily: "var(--font-pixel), monospace" }}>
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
