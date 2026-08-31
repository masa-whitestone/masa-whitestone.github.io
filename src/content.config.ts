import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Every fact shown on this site lives in one of these collections.
 * Adding a paper, a media appearance or an award should never require
 * touching a component — add an entry below and the site picks it up.
 */

const research = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    keywords: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: file("src/data/publications.yaml"),
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        affiliation: z.string().optional(),
        self: z.boolean().default(false),
      }),
    ),
    venue: z.string(),
    venueShort: z.string().optional(),
    year: z.number(),
    date: z.coerce.date(),
    status: z.enum(["published", "accepted", "preprint", "in-review"]),
    links: z
      .object({
        arxiv: z.string().optional(),
        doi: z.string().optional(),
        ieee: z.string().optional(),
        pdf: z.string().optional(),
        code: z.string().optional(),
      })
      .default({}),
    abstract: z.string().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const media = defineCollection({
  loader: file("src/data/media.yaml"),
  schema: z.object({
    outlet: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    url: z.url(),
    /** How I appear in the piece — keeps "quoted" honest vs. "wrote". */
    kind: z.enum(["comment", "interview", "mention", "byline"]),
    language: z.enum(["en", "ja"]).default("en"),
    note: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const awards = defineCollection({
  loader: file("src/data/awards.yaml"),
  schema: z.object({
    title: z.string(),
    titleJa: z.string().optional(),
    organization: z.string(),
    organizationJa: z.string().optional(),
    year: z.number(),
    date: z.coerce.date(),
    url: z.url().optional(),
    note: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: file("src/data/experience.yaml"),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    unit: z.string().optional(),
    /** Employment basis as stated on my CV: contract, internship, degree… */
    kind: z.string().optional(),
    location: z.string().optional(),
    start: z.coerce.date(),
    /** Omit for a position I currently hold. */
    end: z.coerce.date().optional(),
    focus: z.string().optional(),
    url: z.url().optional(),
  }),
});

export const collections = { research, publications, media, awards, experience };
