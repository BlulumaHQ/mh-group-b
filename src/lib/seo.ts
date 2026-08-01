/**
 * Central SEO configuration for MH Group LLC.
 * Every canonical / Open Graph / sitemap URL is derived from SITE_URL.
 */
export const SITE_URL = "https://mhgroupny.com";
export const SITE_NAME = "MH Group LLC";

export const OG_IMAGE = {
  url: `${SITE_URL}/images/og-image.webp`,
  width: "1200",
  height: "630",
  alt: "MH Group LLC — Integrated real estate and home services in New York",
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

type HeadMeta = { title?: string; name?: string; property?: string; content?: string };

/**
 * Builds the full per-route head: title, description, canonical,
 * Open Graph and Twitter tags — all with absolute URLs.
 */
export function pageHead(options: { title: string; description: string; path: string }): {
  meta: HeadMeta[];
  links: { rel: string; href: string }[];
} {
  const url = absoluteUrl(options.path);
  return {
    meta: [
      { title: options.title },
      { name: "description", content: options.description },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE.url },
      { property: "og:image:width", content: OG_IMAGE.width },
      { property: "og:image:height", content: OG_IMAGE.height },
      { property: "og:image:alt", content: OG_IMAGE.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: OG_IMAGE.url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
