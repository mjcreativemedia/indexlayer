import { getCollection, type CollectionEntry } from "astro:content";

export type ContentCollection = "lab" | "case-studies" | "guides";
export type AnyContentEntry =
  | CollectionEntry<"lab">
  | CollectionEntry<"case-studies">
  | CollectionEntry<"guides">;

export const collectionMeta: Record<
  ContentCollection,
  { label: string; path: string; description: string }
> = {
  lab: {
    label: "Lab Notes",
    path: "/lab/",
    description: "Fast technical notes from IndexLayer builds, rescues, and publishing experiments.",
  },
  "case-studies": {
    label: "Case Studies",
    path: "/case-studies/",
    description: "Proof-focused breakdowns of real indexing rescues and SEO-ready builds.",
  },
  guides: {
    label: "Guides",
    path: "/guides/",
    description: "Evergreen education on stable HTML, indexing systems, and local service SEO.",
  },
};

export function getEntryPath(collection: ContentCollection, slug: string) {
  return `${collectionMeta[collection].path}${slug}/`;
}

export function byNewest(a: AnyContentEntry, b: AnyContentEntry) {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

export async function getPublishedCollection(collection: ContentCollection) {
  const entries = await getCollection(collection, ({ data }) => !data.draft);
  return entries.sort(byNewest);
}

export async function getAllPublishedContent() {
  const entries = await Promise.all([
    getPublishedCollection("case-studies"),
    getPublishedCollection("lab"),
    getPublishedCollection("guides"),
  ]);

  return entries.flat().sort(byNewest);
}

export function getRelatedEntries(
  current: AnyContentEntry,
  entries: AnyContentEntry[],
  limit = 3,
) {
  const currentTags = new Set(current.data.tags);
  const scored = entries
    .filter((entry) => entry.id !== current.id)
    .map((entry) => {
      const tagMatches = entry.data.tags.filter((tag) => currentTags.has(tag)).length;
      const pillarMatch = entry.data.pillar === current.data.pillar ? 1 : 0;
      return { entry, score: tagMatches + pillarMatch };
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
