# Dra. Ruiz Portfolio — Copilot Instructions

## Proyecto

Portfolio profesional de la **Dra. Maria Alejandra Ruiz**, psicóloga clínica. Single-page site en **Astro 5** con tema dark luxury (dorado + negro). Idioma principal: español.

## Stack

- **Framework:** Astro 5 (SSG, zero-JS por defecto)
- **Animaciones:** GSAP 3 (ScrollTrigger, Timeline, plugins)
- **Estilos:** CSS scoped por componente + variables globales en `src/styles/global.css`
- **Fonts:** Cormorant Garamond (headings), Inter (body)

## Arquitectura

```
src/pages/index.astro        → Página única, importa todos los componentes
src/layouts/Layout.astro     → Shell HTML con <head>, loader, GSAP init
src/components/*.astro       → Secciones: Hero, Bio, Books, Podcasts, CEO, Contact, Nav, Footer, Loader
src/assets/*.txt             → Contenido parseado con ?raw
src/styles/global.css        → Variables CSS, reset, utilidades globales
```

## Diseño y Estilo

- **Tema:** Dark luxury — fondos profundos (`#0a0a0f`, `#12121a`), acentos dorados (`#c9a961`, `#d4af37`)
- **Glass morphism:** Fondos semi-transparentes con `backdrop-filter: blur()` y bordes sutiles dorados
- **Tipografía:** Serif elegante para títulos, sans-serif limpia para cuerpo. Jerarquía clara con tamaños y opacidades
- **Espaciado:** Generoso, cinematográfico. Usar variables `--spacing-*`
- **Bordes:** Redondeados con variables `--radius-*` (20px–32px)
- **Transiciones CSS:** Usar variables `--transition-*` para consistencia
- **Responsive:** Mobile-first. Hamburger menu en nav. Todos los layouts deben funcionar en 320px+
- Todo nuevo componente debe mantener la estética luxury dark existente
- Usar gradientes dorados en headings importantes: `background: linear-gradient(135deg, var(--gold-primary), var(--gold-secondary))`

## Animaciones (GSAP)

> Consultar skills GSAP en `.github/skills/gsap-*` para API y patrones.

- Importar GSAP y plugins en `<script>` tags dentro de componentes Astro o en Layout
- Registrar plugins una sola vez: `gsap.registerPlugin(ScrollTrigger)`
- Usar `gsap.utils.toArray()` para seleccionar múltiples elementos
- Usar `ScrollTrigger` para reveals al hacer scroll con `start: "top 85%"`
- Usar `gsap.timeline()` para secuencias coordinadas (Hero, Loader)
- Staggers para grupos de elementos: `stagger: { amount: 0.4 }`
- **Siempre** respetar `prefers-reduced-motion`: usar `gsap.matchMedia()` para deshabilitar animaciones complejas
- No animar propiedades que causen layout shifts (width, height, top, left). Preferir `transform` y `opacity`
- Hacer `will-change: transform` solo cuando sea necesario y removerlo después

## SEO — Requisitos Obligatorios

### Meta Tags Esenciales

Cada página DEBE incluir en `<head>`:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{título único y descriptivo — máx 60 chars}</title>
<meta name="description" content="{descripción única — 150-160 chars}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{URL canónica absoluta}" />
```

### Open Graph y Twitter Cards

```html
<meta property="og:title" content="{título}" />
<meta property="og:description" content="{descripción}" />
<meta property="og:image" content="{URL absoluta imagen 1200x630}" />
<meta property="og:url" content="{URL canónica}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_ES" />
<meta property="og:site_name" content="Dra. Maria Alejandra Ruiz" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{título}" />
<meta name="twitter:description" content="{descripción}" />
<meta name="twitter:image" content="{URL absoluta imagen}" />
```

### Schema.org / JSON-LD (Structured Data)

Incluir JSON-LD en Layout para:

- **Person** (profesional de salud): nombre, título, imagen, sameAs (redes sociales)
- **WebSite**: nombre, URL, searchAction si aplica
- **Book**: título, autor, edición, ISBN si existe
- **PodcastSeries**: nombre, plataformas, descripción

Ejemplo mínimo:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dra. Maria Alejandra Ruiz",
    "jobTitle": "Psicóloga Clínica",
    "url": "{URL del sitio}",
    "sameAs": ["{redes sociales}"]
  }
</script>
```

