import { siteConfig } from "@/lib/config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['en', 'id'];
  const routes = ['', '/services', '/about', '/contact'];
  
  // Generate sitemap entries for all locale/route combinations
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  // Add default routes (without locale prefix)
  for (const route of routes) {
    sitemapEntries.push({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === '' ? 1.0 : 0.8,
    });
  }

  // Add image sitemap entries
  const imageUrls = [
    "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg",
    "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg",
  ];

  // Add images to sitemap with proper metadata
  for (const imageUrl of imageUrls) {
    sitemapEntries.push({
      url: imageUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return sitemapEntries;
}