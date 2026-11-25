// app/lib/safeHref.ts
// Links in chat replies come from model output, which can be influenced by
// prompt injection (e.g. via RSS feed content). Only allow http(s) URLs and
// same-site paths; block javascript:, data:, protocol-relative (//host), etc.
export function safeHref(href: string | undefined | null): string | null {
  if (!href) return null;
  const h = href.trim();
  if (/^https?:\/\/[^\s]+$/i.test(h)) return h;
  if (/^\/(?![/\\])[^\s]*$/.test(h)) return h;
  return null;
}