### HTML Semántico

- Usar `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<aside>` correctamente
- Un solo `<h1>` por página (en Hero)
- Jerarquía de headings estricta: h1 → h2 → h3, sin saltar niveles
- Cada `<section>` debe tener un heading asociado (h2 mínimo)
- Cada `<img>` DEBE tener `alt` descriptivo (no vacío, no "imagen")
- Cada `<a>` externo debe tener `rel="noopener noreferrer"` y considerar `target="_blank"`
- Formularios con `<label>` asociado a cada `<input>` vía `for`/`id`
- Usar `aria-label` en botones de icono y elementos interactivos sin texto visible
- Iframes (Spotify, YouTube) DEBEN tener `title` descriptivo y `loading="lazy"`

### Archivos SEO Técnico

El proyecto DEBE incluir en `public/`:

- `robots.txt` — permitir rastreo, apuntar a sitemap
- `sitemap.xml` — o usar `@astrojs/sitemap` (preferido)
- `favicon.svg` + `favicon.ico` + `apple-touch-icon.png`
- `manifest.json` (opcional, para PWA)

### Configuración Astro para SEO

En `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://draruiz.com", // URL de producción
  integrations: [sitemap()],
  compressHTML: true,
});
```

## Performance — Requisitos Obligatorios

### Imágenes

- Usar `<Image />` de `astro:assets` para optimización automática (WebP/AVIF, srcset)
- Definir `width` y `height` explícitos para evitar CLS
- Hero image: `loading="eager"`, `fetchpriority="high"`
- Resto de imágenes: `loading="lazy"`, `decoding="async"`
- Formatos modernos: WebP o AVIF con fallback

### Fonts

- `font-display: swap` en todas las fuentes
- Preconnect a Google Fonts (ya implementado)
- Considerar `<link rel="preload">` para fuentes críticas del above-the-fold

### CSS y JS

- Astro scope styles por defecto — no romper este patrón
- CSS crítico inline en `<head>` para above-the-fold
- GSAP se carga como módulo ESM — Astro hace tree-shaking automático
- No cargar plugins GSAP que no se usen
- Preferir `<script>` sin `is:inline` para que Astro pueda bundlear y optimizar

### Core Web Vitals

- **LCP < 2.5s:** Preload hero image, preconnect fonts, minimizar CSS crítico
- **FID/INP < 200ms:** No bloquear main thread con animaciones pesadas
- **CLS < 0.1:** Reservar espacio para imágenes, fonts con swap, no insertar contenido dinámico arriba del viewport

### Auditoría

- Validar con Lighthouse (objetivo: 95+ en Performance, SEO, Accessibility, Best Practices)
- Validar structured data con Google Rich Results Test
- Validar Open Graph con Facebook Sharing Debugger / Twitter Card Validator

## Accesibilidad (a11y)

- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande (dorado sobre negro oscuro cumple)
- Focus visible en todos los elementos interactivos (outline dorado)
- Skip-to-content link como primer elemento del body
- `aria-label` en navegación, iconos, y botones sin texto
- Respetar `prefers-reduced-motion` deshabilitando animaciones GSAP
- `lang="es"` en `<html>`

## Convenciones de Código

- Componentes Astro: PascalCase (`Bio.astro`, `HeroSection.astro`)
- CSS variables: kebab-case con prefijo semántico (`--gold-primary`, `--bg-card`)
- IDs de sección: kebab-case (`#bio`, `#books`, `#podcasts`)
- Assets de texto: snake_case (`her_book.txt`, `her_podcast_1.txt`)
- Contenido importado con `?raw` y parseado en el frontmatter del componente
- TypeScript: interfaces para Props en componentes que reciban datos
- Comentarios en español para consistencia con el contenido
