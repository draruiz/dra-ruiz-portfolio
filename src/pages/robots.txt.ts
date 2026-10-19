import type { APIRoute } from "astro";

/** Abierto a todos los rastreadores (buscadores y asistentes de IA); el sitemap sale del mismo `site` que la canónica. */
export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("Falta `site` en astro.config.mjs");
  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${new URL("/sitemap-index.xml", site).href}`, ""].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
