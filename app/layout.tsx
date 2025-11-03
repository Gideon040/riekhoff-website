import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RiekhoffHeader from "./components/RiekhoffHeader";
import RiekhoffFooter from "./components/RiekhoffFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riekhoff Accountants & Adviseurs | Oldenzaal",
  description: "Modern accountantskantoor in Oldenzaal voor MKB ondernemers. Accountancy, fiscaal advies en financiële dienstverlening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RiekhoffHeader />
        {/* Main content met padding-top voor de fixed header */}
        <main className="pt-[90px]">
          {children}
        </main>
        <RiekhoffFooter />
      </body>
    </html>
  );
}