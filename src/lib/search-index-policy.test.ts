import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { applySearchIndexPolicy, isPlatformHostname } from "./search-index-policy";

describe("platform-only HTML noindex", () => {
  for (const suffix of ["lovable.app", "workers.dev", "pages.dev", "netlify.app"]) {
    test(`${suffix} HTML is accessible and noindex on every path`, async () => {
      for (const path of ["/", "/projects", "/services", "/our-philosophy", "/contact", "/nested/deep/page"]) {
        const request = new Request(`https://draft.project.${suffix}${path}`);
        const response = applySearchIndexPolicy(request, new Response("<html>unchanged</html>", {
          headers: { "Content-Type": "text/html; charset=utf-8", "Link": '<https://mhgroupny.com/>; rel="canonical"' },
        }));
        assert.equal(response.status, 200);
        assert.equal(response.headers.get("X-Robots-Tag"), "noindex");
        assert.equal(response.headers.get("Link"), '<https://mhgroupny.com/>; rel="canonical"');
        assert.equal(await response.text(), "<html>unchanged</html>");
      }
    });
  }

  test("the configured production custom domain is unchanged even with spoofed forwarding", () => {
    const request = new Request("https://mhgroupny.com/projects", { headers: { "X-Forwarded-Host": "preview.lovable.app" } });
    const original = new Response("<html>production</html>", { headers: { "Content-Type": "text/html" } });
    assert.equal(applySearchIndexPolicy(request, original), original);
    assert.equal(original.headers.get("X-Robots-Tag"), null);
    assert.equal(isPlatformHostname("preview.lovable.app.other-domain.com"), false);
    assert.equal(isPlatformHostname("notlovable.app"), false);
  });

  test("case and a DNS trailing dot do not bypass noindex", () => {
    assert.equal(isPlatformHostname("PREVIEW.LOVABLE.APP."), true);
  });

  test("HTML errors and XHTML receive noindex without changing their status", () => {
    for (const status of [404, 500]) {
      const response = applySearchIndexPolicy(new Request("https://preview.lovable.app/missing"),
        new Response("error", { status, headers: { "Content-Type": "application/xhtml+xml", "X-Robots-Tag": "nofollow" } }));
      assert.equal(response.status, status);
      assert.equal(response.headers.get("X-Robots-Tag"), "nofollow, noindex");
    }
  });

  test("robots, sitemap and other non-HTML responses retain their existing policies", () => {
    for (const type of ["text/plain", "application/xml", "image/webp", "application/json"]) {
      const original = new Response("unchanged", { headers: { "Content-Type": type } });
      assert.equal(applySearchIndexPolicy(new Request("https://preview.workers.dev/asset"), original), original);
    }
  });
});