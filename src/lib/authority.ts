export type AuthorityLink = {
  label: string;
  href: string;
};

export type AuthorityCard = {
  slug: string;
  title: string;
  path: string;
  description: string;
  problem: string;
  fit: string[];
  deliverables: string[];
  proofLinks: AuthorityLink[];
  relatedLinks: AuthorityLink[];
  exampleProject?: {
    label: string;
    title: string;
    text: string;
    href: string;
  };
};

export const services: AuthorityCard[] = [
  {
    slug: "local-business-websites",
    title: "Local Business Websites",
    path: "/services/local-business-websites/",
    description:
      "Premium static-first websites for local companies that need fast pages, clear offers, strong trust signals, and stable crawlable HTML.",
    problem:
      "Many local business websites look fine on the surface but make visitors work too hard: unclear offers, slow pages, buried proof, weak mobile paths, and content that cannot grow without turning into a mess.",
    fit: [
      "A local business needs a sharper website before investing in more content or paid traffic.",
      "The current site feels generic, slow, hard to update, or disconnected from real customer intent.",
      "The business wants service, industry, work, and educational pages to share one clean structure.",
    ],
    deliverables: [
      "A fast homepage and core service pages with clear positioning, proof, next actions, and crawlable HTML.",
      "Stable metadata, canonical URLs, sitemap coverage, internal links, and reusable page patterns.",
      "A publishing base that can expand into posts, guides, comparison pages, and industry pages without URL drift.",
    ],
    proofLinks: [
      { label: "Chicago Fight Team project", href: "/work/chicago-fight-team/" },
      { label: "Chicago Fight Team rebuild notes", href: "/work/chicago-fight-team-homepage-rebuild/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
    ],
    relatedLinks: [
      { label: "SEO Rescue", href: "/services/seo-rescue/" },
      { label: "Martial Arts Websites", href: "/industries/martial-arts-websites/" },
      { label: "Compare website builders", href: "/compare/" },
    ],
    exampleProject: {
      label: "Example",
      title: "Chicago Fight Team",
      text: "The gym already had real authority: coaches, fighters, history, footage, and a physical local presence. The rebuild direction preserves that proof and makes it easier to understand quickly.",
      href: "/work/chicago-fight-team/",
    },
  },
  {
    slug: "seo-rescue",
    title: "SEO Rescue",
    path: "/services/seo-rescue/",
    description:
      "Repair work for sites with indexing, canonical, rendering, sitemap, or internal linking problems that make Google confidence harder to earn.",
    problem:
      "A site can look polished and still leak crawl confidence through route drift, incomplete crawler-visible HTML, conflicting canonicals, weak sitemap coverage, or unclear internal links.",
    fit: [
      "Google Search Console shows alternate canonical, crawled not indexed, duplicate, soft 404, or sitemap mismatch signals.",
      "The site was built with a heavy app stack, AI builder, page builder, or layered publishing setup and search visibility is unstable.",
      "You need a clear repair path before rebuilding everything from scratch.",
    ],
    deliverables: [
      "A crawl and page identity review across routes, canonicals, metadata, sitemap, and internal links.",
      "A prioritized repair map that separates content problems from publishing architecture problems.",
      "Implementation recommendations for stabilizing the pages Google should trust.",
    ],
    proofLinks: [
      { label: "Better Call Steve SEO Rescue", href: "/work/better-call-steve-seo-rescue/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
      { label: "Search Console Audits", href: "/services/search-console-audits/" },
    ],
    relatedLinks: [
      { label: "Replit vs IndexLayer", href: "/compare/replit-vs-indexlayer/" },
      { label: "WordPress vs IndexLayer", href: "/compare/wordpress-vs-indexlayer/" },
      { label: "Posts", href: "/posts/" },
    ],
    exampleProject: {
      label: "Proof",
      title: "Better Call Steve",
      text: "That project exposed the difference between a good-looking frontend and a stable publishing layer. The useful lesson was not cosmetic. It was route identity, HTML output, metadata, canonicals, and sitemap parity.",
      href: "/work/better-call-steve-seo-rescue/",
    },
  },
  {
    slug: "search-console-audits",
    title: "Search Console Audits",
    path: "/services/search-console-audits/",
    description:
      "Plain-English diagnosis of Search Console symptoms, including excluded pages, duplicate canonicals, soft 404s, and crawl mismatches.",
    problem:
      "Search Console reports are easy to misread as isolated warnings. The useful question is what those reports say about the way the site publishes pages.",
    fit: [
      "You see excluded, duplicate, alternate canonical, discovered, or crawled-not-indexed pages and need to know what matters.",
      "Your sitemap and internal links do not clearly match the pages you want indexed.",
      "You want a practical diagnosis before paying for broad SEO work.",
    ],
    deliverables: [
      "A review of index coverage, sitemap behavior, canonical choices, and important page templates.",
      "A short list of the routes that deserve repair first.",
      "A plain-English explanation of whether each issue is content, technical, structural, or harmless.",
    ],
    proofLinks: [
      { label: "Better Call Steve case study", href: "/work/better-call-steve-seo-rescue/" },
      { label: "SEO Rescue", href: "/services/seo-rescue/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
    ],
    relatedLinks: [
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "WordPress vs IndexLayer", href: "/compare/wordpress-vs-indexlayer/" },
      { label: "Posts", href: "/posts/" },
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
    problem:
      "Tree removal searches are urgent and local. A generic contractor template usually hides the things customers need first: service area, emergency response, proof of work, insurance, estimates, and clear ways to call.",
    fit: [
      "A tree service needs clearer pages for emergency tree removal, trimming, stump grinding, or storm cleanup.",
      "The current site does not make service area, trust, response expectations, or quote paths obvious.",
      "The business wants a structure that can later expand into city pages without becoming thin or duplicated.",
    ],
    deliverables: [
      "A homepage and service page structure for emergency intent, service categories, local trust, and quote requests.",
      "Reusable sections for before-and-after proof, service areas, equipment, insurance, FAQs, and reviews.",
      "Internal links that support future service and location pages without inventing fake content.",
    ],
    proofLinks: [
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "SEO Rescue", href: "/services/seo-rescue/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
    ],
    relatedLinks: [
      { label: "Wix vs IndexLayer", href: "/compare/wix-vs-indexlayer/" },
      { label: "WordPress vs IndexLayer", href: "/compare/wordpress-vs-indexlayer/" },
      { label: "Industries", href: "/industries/" },
    ],
  },
  {
    slug: "life-insurance-websites",
    title: "Life Insurance Websites",
    path: "/industries/life-insurance-websites/",
    description:
      "Trust-first funnels for brokers and agencies that need simple explanations, clean lead paths, and stable educational content.",
    problem:
      "Life insurance buyers often arrive confused, cautious, and skeptical. The website has to explain the offer calmly, show why the advisor is trustworthy, and make the next step feel low-pressure.",
    fit: [
      "A broker or agency needs a cleaner funnel for education, quote requests, and advisor credibility.",
      "The site needs to publish guides or FAQs without turning into scattered blog content.",
      "The business wants a static-first foundation that can grow into search pages over time.",
    ],
    deliverables: [
      "A trust-first homepage and funnel structure for quote intent, policy education, and contact actions.",
      "FAQ and guide patterns that support real buyer questions without generic finance filler.",
      "Internal links from educational content back to the core funnel.",
    ],
    proofLinks: [
      { label: "MyCornerstonePlan work", href: "/work/mycornerstoneplan-seo-ready-life-insurance-funnel/" },
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "Guides", href: "/guides/" },
    ],
    relatedLinks: [
      { label: "Search Console Audits", href: "/services/search-console-audits/" },
      { label: "Squarespace vs IndexLayer", href: "/compare/squarespace-vs-indexlayer/" },
      { label: "Industries", href: "/industries/" },
    ],
    exampleProject: {
      label: "Related work",
      title: "MyCornerstonePlan",
      text: "The life insurance funnel shows the cleaner side of the IndexLayer method: static-first pages, clear educational structure, and one path back to the core offer.",
      href: "/work/mycornerstoneplan-seo-ready-life-insurance-funnel/",
    },
  },
  {
    slug: "martial-arts-websites",
    title: "Martial Arts Websites",
    path: "/industries/martial-arts-websites/",
    description:
      "Gym websites that preserve real authority through coaches, programs, schedules, media, and local community signals.",
    problem:
      "Martial arts gyms often have real authority offline, but their websites bury it in long copy, generic fitness language, weak mobile structure, or media that is hard to scan.",
    fit: [
      "A gym needs clearer program pages for BJJ, MMA, Muay Thai, kids classes, beginners, or competition training.",
      "The site should show real coaches, fighters, training media, schedule, location, and community proof quickly.",
      "The business wants a site that feels local and credible instead of like a generic gym template.",
    ],
    deliverables: [
      "A homepage structure that leads with gym identity, programs, location, real media, and next actions.",
      "Program sections that make classes, skill levels, and reasons to train easy to understand.",
      "Crawlable pages for local search while preserving the gym's actual voice and proof.",
    ],
    proofLinks: [
      { label: "Chicago Fight Team project", href: "/work/chicago-fight-team/" },
      { label: "Chicago Fight Team rebuild notes", href: "/work/chicago-fight-team-homepage-rebuild/" },
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
    ],
    relatedLinks: [
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
      { label: "Webflow vs IndexLayer", href: "/compare/webflow-vs-indexlayer/" },
      { label: "Industries", href: "/industries/" },
    ],
    exampleProject: {
      label: "Proof",
      title: "Chicago Fight Team",
      text: "Chicago Fight Team already had the hard part: real coaches, fighters, photos, video, history, and a physical training culture. The rebuild direction is about making that authority visible faster.",
      href: "/work/chicago-fight-team/",
    },
  },
];

export const comparisons: AuthorityCard[] = [
  {
    slug: "wix-vs-indexlayer",
    title: "Wix vs IndexLayer",
    path: "/compare/wix-vs-indexlayer/",
    description:
      "A comparison for businesses weighing template convenience against technical control, search architecture, and publishing stability.",
    problem:
      "Wix is convenient for getting a polished page online quickly. The tradeoff appears when a local business needs more control over page structure, internal links, service pages, and long-term search growth.",
    fit: [
      "Wix is a good fit when the site is mostly a simple brochure and the owner wants drag-and-drop editing.",
      "IndexLayer is a better fit when services, industries, guides, work, and comparison pages need to support search.",
      "The choice depends on whether the site is mainly a visual presence or a growing publishing asset.",
    ],
    deliverables: [
      "A custom static-first website with deliberate URL structure, metadata, sitemap behavior, and internal links.",
      "A content architecture that can grow without relying on temporary taxonomy folders.",
      "A clearer path from service pages and proof pages to contact.",
    ],
    proofLinks: [
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
      { label: "Work examples", href: "/work/" },
    ],
    relatedLinks: [
      { label: "Squarespace vs IndexLayer", href: "/compare/squarespace-vs-indexlayer/" },
      { label: "WordPress vs IndexLayer", href: "/compare/wordpress-vs-indexlayer/" },
      { label: "Compare hub", href: "/compare/" },
    ],
  },
  {
    slug: "webflow-vs-indexlayer",
    title: "Webflow vs IndexLayer",
    path: "/compare/webflow-vs-indexlayer/",
    description:
      "A comparison for teams choosing between a visual website builder and an HTML-first local search publishing system.",
    problem:
      "Webflow is strong for visual design control. IndexLayer is narrower: it is built for local businesses that need clean service architecture, fast pages, proof, and search-friendly publishing decisions.",
    fit: [
      "Webflow is a good fit when visual editing and design ownership are the main goals.",
      "IndexLayer is a better fit when search structure, page speed, internal linking, and content scaling matter more than editor flexibility.",
      "Both can produce polished pages; the question is who owns the publishing discipline after launch.",
    ],
    deliverables: [
      "Static-first implementation focused on fast HTML output and clear page identity.",
      "Commercial pages that connect services, industries, work proof, and guides.",
      "A smaller system with fewer moving parts between the business and the crawler.",
    ],
    proofLinks: [
      { label: "Chicago Fight Team project", href: "/work/chicago-fight-team/" },
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "Industries", href: "/industries/" },
    ],
    relatedLinks: [
      { label: "Squarespace vs IndexLayer", href: "/compare/squarespace-vs-indexlayer/" },
      { label: "Wix vs IndexLayer", href: "/compare/wix-vs-indexlayer/" },
      { label: "Compare hub", href: "/compare/" },
    ],
  },
  {
    slug: "squarespace-vs-indexlayer",
    title: "Squarespace vs IndexLayer",
    path: "/compare/squarespace-vs-indexlayer/",
    description:
      "A comparison for local businesses choosing between polished templates and a custom publishing system built for search growth.",
    problem:
      "Squarespace is useful for simple, polished brochure sites. The limitation shows up when a business needs service pages, proof pages, education, comparisons, and local search architecture to work together.",
    fit: [
      "Squarespace is a good fit for a small static presence with minimal search ambition.",
      "IndexLayer is a better fit when the site needs to become a long-term search and trust asset.",
      "The decision is less about design quality and more about how much the site needs to publish and rank.",
    ],
    deliverables: [
      "A custom structure for homepage, services, industries, work, posts, guides, and comparison pages.",
      "Cleaner control over metadata, internal links, page speed, and canonical behavior.",
      "A more deliberate content map for businesses that plan to grow.",
    ],
    proofLinks: [
      { label: "MyCornerstonePlan work", href: "/work/mycornerstoneplan-seo-ready-life-insurance-funnel/" },
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "Guides", href: "/guides/" },
    ],
    relatedLinks: [
      { label: "Wix vs IndexLayer", href: "/compare/wix-vs-indexlayer/" },
      { label: "WordPress vs IndexLayer", href: "/compare/wordpress-vs-indexlayer/" },
      { label: "Compare hub", href: "/compare/" },
    ],
  },
  {
    slug: "wordpress-vs-indexlayer",
    title: "WordPress vs IndexLayer",
    path: "/compare/wordpress-vs-indexlayer/",
    description:
      "A comparison for businesses tired of plugin-heavy WordPress stacks, maintenance drag, and unclear indexing behavior.",
    problem:
      "WordPress can power almost anything, but local sites often inherit too much machinery: themes, plugins, page builders, caching layers, security updates, and inconsistent SEO behavior.",
    fit: [
      "WordPress is a good fit when the business needs a CMS-heavy site, many editors, or deep plugin functionality.",
      "IndexLayer is a better fit when the business needs a faster, simpler, service-led site with fewer moving parts.",
      "The tradeoff is less plugin flexibility in exchange for a cleaner publishing surface.",
    ],
    deliverables: [
      "Static-first pages for the commercial and content surfaces that matter most.",
      "No plugin dependency for core metadata, sitemap, canonical, performance, or internal link behavior.",
      "A clearer maintenance story for small local business websites.",
    ],
    proofLinks: [
      { label: "SEO Rescue", href: "/services/seo-rescue/" },
      { label: "Search Console Audits", href: "/services/search-console-audits/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
    ],
    relatedLinks: [
      { label: "Wix vs IndexLayer", href: "/compare/wix-vs-indexlayer/" },
      { label: "Replit vs IndexLayer", href: "/compare/replit-vs-indexlayer/" },
      { label: "Compare hub", href: "/compare/" },
    ],
  },
  {
    slug: "replit-vs-indexlayer",
    title: "Replit vs IndexLayer",
    path: "/compare/replit-vs-indexlayer/",
    description:
      "A comparison for founders using AI site builders who need the final website to resolve, index, and scale like a stable production surface.",
    problem:
      "AI builders can create a usable-looking frontend quickly. The risk is that the final website still needs production discipline: stable routes, crawlable HTML, metadata, canonicals, sitemap parity, and internal links.",
    fit: [
      "Replit or AI builders are a good fit for fast prototypes, demos, and early frontend momentum.",
      "IndexLayer is a better fit when the website has to become a stable local business asset.",
      "The best path may be using AI for momentum, then hardening the result into a clean publishing surface.",
    ],
    deliverables: [
      "A review of the generated site as a real publishing system, not just a browser screenshot.",
      "Repairs or rebuilds for page identity, crawlable content, metadata, sitemap, and internal links.",
      "A stable architecture that can support service, industry, comparison, work, and post pages.",
    ],
    proofLinks: [
      { label: "SEO Rescue", href: "/services/seo-rescue/" },
      { label: "Better Call Steve case study", href: "/work/better-call-steve-seo-rescue/" },
      { label: "Stable Indexable HTML", href: "/guides/stable-indexable-html/" },
    ],
    relatedLinks: [
      { label: "WordPress vs IndexLayer", href: "/compare/wordpress-vs-indexlayer/" },
      { label: "Local Business Websites", href: "/services/local-business-websites/" },
      { label: "Compare hub", href: "/compare/" },
    ],
  },
];

export function findAuthorityCard(cards: AuthorityCard[], slug: string) {
  return cards.find((card) => card.slug === slug);
}
