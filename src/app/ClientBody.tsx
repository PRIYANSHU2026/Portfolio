"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Only apply client-side classes after hydration
  useEffect(() => {
    setIsMounted(true);
    // Remove any extension-added classes during hydration
    document.body.className = "";
  }, []);

  if (!isMounted) {
    return <body suppressHydrationWarning>{children}</body>;
  }

  return <body className="antialiased" suppressHydrationWarning>{children}</body>;
}
