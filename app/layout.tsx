import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "ICAFM 2026 - Advanced Functional Materials for Clean Energy, Environment, and Healthcare",
    template: "%s | ICAFM 2026",
  },
  description: "Join leading researchers at ICAFM 2026. March 05-06, 2026, New York City. Submit your papers and register now.",
  keywords: ["conference", "research", "materials science", "clean energy", "healthcare", "environment", "ICAFM"],
  authors: [{ name: "ICAFM Organization" }],
  creator: "ICAFM Organization",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icafm2026.org",
    title: "ICAFM 2026 - Advanced Functional Materials",
    description: "International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare. March 05-06, 2026.",
    siteName: "ICAFM 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICAFM 2026",
    description: "Advanced Functional Materials for Clean Energy, Environment, and Healthcare. March 05-06, 2026.",
    creator: "@icar2025",
  },
  metadataBase: new URL("https://icar2025.org"),
};

// ... existing imports

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
