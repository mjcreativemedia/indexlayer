import rss from "@astrojs/rss";
import { getAllPublishedContent, getEntryPath } from "../lib/content";

export async function GET(context) {
  const entries = await getAllPublishedContent();

  return rss({
    title: "IndexLayer",
    description:
      "Work examples, guides, lab notes, and website visibility posts from IndexLayer.",
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: getEntryPath(entry),
    })),
    customData: "<language>en-us</language>",
  });
}
