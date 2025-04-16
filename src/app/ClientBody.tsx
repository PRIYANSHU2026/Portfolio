"use client";

import { Toaster } from "sonner";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" closeButton richColors />
      {children}
    </>
  );
}
