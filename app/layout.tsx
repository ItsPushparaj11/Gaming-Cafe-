import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PixelArena Gaming Cafe | Premium Gaming Experience in Bengaluru",
  description:
    "Experience gaming like never before at PixelArena - Bengaluru's premier gaming cafe with high-performance PCs, PS5 rooms, and racing simulators. Book your session now!",
  keywords: [
    "gaming cafe",
    "Bengaluru",
    "esports",
    "PC gaming",
    "PS5",
    "racing simulator",
  ],
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
