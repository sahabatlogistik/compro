import { siteConfig } from "@/lib/config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ["en", "id"];
  const routes = ["", "/services", "/about", "/contact"];

  // Generate sitemap entries for all locale/route combinations
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  // // Add default routes (without locale prefix)
  // for (const route of routes) {
  //   sitemapEntries.push({
  //     url: `${siteConfig.url}${route}`,
  //     lastModified: new Date(),
  //     changeFrequency: "monthly",
  //     priority: route === "" ? 1.0 : 0.8,
  //   });
  // }

  return sitemapEntries;
}
