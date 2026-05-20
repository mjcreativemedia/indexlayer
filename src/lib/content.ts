import { getCollection, type CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;
export type PostCategory = PostEntry["data"]["category"];

export const categoryMeta: Record<
  PostCategory,
  { label: PostCategory; slug: string; path: string; description: string }
> = {
  Work: {
    label: "Work",
    slug: "work",
    path: "/posts/category/work/",
    description: "Rebuilds, rescues, audits, and local business website examples.",
  },
  Guide: {
    label: "Guide",
    slug: "guide",
    path: "/posts/category/guide/",
    description: "Practical guides for local business websites and search visibility.",
  },
  "Lab Note": {
    label: "Lab Note",
    slug: "lab-note",
    path: "/posts/category/lab-note/",
    description: "Build notes and operating lessons from IndexLayer.",
  },
  Audit: {
    label: "Audit",
    slug: "audit",
    path: "/posts/category/audit/",
    description: "Website and search visibility audits from real local business examples.",
  },
};

export const postIndexMeta = {
  label: "Posts",
  path: "/posts/",
  description: "Case studies, guides, lessons, audits, and updates from local business website work.",
};

export function getEntryPath(entryOrSlug: PostEntry | string, slug?: string) {
  const postSlug = typeof entryOrSlug === "string" ? (slug ?? entryOrSlug) : entryOrSlug.data.slug;
  return `/posts/${postSlug}/`;
}

export function getCategoryPath(category: PostCategory) {
  return categoryMeta[category].path;
}

export function getCategoryBySlug(slug: string) {
  return Object.values(categoryMeta).find((meta) => meta.slug === slug)?.label;
}

export function byNewest(a: PostEntry, b: PostEntry) {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

export async function getAllPublishedPosts() {
  const entries = await getCollection("posts", ({ data }) => !data.draft);
  return entries.sort(byNewest);
}

export async function getAllPublishedContent() {
  return getAllPublishedPosts();
}

export async function getPostsByCategory(category: PostCategory) {
  const entries = await getAllPublishedPosts();
  return entries.filter((entry) => entry.data.category === category);
}

export function getRelatedEntries(
  current: PostEntry,
  entries: PostEntry[],
  limit = 3,
) {
  const currentTags = new Set(current.data.tags);
  const scored = entries
    .filter((entry) => entry.id !== current.id)
    .map((entry) => {
      const tagMatches = entry.data.tags.filter((tag) => currentTags.has(tag)).length;
      const categoryMatch = entry.data.category === current.data.category ? 1 : 0;
      return { entry, score: tagMatches + categoryMatch };
    })
    .sort((a, b) => b.score - a.score || byNewest(a.entry, b.entry));

  return scored.slice(0, limit).map(({ entry }) => entry);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
