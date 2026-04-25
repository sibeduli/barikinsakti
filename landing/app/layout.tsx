import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Barikin Sakti - Advance Slickline & Well Production Services",
  description: "Indonesian oilfield services company providing practical and cost-effective solutions for well evaluation and production enhancement. Slickline, wireline, BOP testing, and memory logging services since 1995.",
  keywords: ["slickline", "wireline", "oil and gas", "well services", "Indonesia", "BOP testing", "production logging"],
  openGraph: {
    title: "PT. Barikin Sakti - Advance Slickline & Well Production Services",
    description: "Indonesian oilfield services company providing practical and cost-effective solutions for well evaluation and production enhancement since 1995.",
    url: "https://barikinsakti.hitek.cloud",
    siteName: "PT. Barikin Sakti",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Barikin Sakti - Advance Slickline & Well Production Services",
    description: "Indonesian oilfield services company providing practical and cost-effective solutions for well evaluation and production enhancement since 1995.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
