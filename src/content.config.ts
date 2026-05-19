import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  slug: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  pillar: z.string(),
  heroImage: z.string().optional(),
  draft: z.boolean().default(false),
});

const lab = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lab" }),
  schema: baseContentSchema,
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: baseContentSchema,
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
  schema: baseContentSchema.extend({
    client: z.string(),
    projectType: z.string(),
    problem: z.string(),
    outcome: z.string(),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = {
  lab,
  guides,
  "case-studies": caseStudies,
};
