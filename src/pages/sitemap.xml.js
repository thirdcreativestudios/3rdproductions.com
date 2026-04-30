import { languageOrder, siteUrl } from "../data/site.js";

export async function GET() {
  const urls = languageOrder
    .map((lang) => `  <url><loc>${siteUrl}/${lang}/</loc><changefreq>weekly</changefreq><priority>${lang === "en" ? "1.0" : "0.9"}</priority></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
