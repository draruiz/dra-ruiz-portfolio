---
name: Hilo Rojo · Dra. María Alejandra Ruiz
description: Índice editorial cosido por un solo hilo rojo; cuatro superficies que alternan por corte limpio, Century Gothic como imagen y Amoresa una palabra por pantalla.
colors:
  rojo: "#aa1c1a"
  red-300: "#e37a70"
  red-400: "#cc4a3f"
  red-600: "#8e1718"
  vino: "#751e31"
  borgona: "#3e0d11"
  celeste: "#cfe7f3"
  crema: "#fef4eb"
  rosa-palo: "#f2d4e0"
  rosa: "#f6bad6"
  negro: "#000000"
typography:
  display-1:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3.25rem, 11vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  display-2:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  h1:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
  kicker:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.22em"
  caption:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  label:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.2em"
  button:
    fontFamily: "Century Gothic, CG Fallback, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  script:
    fontFamily: "Amoresa, Snell Roundhand, Brush Script MT, cursive"
    fontSize: "1.04em"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
rounded:
  sm: "4px"
  lg: "24px"
  pill: "999px"
  arch: "999px 999px 0 0"
  circle: "50%"
spacing:
  "4": "4px"
  "8": "8px"
  "14": "14px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "40": "40px"
  "48": "48px"
  "56": "56px"
  gutter: "clamp(20px, 5.55vw, 80px)"
  gap: "clamp(16px, 2.2vw, 32px)"
  section: "clamp(72px, 10vw, 140px)"
  nav: "72px"
  measure: "34rem"
components:
  button-primary:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.crema}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.red-600}"
  button-primary-tension:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.rojo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "44px"
  button-primary-tension-hover:
    backgroundColor: "{colors.rosa-palo}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "44px"
  button-sm:
    typography: "{typography.kicker}"
    padding: "0 20px"
    height: "36px"
  button-lg:
    padding: "0 36px"
    height: "52px"
  link:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.body}"
    padding: "0 0 3px 0"
  chip:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  badge:
    backgroundColor: "{colors.celeste}"
    textColor: "{colors.borgona}"
    typography: "{typography.kicker}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.body-sm}"
    height: "72px"
  facade:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.crema}"
    rounded: "{rounded.lg}"
    padding: "28px"
  play-button:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.rojo}"
    rounded: "{rounded.circle}"
    size: "56px"
  meeting-dot:
    backgroundColor: "{colors.rojo}"
    rounded: "{rounded.circle}"
    size: "8px"
  arch-image:
    rounded: "{rounded.arch}"
---

# Design System: Hilo Rojo · Dra. María Alejandra Ruiz

## Overview

**Creative North Star: "El índice cosido a un solo hilo"**

La home no es una landing con hero centrado y tarjetas de servicios: es una tabla de contenidos gigante, y lo que la une es un único hilo rojo que se dibuja al hacer scroll. Cada sección es un capítulo con su propia superficie (Noche, Papel, Rubor o Tensión), separado del anterior por un corte limpio a sangre, y el hilo entra por arriba exactamente donde salió el capítulo anterior. Al pasar por el CTA principal de cada sección el hilo lo marca con un punto de encuentro (un círculo rojo de 8px), y en Contacto termina en uno.

La tipografía es la imagen. Century Gothic 700 hace de titular enorme con tracking negativo; el 400 hace de lectura; Amoresa (la script del logotipo) aparece como una sola palabra por pantalla, dentro de un titular, nunca en la UI. Todo lo demás es quieto: filetes de 1px en vez de cajas, píldoras en vez de rectángulos, el arco mid-century para el retrato, fotografía en blanco y negro donde el único color que sobrevive es el rojo del hilo. No hay sombras, glass, degradados decorativos ni iconos: la profundidad se cuenta con el color de la superficie y el orden de capas (texto delante, hilo en medio, foto detrás).

El movimiento tiene un solo gesto expresivo, el hilo dibujándose (con el scroll, o en 1.6 s tras el preloader). Las entradas de texto son opacidad más 16px con escalonado de 60 ms; los hovers son cambios de color y un subrayado que se dibuja. Con `prefers-reduced-motion` todo se renderiza directamente en su estado final.

