import type { NavbarContent } from "./types";

export const navbarData: NavbarContent = {
  brandHref: "/",
  links: [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "https://docs.usagely.io", label: "Docs" },
    { href: "https://github.com/usagely/usagely", label: "GitHub" },
  ],
  cta: { label: "Get Started Free" },
  showThemeSwitcher: true,
};
