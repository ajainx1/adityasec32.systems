import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: [
      "https://adityasec32.systems/sitemap.xml",
      "https://cyberkarma.me/sitemap.xml",
    ],
  };
}
