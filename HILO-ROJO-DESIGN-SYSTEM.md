# Hilo Rojo — Design System

**Marca:** María Alejandra Ruiz
**Versión:** 1.0 · 2026-08-08
**Alcance:** guía maestra de tema. Portable a cualquier proyecto de la marca (web pública, Control Center, landings de retiros, decks, email).

> Este documento es la **fuente de verdad de diseño**. El código (`src/theme/*`) implementa lo que aquí se define; si hay conflicto, manda este documento.

---

## Índice

1. [Concepto](#1-concepto)
2. [Principios de diseño](#2-principios-de-diseño)
3. [Color](#3-color)
4. [Modos de superficie (color blocking)](#4-modos-de-superficie-color-blocking)
5. [Tipografía](#5-tipografía)
6. [Espaciado, grid y layout](#6-espaciado-grid-y-layout)
7. [Forma, borde y elevación](#7-forma-borde-y-elevación)
8. [El Hilo Rojo como sistema gráfico](#8-el-hilo-rojo-como-sistema-gráfico)
9. [Imagen y fotografía](#9-imagen-y-fotografía)
10. [Movimiento](#10-movimiento)
11. [Componentes](#11-componentes)
12. [Accesibilidad](#12-accesibilidad)
13. [Tokens en código](#13-tokens-en-código)
14. [Do / Don't](#14-do--dont)
15. [Checklist para portar el tema a otro proyecto](#15-checklist-para-portar-el-tema-a-otro-proyecto)

---

## 1. Concepto

**El hilo rojo.** Un solo trazo continuo que conecta, tensa y a veces se enreda. Toda la identidad se explica con esa metáfora:

| Estado del hilo | Significado | Traducción visual |
| --- | --- | --- |
| **Fluido** | vínculo sano, calma, respiración | curvas largas y suaves, mucho aire, tonos crema/rosa/celeste |
| **Tenso** | el punto de encuentro, la decisión, el CTA | línea recta o casi recta, rojo saturado, contraste alto |
| **Enredado** | el nudo emocional, el síntoma | scribble denso (ver portada del manual), sobre foto B/N |
| **Radiante** | las múltiples facetas de la marca | haz de hilos que converge en un punto (poster de roles) |

**Reglas del concepto:**

- El hilo **nunca se corta** dentro de una misma vista. Si sale por un borde, debe reentrar o insinuar continuidad en la siguiente sección.
- **Un solo hilo protagonista por pantalla.** Si hay más de una línea roja compitiendo, el concepto se vuelve decoración.
- El rojo es **acento, no fondo por defecto**. Cuando el rojo llena la pantalla (hero, retiro CALMA) es una decisión editorial deliberada, no el estado base.

---

## 2. Principios de diseño

Referencias declaradas: **Dior, Saint Laurent, Jacquemus** (lujo editorial) + **mid-century modern** (Eames, Vignelli, Braun).

1. **La tipografía es la imagen.** Titulares enormes, todo lo demás pequeño y quieto. Nada de degradados decorativos, glow, glass ni sombras difusas.
2. **Espacio negativo como material.** Si duda entre añadir algo o quitarlo, quite. El aire comunica lujo; la densidad comunica dashboard.
3. **Geometría explícita.** Círculos, arcos y rectángulos de esquinas suaves (mid-century). Nada de blobs orgánicos ni formas aleatorias.
4. **Contraste duro, paleta corta por vista.** Máximo **3 colores visibles por sección** (fondo + texto + acento). La paleta completa vive en el sitio, no en la pantalla.
5. **Composición asimétrica.** Splits 7/5 o 8/4, titulares desalineados del grid, texto anclado a un borde. Nunca todo centrado por defecto.
6. **Línea sobre caja.** Separar con filetes de 1px y espacio antes que con bordes, fondos y tarjetas.
7. **Silencio en la interacción.** Transiciones cortas, sin rebotes ni escalados llamativos. El único movimiento expresivo permitido es **el hilo dibujándose**.

---

## 3. Color

### 3.1 Paleta de marca (manual)

| Token | HEX | RGB | Rol |
| --- | --- | --- | --- |
| `crema` | `#FEF4EB` | 254 244 235 | Fondo claro principal. Modo "papel". |
| `rosaPalo` | `#F2D4E0` | 242 212 224 | Fondo claro alternativo, superficies secundarias. |
| `rosa` | `#F6BAD6` | 246 186 214 | Bloque de color, fondos de sección, texto sobre rojo/negro. |
| `celeste` | `#CFE7F3` | 207 231 243 | **Solo acento puntual.** Highlight, dato, badge, subrayado. |
| `rojo` | `#AA1C1A` | 170 29 26 | **Color de marca.** Hilo, CTA, énfasis. |
| `vino` | `#751E31` | 117 30 49 | Profundidad, hover del rojo, tipografía sobre crema. |
| `borgona` | `#3E0D11` | 62 13 17 | Texto principal sobre claro, superficies oscuras cálidas. |
| `negro` | `#000000` | 0 0 0 | Fondo oscuro principal. Modo "noche". |

> **Nota:** los valores RGB impresos en el manual traen erratas menores (`#FEF4EB` aparece como 244 244 235 y `#751E31` como 117 30 29). **El HEX es el valor canónico**; los RGB de la tabla de arriba están corregidos.

### 3.2 Escalas derivadas

La paleta de marca no basta para UI (estados, bordes, deshabilitados). Estas escalas se derivan del rojo y son **de sistema**, no de marca: no se usan como bloques de color grandes, solo en componentes.

```
red-50   #FDECEA
red-100  #F9CFCB
red-200  #F0A49D
red-300  #E37A70   ← rojo legible sobre negro (7.3:1)
red-400  #CC4A3F   ← rojo legible sobre negro (4.6:1)
red-500  #AA1C1A   ← MARCA
red-600  #8E1718   ← hover/pressed en claro
red-700  #751E31   ← vino (marca)
red-800  #57131F
red-900  #3E0D11   ← borgoña (marca)
```

Neutros cálidos (derivados del crema, nunca grises puros):

```
warm-0    #FFFFFF
warm-50   #FEF4EB   ← crema (marca)
warm-100  #F5E9DE
warm-200  #E7D9CC
warm-300  #C9BBAE
warm-400  #9A8D82
warm-500  #6B6159
warm-600  #453F3A
warm-700  #2A2622
warm-800  #171412
warm-900  #000000   ← negro (marca)
```

### 3.3 Semánticos

El sistema **no importa** verdes/azules genéricos de MUI. Se derivan de la paleta:

| Rol | Claro | Oscuro | Nota |
| --- | --- | --- | --- |
| `success` | `#2F6B4F` | `#7FBF9A` | verde apagado, nunca fluorescente |
| `warning` | `#8A5A12` | `#E0A961` | ámbar terroso |
| `error` | `#AA1C1A` | `#E37A70` | **es el rojo de marca**; por eso el error nunca debe convivir con un CTA rojo en la misma zona |
| `info` | `#3E6E88` | `#CFE7F3` | el celeste vive aquí |

> Regla: en formularios con validación, los CTA de esa vista pasan a **negro/borgoña** para no confundir error con acción.

### 3.4 Uso del celeste

El celeste `#CFE7F3` es el único color frío de la marca. Es el "respiro". Reglas:

- **Sí:** un dato destacado, una métrica, un badge de estado, un subrayado, un icono, una nota al margen, gráficas.
- **Sí:** sobre negro o sobre rojo (contraste 16.4:1 y 3.9:1 respectivamente).
- **No:** sobre crema o rosa (contraste 1.2:1 — desaparece).
- **No:** como color de CTA ni como fondo de sección grande. Máximo **~5% del área visible** de una pantalla.

### 3.5 Contrastes verificados (WCAG 2.1)

| Combinación | Ratio | Veredicto |
| --- | --- | --- |
| `crema` sobre `negro` | 19.4:1 | AAA |
| `borgoña` sobre `crema` | 15.2:1 | AAA |
| `vino` sobre `crema` | 9.7:1 | AAA |
| `rojo` sobre `crema` | 6.7:1 | AA (texto normal) ✅ |
| `rosa` sobre `negro` | 12.9:1 | AAA |
| `celeste` sobre `negro` | 16.4:1 | AAA |
| `rosaPalo` sobre `negro` | 15.3:1 | AAA |
| **`rojo` sobre `negro`** | **2.9:1** | ❌ **prohibido para texto e iconos**. Use `red-300`/`red-400`. |
| **`rosa` sobre `rojo`** | **4.45:1** | ⚠️ solo texto ≥24px o ≥19px bold (como el lockup "calma") |
| `crema` sobre `rojo` | 6.7:1 | AA ✅ |
| `vino` sobre `negro` | 2.0:1 | ❌ nunca texto |

**Consecuencia de diseño importante:** el hilo rojo `#AA1C1A` sobre negro es gráfico decorativo (permitido), pero **cualquier texto, icono funcional o borde de input en rojo sobre fondo oscuro debe usar `red-300` (`#E37A70`) o `red-400` (`#CC4A3F`)**.

---

## 4. Modos de superficie (color blocking)

En vez de "light mode / dark mode", el sistema trabaja con **4 superficies** que se alternan por sección, al estilo de un lookbook. Cada superficie define su propio set de tokens de primer plano.

| Modo | Fondo | Texto principal | Texto secundario | Acento / CTA | Filete | Uso |
| --- | --- | --- | --- | --- | --- | --- |
| **Noche** | `#000000` | `#FEF4EB` | `rgba(254,244,235,.62)` | `#E37A70` (texto) / `#AA1C1A` (hilo) | `rgba(254,244,235,.14)` | Hero, portadas, app/Control Center |
| **Papel** | `#FEF4EB` | `#3E0D11` | `rgba(62,13,17,.68)` | `#AA1C1A` | `rgba(62,13,17,.14)` | Contenido largo, bio, artículos, blog |
| **Rubor** | `#F2D4E0` / `#F6BAD6` | `#3E0D11` | `rgba(62,13,17,.66)` | `#751E31` | `rgba(62,13,17,.16)` | Secciones de calma, retiros, testimonios |
| **Tensión** | `#AA1C1A` | `#FEF4EB` | `rgba(254,244,235,.78)` | `#FEF4EB` (CTA invertido) | `rgba(254,244,235,.28)` | CTA de página completa, anuncios, portada de evento |

**Reglas de ritmo:**

- Alternar superficies para marcar capítulos: `Noche → Papel → Rubor → Papel → Tensión`.
- Nunca dos secciones **Tensión** seguidas.
- Transición entre superficies: corte limpio a borde completo, **o** el hilo rojo cruzando el límite (preferido).
- En cada sección solo hay **un** acento activo.

Implementación: `data-surface="noche|papel|rubor|tension"` en el contenedor de sección, y todos los tokens de primer plano se leen por CSS variables (ver §13).

---

## 5. Tipografía

### 5.1 Familias

| Rol | Familia | Fallback stack |
| --- | --- | --- |
| **Sans de marca** (todo: display, UI, body) | **Century Gothic** — Regular / Italic / Bold Italic | `"Century Gothic", "Poppins", "Questrial", "Futura", "Jost", system-ui, sans-serif` |
| **Script de marca** (solo logotipo y acentos rarísimos) | script caligráfico del logotipo (tipo *Bon Vivant*) | `"Pinyon Script", "Parisienne", cursive` |
| **Mono** (código, datos técnicos, Control Center) | `"IBM Plex Mono", ui-monospace, monospace` | — |

**Century Gothic es licenciada (Monotype)** y no está en Google Fonts. Dos caminos:

1. **Recomendado en producción con licencia web:** auto-hospedar `.woff2` (Regular 400, Italic 400, Bold 700, Bold Italic 700) en `public/fonts/` y declarar `@font-face` con `font-display: swap`.
2. **Sustituto libre (default del código hoy):** **Poppins** — geométrica, misma `a` de un piso, cuenta con itálicas y rango 300–700. Alternativas: *Questrial* (muy fiel, solo 400, sin itálica), *Jost* (ya cargada en este repo, más estrecha), *Didact Gothic*.

> El **logotipo** (`María Alejandra Ruiz`, `Dra.Ruiz`) es siempre un **SVG**, nunca texto compuesto en vivo. La script no se usa para titulares de UI.
> Uso permitido de la script fuera del logo: **una palabra por pantalla**, ≥40px, en composiciones editoriales (p.ej. una palabra dentro de un titular). Nunca en botones, labels, navegación ni párrafos.

### 5.2 Escala tipográfica

Escala modular **1.25 (tercera mayor)**, fluida con `clamp()`. Base 16px.

| Token | Tamaño (móvil → desktop) | Peso | Tracking | Leading | Uso |
| --- | --- | --- | --- | --- | --- |
| `display-1` | `clamp(3.5rem, 12vw, 9rem)` | 700 | `-0.03em` | 0.92 | Hero, portadas, una palabra ("calma") |
| `display-2` | `clamp(2.75rem, 7vw, 5.5rem)` | 700 | `-0.025em` | 0.98 | Titular de sección grande |
| `h1` | `clamp(2.25rem, 5vw, 3.75rem)` | 700 | `-0.02em` | 1.05 | Título de página |
| `h2` | `clamp(1.75rem, 3.5vw, 2.5rem)` | 500 | `-0.015em` | 1.15 | Título de sección |
| `h3` | `clamp(1.375rem, 2.2vw, 1.75rem)` | 500 | `-0.01em` | 1.25 | Subtítulo, título de tarjeta |
| `body-lg` | `1.125rem` | 400 | `0` | 1.65 | Intro, párrafo destacado |
| `body` | `1rem` | 400 | `0` | 1.7 | Texto general |
| `body-sm` | `0.875rem` | 400 | `0.01em` | 1.6 | Notas, ayuda, metadatos |
| `kicker` | `0.75rem` | 700 | `0.22em` | 1 | **Versalita**: etiquetas de sección, breadcrumbs, labels. Siempre `UPPERCASE`. |
| `caption` | `0.6875rem` | 400 | `0.08em` | 1.4 | Pies de foto, legales |
| `button` | `0.875rem` | 700 | `0.12em` | 1 | Botones, `UPPERCASE` |

**Reglas:**

- **Tracking negativo en display, positivo en versalitas.** Es la firma tipográfica de la marca (ver manual: `MARIA ALEJANDRA RUIZ →RUTA` con tracking amplio).
- Medida de línea (`max-width`) de párrafos: **60–72 caracteres** (`~34rem`).
- Nunca justificar. Alineación a la izquierda; centrado solo en composiciones editoriales de 1–3 líneas.
- Itálica: para énfasis conceptual y palabras del mundo emocional ("*vínculo*", "*calma*"), no para citas completas.
- Máximo **2 pesos por pantalla** (400 y 700). El 500 se reserva a titulares de sección.
- Nunca `text-transform: uppercase` en párrafos ni en titulares largos; solo kicker y botones.

### 5.3 Kicker + hilo (patrón de encabezado de sección)

```
── 01 / RUTA ───────────────────────────────
Titular de la sección en display-2
Bajada opcional en body-lg, máx. 2 líneas.
```

El filete que precede al kicker es el hilo: 1px, 40–72px de largo, color acento del modo.

---

## 6. Espaciado, grid y layout

### 6.1 Escala de espaciado (base 4)

`0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 240`

Tokens: `space-0 … space-12`. En MUI, `spacing: 8` sigue siendo la unidad (`theme.spacing(3)` = 24px); los valores fuera de la retícula de 8 (4, 12) se escriben explícitos.

### 6.2 Grid

- **12 columnas**, `max-width: 1440px`, contenido en `1280px`.
- Gutter: `24px` móvil → `32px` desktop.
- Margen lateral: `20px` / `40px` / `80px` (xs / md / xl).
- **Splits editoriales permitidos:** 7/5, 8/4, 5/7, 4/8. Evitar 6/6 salvo en comparativas.
- Al menos una sección por página debe **romper el grid** (imagen a sangre completa o titular que sobrepasa el margen). Es lo que da el aire de lookbook.

### 6.3 Ritmo vertical

| Contexto | Padding vertical de sección |
| --- | --- |
| Hero | `clamp(96px, 18vh, 200px)` |
| Sección estándar | `clamp(64px, 10vw, 140px)` |
| Sección compacta (app / Control Center) | `32px – 48px` |

Regla: **el aire por encima de un titular siempre es mayor que el que hay por debajo** (relación ~2:1) para amarrar el título a su contenido.

### 6.4 Breakpoints

Se mantienen los de MUI (ya definidos en `src/styles/_variables.scss`): `xs 0 · sm 600 · md 900 · lg 1200 · xl 1536`.

---

## 7. Forma, borde y elevación

### 7.1 Radios (mid-century)

| Token | Valor | Uso |
| --- | --- | --- |
| `radius-none` | `0` | Imágenes editoriales, bloques de color a sangre, tablas |
| `radius-sm` | `4px` | Inputs, checkboxes, tags pequeños |
| `radius-md` | `12px` | Tarjetas dentro de la app |
| `radius-lg` | `24px` | **Tarjetas de contenido, swatches, módulos de sección** (el rectángulo redondeado del manual) |
| `radius-xl` | `40px` | Contenedores grandes, media con esquina suave |
| `radius-pill` | `999px` | Botones, chips, avatares, píldoras de navegación |
| `radius-arch` | `999px 999px 0 0` | **Arco mid-century**: imágenes de retrato, portadas de retiro |

La combinación **rectángulo redondeado grande + píldora + círculo perfecto + arco** es la firma formal del sistema.

### 7.2 Bordes

- Grosor único: **1px**. (`2px` solo en el foco de teclado y en el filete superior de módulos destacados.)
- Color: `currentColor` al 14–18% de opacidad según el modo.
- Preferir **filete + espacio** a caja cerrada.

### 7.3 Elevación

Mid-century no usa sombras difusas. El sistema tiene **tres niveles**:

| Nivel | Definición | Uso |
| --- | --- | --- |
| `flat` | sin sombra; se distingue por color de superficie o filete | 95% de la UI |
| `lift` | `0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.08)` | Menús, popovers, toasts, drawers |
| `object` | `0 24px 60px rgba(0,0,0,.28)` | Solo mockups/objetos fotográficos (poster, laptop) |

Prohibidos: `box-shadow` de color, glows, `backdrop-filter: blur` decorativo, gradientes de más de 2 paradas. El único gradiente permitido es el **viñeteado radial rojo** del hero (ver §9).

---

## 8. El Hilo Rojo como sistema gráfico

Cuatro primitivas. Todas son SVG, `stroke` sin `fill`, `stroke-linecap: round`.

| Primitiva | Descripción | Grosor | Dónde |
| --- | --- | --- | --- |
| **Onda** (`thread-wave`) | curva Bézier larga horizontal que cruza toda la pantalla | 1.5–2px | Fondos de hero, separadores entre secciones |
| **Nudo** (`thread-scribble`) | garabato circular denso | 1.5px | Sobre retratos B/N; representa el conflicto. **Nunca sobre texto legible.** |
| **Haz** (`thread-radial`) | 5–8 curvas que convergen en un punto | 1px | Mapas de servicios, "qué hago", diagramas de conexión |
| **Costura** (`thread-stitch`) | línea de guiones `stroke-dasharray: 6 8` | 1px | Rutas, líneas de tiempo, conexión entre pasos |

**Reglas:**

- Color: `#AA1C1A` sobre claro y sobre negro; `#FEF4EB` o `#F6BAD6` cuando el fondo ya es rojo.
- Opacidad mínima `0.7` — el hilo nunca es "textura de fondo" apagada.
- El hilo **pasa por detrás de la tipografía** (`z-index` menor) y **por delante de la fotografía**.
- Un hilo que entra por el borde izquierdo de una sección debe salir por el derecho o por abajo; la continuidad se lee al hacer scroll.
- **Punto de encuentro:** cuando el hilo debe marcar un lugar (CTA, dato, hito) termina en un **círculo relleno de 6–8px** en rojo.

Base SVG reutilizable:

```tsx
<svg viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none" aria-hidden>
  <path
    d="M0 160 C 220 40, 380 260, 620 150 S 1080 20, 1440 120"
    stroke="var(--thread)"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
</svg>
```

---

## 9. Imagen y fotografía

- **Retratos editoriales**: fondo de color plano de la paleta (rojo, crema, rosa) o negro. Nunca fondos ruidosos.
- **Blanco y negro con alto contraste** para el territorio emocional (ansiedad, conflicto, "guardártelo todo"). El único color que puede aparecer sobre un B/N es el rojo del hilo.
- **Viñeteado radial rojo** (el del hero del mockup): `radial-gradient(circle at 50% 45%, #C22B25 0%, #AA1C1A 45%, #6E1211 100%)`. Es el **único** gradiente de marca.
- Recortes: preferir **arco** (`radius-arch`), **círculo** o **rectángulo a sangre**. Nada de máscaras irregulares.
- Grano: opcional, `opacity ≤ 0.05`, solo sobre superficies Noche o Tensión.
- Ratios: `3:4` (retrato), `1:1` (grid), `16:9` (video), `21:9` (banda editorial).
- Todas las imágenes decorativas: `alt=""` + `aria-hidden`. Los retratos de contenido llevan `alt` descriptivo.

---

## 10. Movimiento

### 10.1 Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `dur-instant` | `120ms` | Hover de color, foco |
| `dur-fast` | `220ms` | Botones, chips, inputs |
| `dur-base` | `380ms` | Entradas de elementos, acordeones |
| `dur-slow` | `700ms` | Aparición de sección, imágenes |
| `dur-thread` | `1600ms` | Dibujo del hilo |
| `ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default de entrada |
| `ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Movimientos reversibles |
| `ease-thread` | `cubic-bezier(0.16, 1, 0.3, 1)` | Solo para el hilo |

### 10.2 Patrones

- **Draw-on del hilo** (firma del sistema): `stroke-dasharray: L; stroke-dashoffset: L → 0` con `dur-thread` + `ease-thread`, disparado al entrar en viewport (usar `RenderOnViewportEntry`, ya existente en el repo).
- **Entradas de texto**: `opacity 0→1` + `translateY(16px→0)`, `dur-base`, stagger de `60ms`. Nada de escalado ni blur.
- **Hover**: solo cambio de color y de subrayado. Permitido `transform: translateY(-2px)` en tarjetas; prohibido `scale()` > 1.02.
- **Nunca** parallax de más de 40px, ni animaciones en loop infinito visibles en contenido.

### 10.3 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```
El hilo se renderiza directamente en su estado final (dibujado completo).

---

## 11. Componentes

Specs mínimas; el detalle de implementación vive en el código.

### 11.1 Botones

| Variante | Fondo | Texto | Borde | Radio | Hover |
| --- | --- | --- | --- | --- | --- |
| **Primary** | `#AA1C1A` | `#FEF4EB` | — | pill | fondo `#8E1718` |
| **Primary (modo Tensión)** | `#FEF4EB` | `#AA1C1A` | — | pill | fondo `#F2D4E0` |
| **Secondary** | transparent | `currentColor` | 1px `currentColor/40` | pill | borde 100%, fondo `currentColor/6` |
| **Ghost / link** | transparent | acento del modo | — | 0 | subrayado que se dibuja de izq. a der. (`dur-fast`) |

- Altura: `44px` (md) / `52px` (lg) / `36px` (sm). Padding horizontal ≥ `28px`.
- Tipografía: `button` (0.875rem, 700, tracking `0.12em`, `UPPERCASE`).
- Foco visible: `outline: 2px solid currentColor; outline-offset: 3px`.
- **Un solo botón primario por sección.**

### 11.2 Inputs

- Estilo **línea**: sin caja, solo `border-bottom: 1px`. Radio `0`. (Se conserva el patrón `lineInputSx` ya existente en el tema editorial, cambiando oro → rojo.)
- Label en `kicker` sobre el campo, no placeholder-as-label.
- Foco: la línea inferior pasa a `2px` en acento y se dibuja de izquierda a derecha.
- Error: línea `#AA1C1A` en modo Papel, `#E37A70` en modo Noche + mensaje en `body-sm`.

### 11.3 Tarjetas

- `radius-lg` (24px), superficie del modo, filete 1px, sin sombra.
- Padding `24px` móvil / `32px` desktop.
- Estructura: kicker → título `h3` → cuerpo → acción ghost.
- Variante destacada: filete superior de `2px` en rojo (equivalente al `accent` del tema editorial).

### 11.4 Navegación

- Barra transparente sobre el hero; al hacer scroll adopta la superficie de la sección con filete inferior de 1px.
- Ítems: `body-sm`, sin uppercase; el activo lleva **un punto rojo de 4px** debajo (el "punto de encuentro" del hilo).
- Logo siempre SVG, alto `28–36px`.
- Móvil: menú a pantalla completa en modo Noche, ítems en `h2`, un hilo cruzando el fondo.

### 11.5 Chips / badges

- `radius-pill`, `body-sm`, padding `6px 14px`, borde 1px.
- Badge informativo/dato: fondo `#CFE7F3`, texto `#3E0D11`. **Este es el uso canónico del celeste.**

### 11.6 Tablas y datos (Control Center)

- Sin zebra striping. Filas separadas por filete 1px.
- Cabecera en `kicker`.
- Números en `IBM Plex Mono` con `font-variant-numeric: tabular-nums`.
- Los estados usan el punto de color de 6px + texto, no fondos completos.

### 11.7 Cita / testimonio

- `display-2` o `h1` en itálica, sin comillas tipográficas grandes.
- Atribución en `kicker`, separada por un hilo horizontal de 40px.
- Idealmente en modo **Rubor**.

---

## 12. Accesibilidad

- Texto normal ≥ **4.5:1**, texto grande (≥24px o ≥19px bold) ≥ **3:1**, componentes/iconos funcionales ≥ **3:1**.
- Consultar §3.5 antes de usar rojo sobre oscuro; usar `red-300`/`red-400`.
- El color nunca es el único portador de información (los estados llevan icono o texto).
- Foco de teclado siempre visible; nunca `outline: none` sin reemplazo.
- Objetivos táctiles ≥ `44×44px`.
- Gráficos del hilo: `aria-hidden="true"`, `focusable="false"`.
- Respetar `prefers-reduced-motion` (§10.3) y `prefers-contrast`.
- El texto sobre fotografía siempre lleva una capa de protección (bloque de color plano o `linear-gradient` negro 0→60%), nunca se confía en la foto.

---

## 13. Tokens en código

### 13.1 Estructura de archivos propuesta

```
src/theme/
├─ hilo-rojo/
│  ├─ tokens.ts        # primitivas: color, espacio, radio, tipografía, motion
│  ├─ surfaces.ts      # los 4 modos de superficie
│  ├─ typography.ts    # escala + helpers (kickerSx, displaySx…)
│  ├─ mui.ts           # createTheme() de MUI mapeando los tokens
│  └─ index.ts         # barrel
└─ hilo-rojo.css       # CSS custom properties + [data-surface]
```

### 13.2 Primitivas (TypeScript)

```ts
// src/theme/hilo-rojo/tokens.ts
export const color = {
  crema: "#FEF4EB",
  rosaPalo: "#F2D4E0",
  rosa: "#F6BAD6",
  celeste: "#CFE7F3",
  rojo: "#AA1C1A",
  vino: "#751E31",
  borgona: "#3E0D11",
  negro: "#000000",
} as const;

export const red = {
  50: "#FDECEA", 100: "#F9CFCB", 200: "#F0A49D", 300: "#E37A70",
  400: "#CC4A3F", 500: "#AA1C1A", 600: "#8E1718", 700: "#751E31",
  800: "#57131F", 900: "#3E0D11",
} as const;

export const warm = {
  0: "#FFFFFF", 50: "#FEF4EB", 100: "#F5E9DE", 200: "#E7D9CC",
  300: "#C9BBAE", 400: "#9A8D82", 500: "#6B6159", 600: "#453F3A",
  700: "#2A2622", 800: "#171412", 900: "#000000",
} as const;

export const font = {
  sans: '"Century Gothic", "Poppins", "Questrial", "Futura", "Jost", system-ui, sans-serif',
  script: '"Pinyon Script", "Parisienne", cursive',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
} as const;

export const radius = {
  none: "0px", sm: "4px", md: "12px", lg: "24px",
  xl: "40px", pill: "999px", arch: "999px 999px 0 0",
} as const;

export const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 240] as const;

export const motion = {
  instant: "120ms", fast: "220ms", base: "380ms", slow: "700ms", thread: "1600ms",
  easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  easeThread: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;
```

### 13.3 Superficies (CSS custom properties)

```css
/* src/theme/hilo-rojo.css */
:root,
[data-surface="noche"] {
  --bg:        #000000;
  --fg:        #FEF4EB;
  --fg-muted:  rgba(254, 244, 235, 0.62);
  --fg-faint:  rgba(254, 244, 235, 0.38);
  --accent:    #E37A70;   /* texto/iconos rojos legibles */
  --thread:    #AA1C1A;   /* el hilo gráfico */
  --rule:      rgba(254, 244, 235, 0.14);
  --highlight: #CFE7F3;
}

[data-surface="papel"] {
  --bg: #FEF4EB;  --fg: #3E0D11;
  --fg-muted: rgba(62,13,17,.68);  --fg-faint: rgba(62,13,17,.42);
  --accent: #AA1C1A;  --thread: #AA1C1A;
  --rule: rgba(62,13,17,.14);  --highlight: #3E6E88;
}

[data-surface="rubor"] {
  --bg: #F2D4E0;  --fg: #3E0D11;
  --fg-muted: rgba(62,13,17,.66);  --fg-faint: rgba(62,13,17,.40);
  --accent: #751E31;  --thread: #AA1C1A;
  --rule: rgba(62,13,17,.16);  --highlight: #3E6E88;
}

[data-surface="tension"] {
  --bg: #AA1C1A;  --fg: #FEF4EB;
  --fg-muted: rgba(254,244,235,.78);  --fg-faint: rgba(254,244,235,.52);
  --accent: #FEF4EB;  --thread: #FEF4EB;
  --rule: rgba(254,244,235,.28);  --highlight: #CFE7F3;
}

[data-surface] { background: var(--bg); color: var(--fg); }
```

Uso:

```tsx
<section data-surface="rubor">…</section>
```

### 13.4 Helpers de estilo (sx)

```ts
export const kickerSx = {
  fontFamily: font.sans,
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  lineHeight: 1,
  color: "var(--accent)",
} as const;

export const displaySx = {
  fontFamily: font.sans,
  fontWeight: 700,
  fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
  letterSpacing: "-0.025em",
  lineHeight: 0.98,
  color: "var(--fg)",
} as const;

export const ruleSx = { height: "1px", background: "var(--rule)", border: 0 } as const;
```

### 13.5 Mapeo a MUI v7

```ts
palette: {
  primary:   { main: red[500], dark: red[600], light: red[300], contrastText: color.crema },
  secondary: { main: color.borgona, contrastText: color.crema },
  info:      { main: "#3E6E88", light: color.celeste },
  error:     { main: red[500], light: red[300] },
  background:{ default: color.negro, paper: warm[800] },
  text:      { primary: color.crema, secondary: "rgba(254,244,235,0.62)" },
},
shape: { borderRadius: 24 },
typography: { fontFamily: font.sans, button: { fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" } },
components: {
  MuiButton:  { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 999, minHeight: 44, paddingInline: 28 } } },
  MuiPaper:   { defaultProps: { elevation: 0 }, styleOverrides: { root: { backgroundImage: "none" } } },
  MuiCard:    { styleOverrides: { root: { borderRadius: 24, border: "1px solid var(--rule)" } } },
}
```

### 13.6 Carga de fuentes

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet" />
```

Con licencia de Century Gothic, reemplazar por `@font-face` autohospedado y quitar Poppins del stack.

---

## 14. Do / Don't

| ✅ Hacer | ❌ Evitar |
| --- | --- |
| Un hilo rojo continuo por pantalla | Varias líneas rojas decorativas sueltas |
| Rojo como acento sobre crema o negro | Texto `#AA1C1A` sobre negro (2.9:1) |
| Celeste en un dato, badge o subrayado | Secciones enteras en celeste |
| Titulares enormes + resto pequeño | Tres tamaños de titular compitiendo |
| Bloques de color plano | Degradados decorativos, glass, glow |
| Filete 1px + espacio | Tarjetas con borde, sombra y fondo a la vez |
| Esquinas 24px / píldora / arco | Radios aleatorios por componente |
| Composición asimétrica | Todo centrado por defecto |
| Uppercase solo en kicker y botones | Párrafos o titulares en mayúsculas |
| Script solo en el logotipo | Script en botones, menús o párrafos |
| Fotografía B/N + hilo rojo | Fotos con filtros de color aleatorios |
| Movimiento corto y sobrio | Rebotes, escalados, loops infinitos |

---

## 15. Checklist para portar el tema a otro proyecto

1. Copiar `src/theme/hilo-rojo/` y `src/theme/hilo-rojo.css`.
2. Importar el CSS en el entrypoint (`main.tsx`) **antes** de los estilos de app.
3. Cargar las fuentes (§13.6). Verificar que el fallback no rompa el layout (`size-adjust` si hace falta).
4. Poner `data-surface="noche"` (o el modo base del proyecto) en `<body>` o en el layout raíz.
5. Sustituir colores hardcodeados por `var(--fg)`, `var(--bg)`, `var(--accent)`, `var(--rule)`.
6. Eliminar del proyecto: oro `#c9a961`, glassmorphism, `backdrop-filter` decorativo, sombras de color, gradientes multiparada.
7. Revisar el reset global: en este repo `src/index.css` fuerza `color: white` en casi todos los elementos — debe pasar a `color: inherit` para que las superficies funcionen.
8. Añadir el componente `<RedThread variant="wave|scribble|radial|stitch" />`.
9. Pasar el checklist de accesibilidad (§12) sobre las 3 vistas principales.
10. Verificar en móvil que ningún titular `display-1` provoque scroll horizontal.

---

## Anexo — Deuda conocida en `ai-frontend`

Al aplicar este sistema en este repositorio hay que resolver:

- `src/theme.ts` — tema "Dark Luxury" en oro (`#c9a961`), a reemplazar.
- `src/theme/editorial.ts` — tokens editoriales en oro; su estructura (kicker, panel, line input) es buena y se **reaprovecha** cambiando la paleta.
- `src/index.css` — el `color: white` global sobre casi todos los selectores bloquea el sistema de superficies.
- `index.html` — cargas de Garet / Inter / Jost / Fraunces; consolidar a la sans de marca (+ mono si el Control Center la necesita).
- `@fontsource/alice` importado en `main.tsx` — retirar si no se usa.
- Verificar `src/styles/main.css` y `courses-premium.css` por colores hardcodeados.
