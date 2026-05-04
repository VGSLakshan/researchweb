import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "CementAI — Automated Cement Quality Assessment | SLIIT 2025–26",
  description: "An Integrated AI and IoT-Based Framework for Automated Cement Quality Assessment. Project 25-26J-250, SLIIT Final Year Research 2025–26.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#111]">
        {children}
      </body>
    </html>
  );
}
