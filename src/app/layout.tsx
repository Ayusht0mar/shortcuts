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

        <div>
          {children}
        </div>
        <p className="text-center text-gray-500 my-10">
          Made with ❤️ by <a href="https://ayushtomar.in" className="text-blue-500">Ayush Tomar</a>
        </p>
        <Analytics/>
      </body>
    </html>
  );
}
