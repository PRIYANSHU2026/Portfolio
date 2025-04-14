"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "@/components/ui/WelcomeScreen";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Only apply client-side classes after hydration
  useEffect(() => {
    setIsMounted(true);
    // Remove any extension-added classes during hydration
    document.body.className = "";

    // Initialize AOS
    AOS.init({
      once: false,
      mirror: false,
      duration: 1000,
      offset: 50,
    });
  }, []);

  if (!isMounted) {
    return <body suppressHydrationWarning>{children}</body>;
  }

  return (
    <body className="antialiased bg-slate-950 text-slate-100" suppressHydrationWarning>
      <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      <AnimatedBackground />
      {!showWelcome && children}
    </body>
  );
}
