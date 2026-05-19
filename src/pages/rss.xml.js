import rss from "@astrojs/rss";
import { getAllPublishedContent, getEntryPath } from "../lib/content";

export async function GET(context) {
  const entries = await getAllPublishedContent();

  return rss({
    title: "IndexLayer",
    description:
      "Technical publishing notes, indexing case studies, and stable HTML guides from IndexLayer.",
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: getEntryPath(entry.collection, entry.data.slug),
    })),
    customData: "<language>en-us</language>",
  });
}
