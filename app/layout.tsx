import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ángel René Herrera Calzada - ICT Engineer",
  description: "I am an IT and Communication Technologies engineer with extensive experience in software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
