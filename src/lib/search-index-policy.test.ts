import { describe, expect, test } from "bun:test";
import { applySearchIndexPolicy, isPlatformHostname } from "./search-index-policy";

describe("platform-only HTML noindex", () => {
  for (const suffix of ["lovable.app", "workers.dev", "pages.dev", "netlify.app"]) {
    test(`${suffix} HTML is accessible and noindex on every path`, async () => {
      for (const path of ["/", "/projects", "/services", "/our-philosophy", "/contact", "/nested/deep/page"]) {
        const request = new Request(`https://draft.project.${suffix}${path}`);
        const response = applySearchIndexPolicy(request, new Response("<html>unchanged</html>", {
          headers: { "Content-Type": "text/html; charset=utf-8", "Link": '<https://mhgroupny.com/>; rel="canonical"' },
        }));
        expect(response.status).toBe(200);
        expect(response.headers.get("X-Robots-Tag")).toBe("noindex");
        expect(response.headers.get("Link")).toBe('<https://mhgroupny.com/>; rel="canonical"');
        expect(await response.text()).toBe("<html>unchanged</html>");
      }
    });
  }

  test("the configured production custom domain is unchanged even with spoofed forwarding", () => {
    const request = new Request("https://mhgroupny.com/projects", { headers: { "X-Forwarded-Host": "preview.lovable.app" } });
    const original = new Response("<html>production</html>", { headers: { "Content-Type": "text/html" } });
    expect(applySearchIndexPolicy(request, original)).toBe(original);
    expect(original.headers.get("X-Robots-Tag")).toBeNull();
    expect(isPlatformHostname("preview.lovable.app.other-domain.com")).toBe(false);
    expect(isPlatformHostname("notlovable.app")).toBe(false);
  });

  test("case and a DNS trailing dot do not bypass noindex", () => {
    expect(isPlatformHostname("PREVIEW.LOVABLE.APP.")).toBe(true);
  });

  test("HTML errors and XHTML receive noindex without changing their status", () => {
    for (const status of [404, 500]) {
      const response = applySearchIndexPolicy(new Request("https://preview.lovable.app/missing"),
        new Response("error", { status, headers: { "Content-Type": "application/xhtml+xml", "X-Robots-Tag": "nofollow" } }));
      expect(response.status).toBe(status);
      expect(response.headers.get("X-Robots-Tag")).toBe("nofollow, noindex");
    }
  });

  test("robots, sitemap and other non-HTML responses retain their existing policies", () => {
    for (const type of ["text/plain", "application/xml", "image/webp", "application/json"]) {
      const original = new Response("unchanged", { headers: { "Content-Type": type } });
      expect(applySearchIndexPolicy(new Request("https://preview.workers.dev/asset"), original)).toBe(original);
    }
  });
});