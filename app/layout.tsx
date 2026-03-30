import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/Cursor";
import GamePopup from "@/components/Game";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Ravipati Madhulika",
  description: "Portfolio",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body>
        <CustomCursor/>
        <GamePopup/>
        {children}
      </body>
    </html>
  );
}
