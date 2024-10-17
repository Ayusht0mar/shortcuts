import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shortcuts : Every Shortcut at one place",
  description: "Access Shortcut for any software at one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#F5F5F7] h-full inset-0 -z-10 w-full overflow-x-hidden bg-[radial-gradient(#C4C4C6_1px,transparent_1px)] [background-size:16px_16px]">
          {children}
        </div>
        <Analytics/>
      </body>
    </html>
  );
}
