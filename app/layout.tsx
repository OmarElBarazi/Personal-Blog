import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "Personal blog for Omar El Bakir El Barazi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-900 text-white">
        <Navbar />
        <div
          id="page-top-spacer"
          className="h-12 bg-gradient-to-t from-transparent to neutral-800"
        ></div>
        {children}
        <div id="page-bottom-spacer" className="h-16"></div>
        <Footer />
      </body>
    </html>
  );
}
