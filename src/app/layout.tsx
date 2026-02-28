import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SunCursor from "@/components/SunCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech & Sun (TAS)",
  description: "Bridging industrial solar tech with Ethereum public goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-gradient-to-b from-white to-vibrant min-h-screen text-dark font-body antialiased`}
      >
        <SmoothScroll>
          <SunCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
