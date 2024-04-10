"use client";
import { ClerkProvider } from "@clerk/nextjs";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
