export const legacyPostRedirects = {
  "case-studies": [
    "better-call-steve-seo-rescue",
    "mycornerstoneplan-seo-ready-life-insurance-funnel",
  ],
  guides: ["stable-indexable-html"],
  lab: ["building-indexlayer-on-astro-github-pages"],
} as const;

export const legacyListingRedirects = {
  "case-studies": "/work/",
  guides: "/posts/category/guide/",
  lab: "/posts/category/lab-note/",
} as const;
