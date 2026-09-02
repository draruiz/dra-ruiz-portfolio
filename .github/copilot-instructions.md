# Dra. Ruiz Portfolio — Instrucciones para agentes

## Proyecto

Sitio personal de la **Dra. María Alejandra Ruiz**, psicóloga clínica, autora, conferencista y CEO de Almaymente.io. Home de scroll largo con estructura de **índice editorial** (`/`) y página `/about`. Idioma: español.

- **Verdad de producto:** `PRODUCT.md` (audiencias, canales, qué no fabricar).
- **Fuente de verdad de diseño:** `HILO-ROJO-DESIGN-SYSTEM.md` (paleta, superficies, tipografía, hilo rojo, movimiento). `DESIGN.md` documenta cómo está implementado.

## Stack

- **Astro 5** (SSG, zero-JS por defecto), **GSAP 3.13** (solo core + ScrollTrigger), CSS scoped por componente + tokens globales en `src/styles/global.css`.
- Fuentes autohospedadas en `public/fonts/` (Century Gothic 400/700 y Amoresa, subset Latin, woff). No cargar Google Fonts.
- Imágenes con `<Image>` de `astro:assets` (remotas permitidas desde `imagedelivery.net`).

## Arquitectura

```
src/pages/index.astro      → Home: Hero, Toc, Bio, Book, Media, Almaymente, Talks, Collab, Retreats, Contact, Footer
src/pages/about.astro      → Mi historia: hero, bio larga con retrato sticky, ruta, CTA
src/layouts/Layout.astro   → <head>, SEO/JSON-LD, contrato de dirección (comentario), Preloader, Nav, script de movimiento
src/components/Thread.astro→ El hilo rojo (SVG): onda, costura, haz, punto de encuentro
src/scripts/motion.ts      → reveals, hilo con scroll, nav por superficie, menú móvil, video diferido, fachadas de embeds
src/styles/global.css      → tokens, [data-surface], tipografía, botones, utilidades
```

## Reglas de diseño (resumen del manual)

- Cuatro superficies por sección con `data-surface="noche|papel|rubor|tension"`; todo color se lee de `var(--bg|--fg|--fg-muted|--accent|--thread|--rule)`. Nunca hardcodear hex en componentes.
- **Un solo hilo por sección**, detrás de la tipografía (z 2) y delante de la fotografía (z 0). Termina en un punto de 8px solo cuando marca un CTA.
- Century Gothic 700 para display, 400 para texto. Amoresa (`.script`) **una palabra por pantalla**, ≥40px, nunca en botones, labels ni nav.
- Filete 1px + espacio antes que tarjetas. Píldoras para botones, arco (`radius-arch`) para retratos, 24px para módulos.
- Máximo 3 colores visibles por sección. Rojo `#AA1C1A` jamás como texto sobre negro (usar `--accent`).
- Nada de gradientes decorativos, glass, glow, sombras de color ni parallax.

## Movimiento

- Entradas: `data-reveal` (+ `style="--i:n"` para stagger de 60ms). Se resuelven con IntersectionObserver y CSS.
- Hilo: `<Thread draw="scrub">` se dibuja con el scroll; `draw="clip"` para costuras; `draw="hero"` se dibuja al cargar.
- Respetar `prefers-reduced-motion` (ya cubierto en global.css y motion.ts). Sin loops infinitos ni scroll-jacking.

## SEO y accesibilidad

- Un solo `h1` por página; cada sección con `h2` y `aria-labelledby`.
- Iframes solo bajo demanda (fachadas) con `title` y `loading="lazy"`.
- JSON-LD Person, WebSite, Book y PodcastSeries en `Layout.astro`.
- Contraste AA en todas las superficies; foco visible; objetivos táctiles ≥44px.

## Convenciones

- Componentes PascalCase; clases BEM ligero (`.bloque__elemento`); IDs de sección en español (`#bio`, `#libro`, `#podcast`, `#eventos`, `#retiros`, `#contacto`).
- Comentarios en español.
- Antes de cerrar un cambio visual: `npm run build` y revisar escritorio (1440) y móvil (390).
