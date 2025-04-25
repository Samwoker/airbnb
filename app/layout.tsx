import "./globals.css";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js project",
  description: "A Next.js project with TypeScript and Tailwind CSS",
  keywords: "Next.js, TypeScript, Tailwind CSS",
};

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="max-w-3xl py-4 mx-auto"> {children}</main>
      </body>
    </html>
  );
}
export default AppLayout;
