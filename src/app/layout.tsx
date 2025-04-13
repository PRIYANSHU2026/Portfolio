import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Priyanshu Tiwari | AI/ML Researcher",
  description: "AI/ML Researcher and former DRDO Research Intern. Proficient in Python, Machine Learning, and passionate about cutting-edge research.",
  authors: [{ name: "Priyanshu Tiwari" }],
  keywords: ["AI", "Machine Learning", "Research", "Computer Vision", "Deep Learning", "Portfolio"],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f172a',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientBody>
        <div className={`font-sans bg-slate-950 text-white antialiased ${inter.variable}`}>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </div>
      </ClientBody>
    </html>
  );
}
