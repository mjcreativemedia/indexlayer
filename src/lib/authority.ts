export type AuthorityCard = {
  slug: string;
  title: string;
  path: string;
  description: string;
  intro: string;
  points: string[];
  links: { label: string; href: string }[];
};

export const services: AuthorityCard[] = [
  {
    slug: "local-business-websites",
    title: "Local Business Websites",
    path: "/services/local-business-websites/",
    description:
      "Premium static-first websites for local companies that need fast pages, clear offers, strong trust signals, and stable crawlable HTML.",
    intro:
      "IndexLayer builds local business websites as publishing systems first: fast pages, clear routes, complete metadata, useful internal links, and content that can be expanded without creating canonical drift.",
    points: [
      "Offer pages that explain the business quickly and give visitors a clear next step.",
      "HTML-first architecture with stable canonicals, sitemap coverage, and crawlable internal links.",
      "Design that feels premium without depending on a heavy plugin or builder stack.",
    ],
    links: [
      { label: "See selected work", href: "/work/" },
      { label: "Read Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
      { label: "Compare website builders", href: "/compare/" },
    ],
  },
  {
    slug: "seo-rescue",
    title: "SEO Rescue",
    path: "/services/seo-rescue/",
    description:
      "Repair work for sites with indexing, canonical, rendering, sitemap, or internal linking problems that make Google confidence harder to earn.",
    intro:
      "SEO rescue starts by separating visible frontend quality from publishing reliability. A site can look finished and still leak search confidence through unstable routes, incomplete HTML, weak internal links, or conflicting canonical signals.",
    points: [
      "Diagnose crawl symptoms such as alternate canonical, crawled not indexed, soft 404, and duplicate page identity.",
      "Map the issue back to route, metadata, sitemap, rendering, and internal link behavior.",
      "Rebuild the publishing layer so Google has one clear version of each important page.",
    ],
    links: [
      { label: "Better Call Steve SEO Rescue", href: "/work/better-call-steve-seo-rescue/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
      { label: "Search Console audits", href: "/services/search-console-audits/" },
    ],
  },
  {
    slug: "search-console-audits",
    title: "Search Console Audits",
    path: "/services/search-console-audits/",
    description:
      "Plain-English diagnosis of Search Console symptoms, including excluded pages, duplicate canonicals, soft 404s, and crawl mismatches.",
    intro:
      "A Search Console audit is useful when it turns reports into architecture decisions. IndexLayer reads GSC as evidence of how Google is interpreting the publishing system, not just as a list of warnings.",
    points: [
      "Review excluded pages, canonical choices, sitemap parity, and crawl behavior.",
      "Identify which symptoms are content issues and which are publishing system issues.",
      "Create a prioritized repair path tied to routes, templates, metadata, and internal links.",
    ],
    links: [
      { label: "SEO rescue", href: "/services/seo-rescue/" },
      { label: "Better Call Steve case study", href: "/work/better-call-steve-seo-rescue/" },
      { label: "Posts and notes", href: "/posts/" },
    ],
  },
];

export const industries: AuthorityCard[] = [
  {
    slug: "tree-removal-websites",
    title: "Tree Removal Websites",
    path: "/industries/tree-removal-websites/",
    description:
      "Fast local service pages built around emergency intent, location trust, before-and-after proof, and clear quote paths.",
    intro:
      "Tree removal sites need to resolve urgent local intent. The page structure has to make emergency service, service area, proof, safety, and estimate paths obvious to both visitors and crawlers.",
    points: [
      "Service pages for emergency tree removal, trimming, stump grinding, and storm cleanup.",
      "Local trust signals such as service areas, project proof, reviews, insurance, and response expectations.",
      "Fast mobile pages that make calling or requesting an estimate easy.",
    ],
    links: [
      { label: "Local business websites", href: "/services/local-business-websites/" },
      { label: "SEO rescue", href: "/services/seo-rescue/" },
      { label: "Compare website platforms", href: "/compare/" },
    ],
  },
  {
    slug: "life-insurance-websites",
    title: "Life Insurance Websites",
    path: "/industries/life-insurance-websites/",
    description:
      "Trust-first funnels for brokers and agencies that need simple explanations, clean lead paths, and stable educational content.",
    intro:
      "Life insurance sites need to feel calm, trustworthy, and clear. The structure should support quote intent, education, eligibility questions, and advisor credibility without burying the next step.",
    points: [
      "Landing pages for quote requests, policy education, family protection, and broker positioning.",
      "Clear explanations that reduce confusion without sounding like generic finance content.",
      "A content system that can grow into guides, FAQs, and comparison pages.",
    ],
    links: [
      { label: "MyCornerstonePlan work", href: "/work/mycornerstoneplan-seo-ready-life-insurance-funnel/" },
      { label: "Local business websites", href: "/services/local-business-websites/" },
      { label: "Guides", href: "/guides/" },
    ],
  },
  {
    slug: "martial-arts-websites",
    title: "Martial Arts Websites",
    path: "/industries/martial-arts-websites/",
    description:
      "Gym websites that preserve real authority through coaches, programs, schedules, media, and local community signals.",
    intro:
      "Martial arts gyms often already have the strongest material: coaches, students, fighters, classes, photos, and local reputation. The website has to make that authority easier to understand in the first few seconds.",
    points: [
      "Program pages for BJJ, MMA, Muay Thai, kids classes, beginners, and competition training.",
      "Real media and coach history presented without burying users in long undifferentiated blocks.",
      "Mobile-first paths to schedule, contact, trial classes, and location details.",
    ],
    links: [
      { label: "Chicago Fight Team project", href: "/work/chicago-fight-team/" },
      { label: "Chicago Fight Team rebuild notes", href: "/work/chicago-fight-team-homepage-rebuild/" },
      { label: "Local business websites", href: "/services/local-business-websites/" },
    ],
  },
];

export const comparisons: AuthorityCard[] = [
  {
    slug: "wix-vs-indexlayer",
    title: "Wix vs IndexLayer",
    path: "/compare/wix-vs-indexlayer/",
    description:
      "A comparison for businesses weighing template convenience against technical control, search architecture, and publishing stability.",
    intro:
      "Wix can be useful when speed and simplicity matter most. IndexLayer is for businesses that want the website treated as a search-indexed publishing system with cleaner control over HTML, routes, canonicals, internal links, and long-term content growth.",
    points: [
      "Wix prioritizes visual editing and convenience; IndexLayer prioritizes stable crawlable publishing.",
      "IndexLayer is a better fit when service pages, industry pages, and comparison pages need to scale cleanly.",
      "The tradeoff is less drag-and-drop control in exchange for a more deliberate search foundation.",
    ],
    links: [
      { label: "Local business websites", href: "/services/local-business-websites/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
      { label: "Work examples", href: "/work/" },
    ],
  },
  {
    slug: "webflow-vs-indexlayer",
    title: "Webflow vs IndexLayer",
    path: "/compare/webflow-vs-indexlayer/",
    description:
      "A comparison for teams choosing between a visual website builder and an HTML-first local search publishing system.",
    intro:
      "Webflow gives teams a polished visual design surface. IndexLayer focuses on the parts local businesses usually need most after launch: route stability, indexing clarity, content expansion, and internal link strategy.",
    points: [
      "Webflow is strong for visual control; IndexLayer is stronger for service-led search architecture.",
      "IndexLayer is built around durable URL folders for services, industries, comparisons, work, and posts.",
      "The goal is not just a good-looking page. The goal is a page Google and customers can understand consistently.",
    ],
    links: [
      { label: "Services", href: "/services/" },
      { label: "Industries", href: "/industries/" },
      { label: "Compare pages", href: "/compare/" },
    ],
  },
  {
    slug: "squarespace-vs-indexlayer",
    title: "Squarespace vs IndexLayer",
    path: "/compare/squarespace-vs-indexlayer/",
    description:
      "A comparison for local businesses choosing between polished templates and a custom publishing system built for search growth.",
    intro:
      "Squarespace is often enough for a simple brochure site. IndexLayer is for local businesses that need the site to become a durable search asset with service pages, topical guides, work proof, and future comparison or industry pages.",
    points: [
      "Squarespace is convenient for a small static presence; IndexLayer is designed for structured growth.",
      "IndexLayer gives more control over how content, canonicals, metadata, and internal links work together.",
      "The right choice depends on whether the site is only a brochure or a long-term search surface.",
    ],
    links: [
      { label: "Local business websites", href: "/services/local-business-websites/" },
      { label: "Industries", href: "/industries/" },
      { label: "Posts", href: "/posts/" },
    ],
  },
  {
    slug: "wordpress-vs-indexlayer",
    title: "WordPress vs IndexLayer",
    path: "/compare/wordpress-vs-indexlayer/",
    description:
      "A comparison for businesses tired of plugin-heavy WordPress stacks, maintenance drag, and unclear indexing behavior.",
    intro:
      "WordPress can power almost anything, but local business sites often inherit too much complexity from themes, plugins, page builders, and hosting layers. IndexLayer keeps the publishing surface lighter and more predictable.",
    points: [
      "WordPress offers flexibility; IndexLayer offers a narrower, cleaner system for local search pages.",
      "IndexLayer avoids plugin dependence for core metadata, performance, sitemap, and route behavior.",
      "The result is less machinery between the business, the customer, and the crawler.",
    ],
    links: [
      { label: "SEO rescue", href: "/services/seo-rescue/" },
      { label: "Search Console audits", href: "/services/search-console-audits/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
    ],
  },
  {
    slug: "replit-vs-indexlayer",
    title: "Replit vs IndexLayer",
    path: "/compare/replit-vs-indexlayer/",
    description:
      "A comparison for founders using AI site builders who need the final website to resolve, index, and scale like a stable production surface.",
    intro:
      "AI site builders can move fast, but the output still has to behave like a production website. IndexLayer focuses on the publishing discipline that makes AI-assisted sites easier for Google and customers to trust.",
    points: [
      "AI can create useful frontend momentum, but route identity and crawlable HTML still need discipline.",
      "IndexLayer reviews the output through sitemap, canonical, metadata, rendering, and internal link behavior.",
      "This is the gap between a generated page and a stable local business website.",
    ],
    links: [
      { label: "SEO rescue", href: "/services/seo-rescue/" },
      { label: "Better Call Steve case study", href: "/work/better-call-steve-seo-rescue/" },
      { label: "Posts", href: "/posts/" },
    ],
  },
];

export function findAuthorityCard(cards: AuthorityCard[], slug: string) {
  return cards.find((card) => card.slug === slug);
}
