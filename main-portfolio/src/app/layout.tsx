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
  title: "Frontend Developer Portfolio",
  description: "Creating innovative, functional, and user-friendly websites for digital solutions.",
  authors: [{ name: "Your Name" }],
  keywords: ["Frontend", "Developer", "Portfolio", "React", "JavaScript"],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#030014',
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
        <div className={`font-sans bg-[#030014] text-white antialiased ${inter.variable}`}>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </div>
      </ClientBody>
    </html>
  );
}