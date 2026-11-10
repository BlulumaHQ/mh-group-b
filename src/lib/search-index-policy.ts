const PLATFORM_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

/** Only the actual request hostname selects the policy, never forwarded headers. */
export function isPlatformHostname(hostname: string): boolean {
  const normalized = hostname.toLowerCase().replace(/\.$/, "");
  return PLATFORM_SUFFIXES.some((suffix) => normalized.endsWith(suffix));
}

/** Preserve the response stream, status, and SEO on every non-platform hostname. */
export function applySearchIndexPolicy(request: Request, response: Response): Response {
  if (!isPlatformHostname(new URL(request.url).hostname)) return response;

  const contentType = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "text/html" && contentType !== "application/xhtml+xml") return response;

  const headers = new Headers(response.headers);
  const existing = headers.get("X-Robots-Tag");
  headers.set("X-Robots-Tag", existing ? `${existing}, noindex` : "noindex");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}