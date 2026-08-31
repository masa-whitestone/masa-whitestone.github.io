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
  href: string;
  /** Shown next to the label as a stable identifier, e.g. an ORCID iD. */
  handle?: string;
};

export const links: ProfileLink[] = [
  { label: "Email", href: `mailto:${site.email}`, handle: site.email },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0006-9448-0181",
    handle: "0009-0006-9448-0181",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=PAubJrEAAAAJ",
  },
  { label: "GitHub", href: "https://github.com/masa-whitestone", handle: "@masa-whitestone" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/masaki-shiraishi/" },
  { label: "X", href: "https://x.com/masawhitestone", handle: "@masawhitestone" },
];

/**
 * Drop a CV at `public/cv.pdf` and flip this on — the link appears everywhere
 * it belongs and stays hidden until then.
 */
export const cv = {
  available: false,
  href: "/cv.pdf",
} as const;
