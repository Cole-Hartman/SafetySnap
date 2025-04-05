import { Shield } from "lucide-react";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <div className="flex flex-col gap-20 max-w-full h-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
