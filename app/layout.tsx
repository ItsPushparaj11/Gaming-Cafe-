import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PixelArena Gaming Cafe | Premium Gaming Experience in Bengaluru",
  description:
     "A web-based platform to manage gaming café bookings, pricing, and tournaments.",
  keywords: [
    "gaming cafe Management",
    "Booking System",
    "esports",
    "PC gaming",
    "PS5",
    "racing simulator",
  ],
    generator: 'Pushpa Raj Dhamala'
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
