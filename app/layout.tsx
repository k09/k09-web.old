import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Empty from "./components/Empty";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "k09.me",
  description: "..... by k09 (me)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Empty/>
        <main>{
          children}
        </main>
      </body>
    </html>
  );
}
