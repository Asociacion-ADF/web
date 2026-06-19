import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/confirmacion",
    },
    sitemap: "https://www.asociacionaccion.com/sitemap.xml",
  };
}
