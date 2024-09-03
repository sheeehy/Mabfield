import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google"; // Import Maven Pro font
import { Inter } from "next/font/google"; // Import Maven Pro font
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

// Configure the Maven Pro font
const mavenPro = Maven_Pro({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MABFIELD",
  description: "Alternative Sounds via Ireland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white  ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
