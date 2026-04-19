import XLogo from "@/public/assets/website/x-logo.svg";
import GithubLogo from "@/public/assets/website/github-logo.svg";
import { SITE } from "@/config";

import type {
  SimpleLinksBarContent,
  DefaultFooterContent,
} from "./types";

export const simpleLinksBarData: SimpleLinksBarContent = {
  links: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  socials: [
    { label: "X", href: "https://x.com/usagely", icon: XLogo },
    { label: "GitHub", href: "https://github.com/usagely/usagely", icon: GithubLogo },
  ],
  copyright: `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`,
  logoSrc: "/assets/website/footer-logo.webp",
};

export const defaultFooterData: DefaultFooterContent = {
  brand: {
    href: "/",
    description:
      "Open-source FinOps for AI. Know exactly what your team spends on AI, and stop wasting it.",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/#integrations" },
        { label: "Changelog", href: "https://github.com/usagely/usagely/releases" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "https://docs.usagely.io" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "License (AGPL-3.0)", href: "https://usagely.io/license" },
      ],
    },
  ],
  contact: {
    email: "hello@usagely.io",
    socials: [
      { label: "X", href: "https://x.com/usagely", icon: XLogo },
      { label: "GitHub", href: "https://github.com/usagely/usagely", icon: GithubLogo },
    ],
  },
  copyright: `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`,
};