**Key Characteristics:**
- Un solo hilo rojo SVG por sección, `stroke` 1.5px sin relleno, que cruza detrás del texto y delante de la foto, marca el CTA principal con un punto de 8px y sale por abajo donde entra el siguiente.
- Cuatro superficies por corte limpio (Noche, Papel, Rubor, Tensión) con sus propios tokens de primer plano; la nav adopta la superficie que tiene debajo.
- Rojo #aa1c1a como hilo y CTA; sobre negro el texto rojo sube a #e37a70 para ser legible.
- Century Gothic en dos pesos únicamente (400 y 700), sin itálica; tracking negativo en display, positivo en versalitas.
- Amoresa: una palabra por pantalla, dentro del titular, tamaño display.
- Filete 1px + aire en vez de tarjetas; píldora, círculo y arco como única geometría; cero `box-shadow`.
- Composición asimétrica en 12 columnas (8/4, 5/6, 7/4, 6/4) que colapsa en un único corte a 900px.

## Colors

Paleta corta y cálida: crema, rosa y negro como fondos, borgoña como texto sobre claro, y un solo rojo que actúa como hilo, énfasis y botón. Cada sección muestra como máximo tres colores (fondo, texto y un acento).

### Primary
- **Rojo hilo** (#aa1c1a): el color de marca. Es el trazo del hilo en Noche, Papel y Rubor, el fondo del botón primario, la selección de texto y el pulgar del scrollbar. Sobre Tensión llena la sección entera.
- **Rojo legible** (#e37a70): el acento de texto en superficie Noche (kicker, enlaces, punto activo de la nav). Existe porque el rojo de marca sobre negro solo alcanza 2.9:1.
- **Rojo pulsado** (#8e1718): hover del botón primario en Noche, Papel y Rubor.
- **Vino** (#751e31): acento de texto en Rubor (kicker, enlaces, la palabra en script de Colaboraciones).
- **Rojo medio** (#cc4a3f): declarado como segunda opción legible sobre negro (4.6:1); hoy sin consumidor en el sitio.

### Secondary
- **Celeste** (#cfe7f3): el único color frío. Uso canónico: fondo del badge informativo ("Segunda edición") con texto borgoña. Nunca es fondo de sección ni color de CTA.

### Neutral
- **Crema** (#fef4eb): fondo de Papel; texto principal sobre Noche y Tensión; botón primario invertido sobre Tensión.
- **Rosa palo** (#f2d4e0): fondo de Rubor; hover del botón invertido en Tensión.
- **Rosa** (#f6bad6): tono alterno de Rubor (`data-tone="rosa"`, Colaboraciones) y la palabra "calma" en script sobre Tensión (solo en tamaño display: 4.45:1).
- **Borgoña** (#3e0d11): texto principal sobre Papel y Rubor; texto del badge celeste.
- **Negro** (#000000): fondo de Noche (hero, libro, Almaymente, contacto, footer, preloader, menú móvil, fachadas de embed).

### Superficies
Cuatro modos, uno por sección, activados con `data-surface` en el contenedor; todo el primer plano se lee de estas variables, nunca de un hex directo.

| Superficie | Fondo | Texto | Texto secundario | Texto tenue | Acento | Hilo | Filete | Botón |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Noche** | negro | crema | rgba(254,244,235,.62) | rgba(254,244,235,.38) | rojo legible | rojo | rgba(254,244,235,.14) | rojo / crema |
| **Papel** | crema | borgoña | rgba(62,13,17,.68) | rgba(62,13,17,.42) | rojo | rojo | rgba(62,13,17,.14) | rojo / crema |
| **Rubor** | rosa palo (o rosa) | borgoña | rgba(62,13,17,.66) | rgba(62,13,17,.40) | vino | rojo | rgba(62,13,17,.16) | rojo / crema |
| **Tensión** | rojo | crema | rgba(254,244,235,.78) | rgba(254,244,235,.52) | crema | crema | rgba(254,244,235,.28) | crema / rojo |

Ritmo de la home tal como está construida: Noche (hero) → Papel (índice) → Rubor (bio) → Noche (libro) → Papel (podcast) → Noche (Almaymente) → Papel (eventos) → Rubor rosa (colaboraciones) → Tensión (retiros) → Noche (contacto y footer). Cada superficie declara también `--fg-faint` y `--highlight` (celeste en Noche y Tensión, #3e6e88 en Papel y Rubor); ninguno tiene hoy consumidor en los componentes, que se quedan en `--fg-muted` para todo lo secundario.

### Named Rules
**La Regla del Rojo Legible.** El rojo #aa1c1a nunca es texto, icono ni borde de input sobre negro. Sobre Noche el acento de texto es #e37a70; el hilo, que es gráfico, conserva #aa1c1a. Sobre Tensión el hilo y el acento pasan a crema.

**La Regla de Tres Colores.** Una sección muestra fondo, texto y un solo acento activo. El rojo llena la pantalla solo por decisión editorial (Tensión) y nunca en dos secciones seguidas.

**La Regla del Corte Limpio.** Las superficies cambian a borde completo, sin degradado ni transición de color; lo que las une es el hilo cruzando el límite. La nav no tiene superficie propia: adopta la de la sección bajo sus 72px (y cambia el logotipo blanco por el rojo en Papel y Rubor).

## Typography

**Display Font:** Century Gothic 700 (autohospedada, subset latino, con "CG Fallback": Avenir Next / Helvetica Neue / Arial ajustadas métricamente al 105%)
**Body Font:** Century Gothic 400 (misma pila)
**Script Font:** Amoresa 400 (con Snell Roundhand, Brush Script MT, cursive)

**Character:** Geométrica y sin ornamento: la `a` de un piso y la `o` circular de Century Gothic hacen que el titular parezca un objeto más que un texto. La script caligráfica del logotipo entra una sola vez por pantalla, como si alguien hubiera escrito a mano una palabra dentro del titular impreso; la palabra elegida es siempre del mundo emocional ("vínculos", "honestas", "calma", "escucharla").

### Hierarchy
- **Display-1** (700, `clamp(3.25rem, 11vw, 9rem)`, 0.92, tracking -0.03em): el nombre en el hero, anclado abajo-izquierda en 8 columnas, una línea por palabra; el h1 de `/about`.
- **Display-2** (700, `clamp(2.5rem, 6.5vw, 5.5rem)`, 0.98, -0.025em): titular de cada sección de la home; la palabra en script vive aquí.
- **H1** (700, `clamp(2rem, 4.6vw, 3.75rem)`, 1.05, -0.02em): cita editorial larga (Colaboraciones la usa en 400 para que lea como voz, no como titular).
- **H2** (700, `clamp(1.625rem, 3.2vw, 2.5rem)`, 1.15, -0.015em): subtítulos de columna (Conferencias / Talleres) e ítems del menú móvil.
- **H3** (700, `clamp(1.25rem, 2vw, 1.625rem)`, 1.25, -0.01em): título de módulo (podcast, canal, facetas de Almaymente, hitos de la ruta).
- **Body-lg** (400, 1.125rem, 1.65): bajada de sección, primer párrafo; suele ir en color texto pleno mientras el resto va en secundario.
- **Body** (400, 1rem, 1.7): texto general; los párrafos miden como máximo 34rem (`--measure`).
- **Body-sm** (400, 0.875rem, 1.6, +0.01em): metadatos, notas, enlaces de nav y footer.
- **Kicker** (700, 0.75rem, 1, +0.22em, MAYÚSCULAS, color acento): etiqueta de sección, siempre antes del titular; con `kicker--rule` lleva delante un filete de 48px × 1px en `currentColor` (el hilo en miniatura). Patrón fijado por el manual §5.3; también se usa sin filete para el rol en el hero.
- **Caption** (400, 0.6875rem, 1.4, +0.08em, caja normal, color secundario): números del índice, pies de retrato, ubicación y enlace "Índice" del hero, legales del footer. Ya no va en mayúsculas.
- **Label** (700, 0.6875rem, 1.2, +0.2em, MAYÚSCULAS, color secundario): etiqueta de dato en bloque, el kicker sin filete y en color secundario: "WhatsApp / Ubicación / Redes" en Contacto, tags y marca de la fachada de Spotify, "almaymente.io" sobre el CTA.
- **Button** (700, 0.875rem, 1, +0.12em, MAYÚSCULAS): texto de botón.
- **Script** (Amoresa 400, 1.04em del titular que la contiene, 1, tracking 0): una palabra dentro de display-1/display-2/h1, nunca por debajo de 40px (en la cita h1 de Colaboraciones sube a `max(1.15em, 2.5rem)`). Excepción de marca: la palabra "calma" sola, en rosa, a `clamp(6rem, 16vw, 15rem)` sobre Tensión.

### Named Rules
**La Regla de Dos Pesos.** Solo existen 400 y 700; no hay 500 ni itálica cargadas. Los títulos de sección (h2, h3) van en 700 aunque el manual proponga 500: el peso que no existe no se simula. El énfasis conceptual se hace con la script o con 700, nunca con `font-style: italic`.

**La Regla de Una Palabra.** Amoresa aparece una sola vez por pantalla, dentro de un titular, a tamaño display y nunca por debajo de 40px (2.5rem). Nunca en botones, navegación, párrafos ni etiquetas. El logotipo es siempre imagen, nunca texto compuesto.

**La Regla del Tracking.** Negativo en todo lo grande (-0.03em a -0.01em), positivo en todo lo pequeño (kicker 0.22em, label 0.2em, botón 0.12em, caption 0.08em). Mayúsculas solo en kicker, label y botón; el caption va en caja normal, y nunca hay mayúsculas en párrafos ni titulares.

## Layout

Contenedor de 1440px máximo con margen lateral fluido `clamp(20px, 5.55vw, 80px)`; dentro, una rejilla de 12 columnas con separación `clamp(16px, 2.2vw, 32px)`. La composición es siempre asimétrica y anclada a un borde: hero 8/4 (nombre / rol + CTA), bio 5 + 6 (retrato / texto desde la columna 7), libro 6 + 4 (texto / portada en 8–11), Almaymente 7 + 4 (texto / CTA en 9–12 con filete izquierdo), eventos 5 + 5 con columna vacía en medio, podcast 7 + 5 con el segundo módulo desplazado hacia abajo, colaboraciones 8 + 5 solapadas en la columna 8 (cita / cuerpo), retiros 6/6 (palabra en script / texto), footer 5 + 6. El índice desplaza su lista 32px a la derecha para dejar sitio al punto que sigue la fila activa. Al menos una sección rompe el margen: el video del hero a sangre completa, con su propio fotograma (`public/hero-poster.jpg`) como poster y fondo bajo el mismo oscurecido, ambos encuadrados en `62% 40%`, de modo que en móvil, donde el video no se carga, la imagen es la misma.

Un solo corte responsive: por debajo de 900px (`max-width: 899px`) todo pasa a `1 / -1`, cada hilo cambia a su ruta móvil por el margen izquierdo (solo las ramas del haz de Almaymente se ocultan), la nav baja el logotipo a 26px y muestra la hamburguesa con la píldora "Cursos" al lado (el CTA principal nunca desaparece); el resto de enlaces pasa al menú a pantalla completa. El video del hero solo se carga desde 768px, sin `prefers-reduced-motion` y sin `saveData`.

Ritmo vertical: cada sección lleva `clamp(72px, 10vw, 140px)` arriba y abajo; el hero y Retiros ocupan `100svh`. Dentro de una columna de texto, los bloques se apilan con 24px (kicker → titular → bajada → lista → botón); la cabecera de sección se separa del cuerpo con `clamp(48px, 6–7vw, 88–96px)`. Filas de lista a 14px de padding; retícula base 4 con pasos observados 4, 8, 14, 16, 20, 24, 28, 32, 40, 48, 56. La nav mide 72px fijos y `scroll-padding-top` la compensa en los anclajes.

Orden de capas dentro de cada sección: texto `z-index: 2`, hilo `z-index: 1`, fotografía y video `z-index: 0`, con `isolation: isolate` y `overflow-x: clip` en la sección.

### Named Rules
**La Regla del Hilo Continuo.** Cada hilo se escribe en un espacio de autor de 1440×900 (`data-viewbox`); al cargar, el script ajusta el viewBox del SVG al tamaño real de la sección en píxeles (1:1) y reescala las coordenadas (x por ancho/1440, y por alto/900), de modo que el trazo de 1.5px es uniforme sin `pathLength` ni `non-scaling-stroke`. En ese espacio el trazo entra en `y = -10` y sale en `y = 910` (o termina en el punto de su CTA), y la `x` de entrada es la `x` de salida de la sección anterior (hero sale en 1180 → índice entra en 1180; índice sale en 80 → bio entra en 80; Conferencias termina su costura en el punto del CTA en 720 y Colaboraciones retoma en 720; y así hasta Contacto, donde el hilo termina en un punto). En `/about` la cadena es la misma: el hilo del hero sale abajo en 300 (la columna del retrato), la bio lo recoge en 300 y cruza esa columna hasta 80, donde arranca la costura de la ruta. Bajo 900px cada hilo tiene una ruta móvil (`dm` / `pathsMobile`) que baja por el margen izquierdo en x = 40 del espacio de autor (≈11px a 390px) con ondas suaves, y los relevos se conservan: hero → índice en 1180, índice → bio en 80, y 40 desde ahí (en `/about` la bio y la ruta bajan por 88, alineadas con las viñetas). Una sección nueva se inserta respetando esa cadena en las dos rutas.

**La Regla del Único Corte.** Hay un breakpoint estructural (900px): lo que no cabe se apila y los hilos cambian a su ruta móvil. No hay rejillas intermedias; la única regla menor por debajo es que las tags de la fachada de Spotify desaparecen bajo 600px.

## Elevation & Depth

El sistema es plano: no hay `box-shadow` en ninguna parte del sitio, ni `backdrop-filter`, ni glass. La profundidad se construye con tres recursos: el cambio de superficie entre secciones (color blocking a sangre), el filete de 1px en `--rule` para separar sin encerrar, y el orden de capas texto / hilo / imagen. Las únicas capas translúcidas son las dos protecciones de texto sobre imagen: sobre el poster y el video del hero, `linear-gradient(to top, rgba(0,0,0,.78) 0%, rgba(0,0,0,.42) 48%, rgba(0,0,0,.5) 100%)`; sobre la portada del podcast en la fachada de Spotify, `linear-gradient(to top, rgba(0,0,0,.82) 0%, rgba(0,0,0,.35) 45%, rgba(0,0,0,.25) 100%)`. Nunca se confía en la foto para la legibilidad. El único movimiento de "elevación" es la portada del libro subiendo 2px al pasar el ratón.

### Named Rules
**La Regla del Plano.** Cero sombras. Si algo tiene que destacarse, cambia de superficie, gana un filete o le llega el hilo. Un `box-shadow` sería una decisión nueva del sistema, no una variación.

## Shapes

Geometría mid-century, explícita y corta: **filete** de 1px (`--rule`, currentColor al 14–28% según superficie) como separador universal (listas, cabeceras de nav al hacer scroll, footer, CTA lateral de Almaymente, pie del hero); **píldora** (999px) para botones, chips y badge; **círculo** para todos los puntos del hilo (8px en el índice, la ruta y el punto de encuentro del SVG; 4px bajo el ítem activo de la nav; 6px en el preloader) y para el botón de reproducción (56px); **arco** (`999px 999px 0 0`) para el retrato en 4:5, siempre en blanco y negro (`grayscale(1) contrast(1.06)`). Las esquinas suaves se reservan a dos casos: 4px para la portada del libro (objeto impreso, 34:49) y 24px para las fachadas y embeds de audio y video (16:9). Secciones, video del hero y bloques de color no llevan radio. El hilo es siempre `stroke` sin `fill`, con `stroke-linecap: round`. No hay iconos salvo la flecha lineal (24×24, trazo 1.5, currentColor) de las filas del índice y el triángulo de play; nada de librerías de iconos. `--radius-xl: 40px` está declarado y sin uso.

## Components

### Botones
Píldoras en mayúsculas con tracking amplio; la única superficie del sistema con fondo pleno.
- **Shape:** píldora (999px), 44px de alto, padding 0 28px, `gap: 12px` si lleva flecha, borde de 1px transparente reservado al secundario.
- **Primary:** fondo rojo (#aa1c1a) y texto crema; en Tensión se invierte a crema con texto rojo. Uno por sección. Aparece siete veces en el sitio, siempre para la acción principal: "Ver los cursos", "Conseguir el libro", "Explorar los cursos", "Reservar mi lugar".
- **Hover / Active:** fondo #8e1718 (rosa palo en Tensión), 220ms; `scale(.97)` al pulsar en 160ms. Foco: `outline: 2px solid currentColor; offset 3px`.
- **Secondary:** transparente, texto `currentColor`, borde `currentColor` al 40%; en hover el borde pasa al 100% y el fondo a `currentColor` al 6%. Para acciones de sección que no son la principal: "Agenda tu evento", "Escríbeme por WhatsApp", "El libro" / "Podcast" en el cierre de `/about`.
- **Tamaños:** `--sm` 36px / 0 20px / 0.75rem (el "Cursos" de la nav); `--lg` 52px / 0 36px (el CTA de Almaymente).

### Enlace
Texto en 700 y color acento de la superficie, con un subrayado de 1px que se dibuja de izquierda a derecha en 220ms al pasar o enfocar ("Escríbeme", "Conocer mi historia completa", "Abrir en Spotify"). Variante `--quiet`: hereda el color y baja a 400 (footer, redes del menú). El correo de Contacto es el mismo gesto a escala display (`clamp(1.5rem, 4.4vw, 4rem)`, subrayado de 2px, 380ms).

### Kicker con filete
Etiqueta de sección: 0.75rem, 700, 0.22em, mayúsculas, color acento; con `kicker--rule` lleva delante un filete de 48px × 1px en `currentColor`, separado 16px. Siempre es lo primero de la columna de texto, seguido del titular en display-2 a 24px. Es un `<p>` (o el `<h2>` de la sección cuando no hay otro titular, como en el índice).

### Listas con filete
`.rules`: filete superior y un filete bajo cada ítem, 14px de padding vertical, sin viñetas; el texto en color secundario. Variante `--stack`: cada ítem apila un título (h3 en 700) y una descripción (0.9375rem, secundario) con 4px entre ellos. Retiros la parte en dos columnas con filetes solo arriba de cada ítem.

### Chips y badge
- **Chips:** lista horizontal con envoltura, 8px entre ellos; cada chip 6px 14px, borde 1px `--rule`, píldora, 0.875rem, sin fondo. Son informativos (temas de colaboración), no filtros ni botones.
- **Badge:** píldora 6px 14px con fondo celeste y texto borgoña, 0.75rem, 700, 0.08em, mayúsculas. Es el uso canónico del celeste ("Segunda edición").

### Imagen en arco
`figure.arch`: la imagen recorta en arco (`999px 999px 0 0`), ratio 4:5, `object-fit: cover`, blanco y negro con contraste 1.06; debajo, 14px, un caption. En `/about` la figura es `sticky` a 72 + 32px del borde superior. La portada del libro no lleva arco: es un objeto impreso con 4px de radio.

### Navegación
- **Barra:** fija, 72px, transparente sobre el hero, en tres columnas (logo / enlaces / CTA). Al pasar de 24px de scroll adopta el fondo `--bg` de la superficie que tiene debajo y un filete inferior en `--rule` (220ms). El logotipo es imagen de 30px de alto: blanco sobre Noche y Tensión, rojo sobre Papel y Rubor.
- **Enlaces:** 0.875rem, tracking 0.01em, color secundario; en hover y activo pasan a texto pleno. El activo lleva bajo el texto un punto de 4px en color acento que escala de 0 a 1 en 220ms: el punto de encuentro del hilo. El activo se calcula por la sección que ocupa la línea de 72px.
- **CTA:** "Cursos", botón primario `--sm`, siempre a la derecha.
- **Móvil (<900px):** el logotipo baja a 26px y la píldora "Cursos" se queda visible a 6px de la hamburguesa (44×44, dos barras de 22×1.5px que rotan 45° al abrir); el menú es una cortina Noche a pantalla completa que baja en 380ms, con un hilo cruzando el fondo, los ítems en h2 dentro de una lista con filetes que entran escalonados (120ms + 60ms × i), el CTA primario y las redes en `link--quiet`. Se cierra con Escape, al elegir un ítem o al superar 900px; usa `inert` cuando está cerrado.

### El hilo (componente firma)
`<Thread>` renderiza un SVG absoluto que cubre la sección (`inset: 0`, `pointer-events: none`, `z-index: 1`, `overflow: visible`). Los trazos se escriben en un espacio de autor de 1440×900 (`data-viewbox`); tras `document.fonts.ready` (tope 1.5 s) el script fija el viewBox al tamaño real de la sección en píxeles y reescala cada `d`, y vuelve a medir cuando cambia el ancho del viewport (200 ms de espera). Bajo 900px usa la ruta móvil (`dm` / `pathsMobile`, guardada en `data-dm`) y, si la sección declara `anchor` (el selector de su CTA), recoloca el punto de encuentro en el margen a la altura del CTA real. Cuatro primitivas del manual, tal como se construyeron:
- **Onda** (`variant="wave"`, 1.5px): curva Bézier que cruza la sección; es el default en todas las secciones de la home.
- **Costura** (`variant="stitch"`, 1px, `stroke-dasharray: 6 8` fijo en CSS): línea vertical recta que separa las dos columnas de Conferencias / Talleres y termina sobre el filete de su CTA (720, 733) con punto de encuentro; acompaña la ruta en `/about`. Se revela con `clip-path` de arriba abajo; en móvil recorre todo el margen izquierdo (en `/about` por x = 88, alineada con las viñetas de la ruta). La ruta de Bio la dibuja en horizontal con una `<line>` y puntos de 8px por hito.
- **Haz** (1.25px, varios `paths`): en Almaymente el hilo principal converge con tres ramas en el punto del CTA; en móvil queda solo el trazo principal recto por el margen (las ramas reciben `M 0 0` y se ocultan por CSS).
- **Punto de encuentro** (`dot`): un `path` de longitud 0.01 cuyo `stroke-width` pasa de 0 a 8px en 220ms cuando el hilo se ha dibujado al 94% (`is-done`). Se coloca donde el hilo pasa por el CTA principal de la sección: hero (oculto bajo 900px, donde el CTA se apila bajo el nombre), bio, libro, Almaymente (donde converge el haz), Conferencias (fin de la costura), colaboraciones, retiros y el cierre de `/about`; en Contacto es el final del hilo. Solo el índice (su punto es el que sigue la fila activa) y el podcast (dos módulos iguales, sin CTA único) dejan pasar el hilo sin punto. En móvil el punto se ancla al CTA real (`anchor`): cae en el margen (x = 40) centrado verticalmente en el botón o enlace (`anchorPos="center"`, el default), o, en Contacto, con `"end"`, el trazo se recorta a una vertical que termina en el punto 14px por encima del correo; `"above"` (14px por encima, sin recortar) existe y no se usa.

Color `var(--thread)`: rojo en Noche, Papel y Rubor; crema en Tensión. Hasta que el script mide el hilo (`.is-ready`), los trazos de onda y haz están en `opacity: 0` y las costuras recortadas con `clip-path: inset(0 0 100% 0)`; después la longitud real en píxeles (`getTotalLength()`) se usa como `stroke-dasharray` y `stroke-dashoffset`. Modos de dibujo: `scrub` (dashoffset de la longitud a 0 ligado al scroll entre "top 78%" y "bottom 62%" de la sección, `scrub: 0.6`; `.is-done` al 94%), `clip` (la costura se revela de arriba abajo con el mismo ScrollTrigger y también marca `.is-done` al 94%), `hero` (de la longitud a 0 en 1.6 s con `expo.out` al terminar el preloader) y `none`. Con `prefers-reduced-motion` el hilo aparece completo (`stroke-dasharray: none`, sin recorte) y con su punto.

### El índice (componente firma)
Lista ordenada con filete superior y filas en rejilla de cuatro columnas (número · título · meta · flecha), 18–30px de padding, filete inferior. Número en caption y color secundario; título a `clamp(2rem, 5.6vw, 5.5rem)` en 700 con tracking -0.02em; meta en body-sm secundario alineado a la derecha; flecha lineal de 28px en color secundario. En hover (solo con puntero fino) número y flecha pasan a acento y la flecha avanza 6px. El hilo baja por la derecha y se une al carril izquierdo en y = 200 del espacio de autor (270 en móvil), por encima de los numerales. A la izquierda de la lista, a 36px, un punto rojo de 8px se desliza (380ms) hasta la fila bajo el cursor o, sin cursor, la fila más cercana al centro de la pantalla. En móvil la meta baja bajo el título y la flecha ocupa dos filas.

### Fachada de embed
Un `<button>` con la forma del reproductor que carga el iframe (Spotify o YouTube) solo al pulsarlo. Siempre es una isla Noche aunque la sección sea Papel: fondo negro, texto crema, borde 1px, 24px de radio, 16:9, y la imagen real del contenido en blanco y negro (`grayscale(1) contrast(1.05)`) que recupera el color en hover. Spotify muestra la portada del show bajo un oscurecido inferior, con tags y marca en label (crema al 72%), el título a `clamp(2.25rem, 4.6vw, 4.25rem)` y la presentadora en body-sm, todo con padding 28px (20px bajo 900px; las tags se ocultan bajo 600px); YouTube muestra la miniatura sin texto. El botón de play es un círculo crema de 56px con el triángulo rojo, arriba a la derecha en Spotify y centrado en YouTube; `scale(.94)` al pulsar.

### Preloader
Una vez por sesión (`sessionStorage`): pantalla Noche con un hilo de 420×60 (`min(420px, 60vw)`) que se dibuja en 1.1 s con `--ease-thread`, remata en un punto de 6px a los 1.12 s y a los 1.35 s la cortina sube en 620ms (`--ease-inout`) mientras el hero entra (24px, 0.7 s, escalonado 0.08 s). Con `prefers-reduced-motion` no aparece.

### Footer
Superficie Noche con filete superior; logotipo completo en blanco (máx. 320px) en 5 columnas, enlaces `link--quiet` a la derecha en 6, y una fila de captions (copyright y ubicación) separada por otro filete. Sin hilo: el hilo terminó en el punto de Contacto.

## Do's and Don'ts

### Do:
- **Do** poner un solo `<Thread>` por sección, escrito en el espacio de autor 1440×900 (el script lo ajusta a la sección), con `y` de entrada en -10 y salida en 910 o final en el punto del CTA, entrando por la `x` donde salió la sección anterior; y darle una ruta móvil `dm` por el margen izquierdo (x = 40) con `anchor` al CTA para que el punto caiga sobre el botón real.
- **Do** poner el punto de encuentro (8px) donde el hilo pasa por el CTA principal de la sección; solo pasa de largo sin punto cuando la sección no tiene un CTA único (índice, podcast).
- **Do** leer todo el color de primer plano de las variables de superficie (`--fg`, `--fg-muted`, `--fg-faint`, `--accent`, `--thread`, `--rule`, `--btn-*`); en Noche el texto rojo es #e37a70, nunca #aa1c1a.
- **Do** abrir cada sección con kicker (con filete de 48px) → titular display-2 → bajada body-lg, apilados a 24px, y una sola palabra en Amoresa dentro del titular como máximo.
- **Do** separar con filete de 1px y aire: listas `.rules`, cabeceras al hacer scroll, pies, columnas laterales. Un módulo destacado cambia de superficie o gana un filete, no una caja.
- **Do** usar solo dos pesos (400 y 700), tracking negativo en display y positivo en lo pequeño; mayúsculas únicamente en kicker, label y botón (el caption va en caja normal).
- **Do** recortar el retrato en arco 4:5 y en blanco y negro (`grayscale(1) contrast(1.06)`); el único color sobre una foto es el rojo del hilo.
- **Do** componer en asimetría sobre 12 columnas (8/4, 5/6, 7/4, 6/4) anclada a un borde, con un único corte a 900px donde todo pasa a `1 / -1`.
- **Do** mover solo tres cosas: el hilo dibujándose, entradas de opacidad + 16px con escalonado de 60ms, y cambios de color o subrayado en hover; y renderizar el estado final con `prefers-reduced-motion`.
- **Do** proteger el texto sobre video o foto con una capa de color plano o degradado negro (hero y fachada de Spotify); nunca confiar en la imagen.

### Don't:
- **Don't** usar `box-shadow`, `backdrop-filter`, glass, glow ni degradados decorativos; los únicos degradados del sitio son las protecciones de texto sobre imagen.
- **Don't** escribir texto, iconos ni bordes en #aa1c1a sobre negro (2.9:1), ni celeste sobre crema o rosa (1.2:1).
- **Don't** usar Amoresa en botones, navegación, párrafos o etiquetas, ni más de una palabra por pantalla, ni por debajo de 40px, ni componer el logotipo como texto.
- **Don't** simular el peso 500 ni una itálica: no existen en las fuentes cargadas.
- **Don't** poner dos secciones Tensión seguidas, ni el rojo como fondo por defecto; el rojo es acento salvo por decisión editorial.
- **Don't** dibujar varias líneas rojas sueltas, hilos sin continuidad entre secciones, ni hilos que pasen por delante del texto.
- **Don't** encerrar contenido en tarjetas con borde, fondo y sombra a la vez; ni centrar por defecto una sección entera.
- **Don't** añadir iconos glifo, librerías de iconos ni emojis; las únicas formas son la flecha lineal de 1.5px y el triángulo de play.
- **Don't** usar `scale()` mayor que 1, rebotes, parallax ni loops visibles; el `translateY(-2px)` de la portada es el máximo desplazamiento en hover.
- **Don't** cargar iframes al inicio ni el video del hero en móvil, con `saveData` o con `prefers-reduced-motion`.
