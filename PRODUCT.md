# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Orden de prioridad confirmado por el cliente (2026-09-01):

1. **Personas que buscan terapia o acompañamiento** — ansiedad, apego, dependencia emocional, vínculos afectivos. Llegan desde Instagram/YouTube/podcast, casi siempre en móvil, en un momento vulnerable. Quieren saber quién es la Dra. Ruiz, si les habla a ellas, y por dónde empezar (cursos, WhatsApp).
2. **Empresas y organizadores de eventos** — buscan conferencias magistrales y talleres (salud mental organizacional, liderazgo consciente, inteligencia emocional). Evalúan credibilidad, temas y cómo contactar.
3. **Lectores y comunidad** — siguen el libro, el podcast *Dilo Como Es* y el canal de YouTube; buscan el próximo contenido y los cursos.
4. **Terapeutas en formación** — Latinoamérica; interesados en mentoría internacional y en el equipo de Healthy Mind Specialists.

## Product Purpose

Sitio personal de marca de la **Dra. María Alejandra Ruiz**, psicóloga clínica, autora, conferencista y CEO de Almaymente.io. Es la puerta de entrada única a todo su ecosistema: cursos (Almaymente.io), libro, podcast/YouTube, conferencias y talleres, colaboraciones, retiros terapéuticos y contacto. Éxito = el visitante entiende en segundos quién es y qué hace, siente el tono (cálido, directo, clínico sin frialdad) y toma la acción que le corresponde.

## Positioning

Psicóloga clínica con formación en EE. UU. (Rutgers; maestría y doctorado en Florida), experiencia en intervención con menores vulnerables y en prisiones de máxima seguridad, fundadora de **Healthy Mind Specialists** (Tampa, FL) con un equipo de terapeutas hispanohablantes que ha atendido a personas en más de 20 países. Une rigor clínico con divulgación masiva en español. Su territorio conceptual: **el vínculo** (apego, heridas de infancia, dependencia emocional) — de ahí la metáfora de marca del *hilo rojo*.

## Operating Context

- Idioma: español (es). Público hispanohablante de LatAm y EE. UU.
- Canales de conversión reales: Almaymente.io (cursos), WhatsApp +1 813 568 6424, email info@draalejandraruiz.com, Buscalibre (libro), Spotify (show 7EAPPcMUumoRKNNJd44f6k), YouTube (@Pensandoenvozaltadraruiz), Instagram (@dramariaalejandraruiz), LinkedIn (drmarialejandraruiz).
- Dominio de producción: https://draruiz.com (astro.config `site`).
- Consumo mayoritariamente móvil desde redes sociales.

## Capabilities and Constraints

- Stack existente: **Astro 5** (SSG) + **GSAP 3.13** (incluye ScrollTrigger, SplitText, DrawSVG, Observer sin licencia adicional) + CSS scoped. Sin framework UI. Se conserva.
- Secciones de contenido a preservar (verdad de producto, texto reutilizable del sitio anterior): Hero, Bio, Libro (*El niño que fui, el adulto que elijo ser*, 2.ª edición), Podcast & Media (Spotify + YouTube), CEO Almaymente.io, Conferencias & Talleres, Colaboraciones, Retiros terapéuticos, Contacto. Página secundaria `/about` con biografía larga y línea de hitos.
- **CTA principal del hero y la nav: “Cursos” → https://almaymente.io** (confirmado). WhatsApp, libro y retiros son acciones secundarias por sección.
- **Sin música de fondo ni pantalla de entrada con click** (confirmado). Preloader breve (~1.2 s) con el hilo dibujándose.
- Performance: sitio estático, JS mínimo, sin librerías de smooth-scroll pesadas; video de hero local (`src/assets/hero_video.mp4`, 848×480, 60 s, H.264, 11 MB — pendiente comprimir/recortar para web).
- Accesibilidad: respetar `prefers-reduced-motion`, contraste WCAG AA, foco visible, HTML semántico, un solo h1.
- Requisitos SEO heredados de `.github/copilot-instructions.md`: meta/OG/Twitter, JSON-LD Person/WebSite/Book, sitemap, iframes con `title` y `loading="lazy"`.

## Brand Commitments

- **Fuente de verdad visual: `HILO-ROJO-DESIGN-SYSTEM.md`** (paleta crema/rosa/celeste/rojo/vino/borgoña/negro, 4 superficies Noche/Papel/Rubor/Tensión, Century Gothic como sans única, script Amoresa solo para el logotipo y un acento por pantalla, geometría mid-century, hilo rojo como sistema gráfico, movimiento sobrio con el hilo como único gesto expresivo).
- Logotipos en `src/assets/`: versión completa `logo_{red,pink,white,blue}.png` (María Alejandra Ruiz con “dra” y “R” en script) y versión corta `short_logo_{red,darkred,pink,white}.png` (Dra.Ruiz). Siempre imagen, nunca texto compuesto.
- Fuentes autohospedadas: `GOTHIC.TTF` (400), `GOTHICB.TTF` (700), `Amoresa Regular.otf` (script). No hay itálica real de Century Gothic.
- Referencia declarada de nivel de acabado: **hobro.digital** (editorial, tipografía enorme, aire, filetes 1px, transiciones sutiles). Dior / Saint Laurent / Jacquemus + mid-century modern según el manual.
- Tono de voz: cálido, directo, en primera persona cuando habla ella; sin jerga ni promesas milagrosas.

## Evidence on Hand

- Retrato profesional: https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/419fe35b-68e5-43f1-821d-872ec5796b00/public (JPEG, verificado 200).
- Portada del libro: https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/d7bac4aa-ac33-4a71-1465-90fc6cda5d00/public (JPEG, verificado 200).
- Video hero local: `src/assets/hero_video.mp4`. Poster derivado: `public/hero-poster.jpg` (fotograma a los 44 s, la doctora en escenario).
- Portada oficial del podcast *Dilo Como Es*: `src/assets/dilo-como-es.jpg` (oEmbed de Spotify, 640×360).
- Imagen OG generada desde el hero: `public/og-image.jpg` (1200×630).
- Textos de Bio (corta y larga), libro, podcast, CEO, conferencias, colaboraciones, retiros y contacto: en los componentes del sitio anterior (commit 389cf2f).
- **No existen**: testimonios, cifras verificadas (las “10k vidas” y “5★” del hero anterior no están respaldadas — no reutilizar), fotos de retiros/eventos, captura de Almaymente (asset borrado), ISBN, fechas de próximos retiros. No fabricar.

## Product Principles

1. **El vínculo es el producto.** Todo el sitio habla de conexión; el hilo rojo no es decoración, es la tesis.
2. **Claridad antes que espectáculo.** Un visitante en móvil, en un mal día, debe entender quién es ella y qué hacer en segundos.
3. **Credibilidad clínica sin frialdad.** Rigor (formación, trayectoria) contado con calidez y en español natural.
4. **Un ecosistema, una puerta.** Cursos primero; libro, podcast, eventos, retiros y contacto ordenados, nunca compitiendo.
5. **Ligereza como respeto.** Cada kilobyte y cada animación se justifica; nada que haga sentir pesado el sitio.

## Accessibility & Inclusion

Público general hispanohablante, incluyendo personas en estado de ansiedad: evitar autoplay con sonido, parpadeos, loops llamativos y parallax agresivo. Reduced-motion obligatorio. Contraste AA mínimo en todas las superficies (ver §3.5 del manual: nunca rojo #AA1C1A como texto sobre negro).
