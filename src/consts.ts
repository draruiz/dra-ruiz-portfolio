/**
 * Lo que varias piezas del sitio citan igual, en un solo lugar: un cambio de
 * dirección es una línea. El dominio propio vive en `astro.config.mjs` (`site`).
 */

/** La plataforma de cursos de Alma & Mente: el destino de cada botón "Cursos". */
export const COURSES_URL = "https://cursos.almaymente.io";

/** Su dirección tal como se lee, sobre el CTA. */
export const COURSES_HOST = new URL(COURSES_URL).host;

/** El retrato oficial (Cloudflare Images): "Mi historia" y la foto de los datos estructurados. */
export const PORTRAIT_URL =
  "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/5f4f545d-05a6-4754-9896-ff4b6cbd9000/public";

/**
 * Alma & Mente tal como la declara almaymente.io en sus datos estructurados:
 * el mismo `@id` hace que buscadores y asistentes unan los dos sitios.
 */
export const ALMA_Y_MENTE = {
  "@type": "MedicalOrganization",
  "@id": "https://www.almaymente.io/#organization",
  name: "Alma & Mente",
  url: "https://www.almaymente.io/",
} as const;
