import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | SG Anti-Scam AI",
  description:
    "A platform to report and track scam incidents in Singapore using Generative AI and RPA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${roboto_condensed.className} bg-background`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader />
            <NavBar />
            {children}
            <Toaster richColors />
            <Analytics />
            <SpeedInsights />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
