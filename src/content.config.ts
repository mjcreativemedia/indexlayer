import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    slug: z.string(),
    category: z.enum(["Work", "Guide", "Lab Note", "Audit"]),
    tags: z.array(z.string()).default([]),
    pillar: z.string().optional(),
    authorName: z.string().default("Mitch Argamasilla"),
    authorImage: z.string().default("/images/authors/mitch-argamasilla.jpeg"),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
    client: z.string().optional(),
    projectType: z.string().optional(),
    problem: z.string().optional(),
    outcome: z.string().optional(),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts,
};
