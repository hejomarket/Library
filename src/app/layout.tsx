import type { Metadata, Viewport } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: siteConfig.name, template: `%s — ${siteConfig.shortName}` },
  description: siteConfig.description,
};

export const viewport: Viewport = { colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7f2ea" }, { media: "(prefers-color-scheme: dark)", color: "#171615" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
