import { siteConfig } from "@/lib/config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['id', 'en'];
  const routes = ['', '/services', '/about', '/contact'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add root redirect
  sitemapEntries.push({
    url: `${siteConfig.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  });

  // Add localized routes
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}