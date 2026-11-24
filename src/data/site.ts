import type { IconName } from "@/lib/icons";

export const site = {
  name: "Masaki Shiraishi",
  nameJa: "白石 将晃",
  title: "Quantum Algorithm & ML Engineer",
  affiliation: "Department of Applied Physics, Waseda University",
  /** Answers "who is this and what do they work on" above the fold. */
  tagline:
    "Working at the intersection of quantum computing and machine learning, with a focus on implementation and real-world impact.",
  email: "masaki.shiraishi@fuji.waseda.jp",
  url: "https://masa-whitestone.github.io",
  description:
    "Masaki Shiraishi is a Quantum Algorithm & ML Engineer working on AI agents for quantum computing, quantum algorithms, and hybrid quantum-HPC systems.",
} as const;

export type ProfileLink = {
  label: string;
  icon: IconName;
  href: string;
  /** A stable identifier, e.g. an ORCID iD — surfaced as the link's tooltip. */
  handle?: string;
};

export const links: ProfileLink[] = [
  { label: "Email", icon: "email", href: `mailto:${site.email}`, handle: site.email },
  {
    label: "ORCID",
    icon: "orcid",
    href: "https://orcid.org/0009-0006-9448-0181",
    handle: "0009-0006-9448-0181",
  },
  {
    label: "Google Scholar",
    icon: "scholar",
    href: "https://scholar.google.com/citations?user=PAubJrEAAAAJ",
  },
  { label: "GitHub", icon: "github", href: "https://github.com/masa-whitestone", handle: "@masa-whitestone" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/masaki-shiraishi/" },
  { label: "X", icon: "x", href: "https://x.com/masawhitestone", handle: "@masawhitestone" },
];

/**
 * Drop a CV at `public/cv.pdf` and flip this on — the link appears everywhere
 * it belongs and stays hidden until then.
 */
export const cv = {
  available: true,
  href: "/cv.pdf",
} as const;
