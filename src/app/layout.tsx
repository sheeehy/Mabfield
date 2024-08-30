import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google"; // Import Maven Pro font
import Navbar from "./components/Navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

// Configure the Maven Pro font
const mavenPro = Maven_Pro({ subsets: ["latin"] });

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
    <html lang="en" className={GeistSans.className}>
      <body className="bg-white">
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
