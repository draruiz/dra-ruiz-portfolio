// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://draruiz.com",
  integrations: [sitemap()],
  compressHTML: true,
  image: {
    // retrato y portada viven en Cloudflare Images; Astro los optimiza en build
    domains: ["imagedelivery.net"],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
