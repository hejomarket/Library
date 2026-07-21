export type NavigationItem = { label: string; href: string; description?: string };
export type SocialLink = { label: string; href: string };

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  baseUrl: string;
  navigation: NavigationItem[];
  footerNavigation: NavigationItem[];
  socialLinks: SocialLink[];
  defaultReadingSpeed: number;
};

const fallbackBaseUrl = "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "Library",
  shortName: "Library",
  tagline: "The world's best books, distilled into powerful 15-minute reads.",
  description:
    "Discover independently written book summaries, essential ideas, practical lessons, and thoughtful commentary from books that can change how you work, think, and live.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackBaseUrl,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library", description: "Browse summaries by theme and title." },
    { label: "About", href: "/about" },
  ],
  footerNavigation: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [],
  defaultReadingSpeed: 225,
};
