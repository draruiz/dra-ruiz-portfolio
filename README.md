# Dra. María Alejandra Ruiz — sitio web

Sitio editorial de la Dra. María Alejandra Ruiz (psicóloga clínica, autora, conferencista, CEO de Almaymente.io), construido con **Astro 5** y **GSAP**, siguiendo el sistema de diseño **Hilo Rojo**.

- `HILO-ROJO-DESIGN-SYSTEM.md` — manual de marca (fuente de verdad de diseño).
- `PRODUCT.md` — verdad de producto: audiencias, canales, contenido, restricciones.
- `DESIGN.md` — cómo está implementado el sistema en este repo.

## Comandos

| Comando           | Acción                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor local en `localhost:4321`       |
| `npm run build`   | Build estático en `./dist/`              |
| `npm run preview` | Sirve el build para revisarlo            |

## Pendientes conocidos

- Comprimir `src/assets/hero_video.mp4` (11 MB, 848×480). Sugerido: `ffmpeg -i hero_video.mp4 -t 20 -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart hero.mp4` y una versión AV1/WebM. Hoy el video solo se carga en pantallas ≥768px y tras el primer idle.
- Convertir los logos PNG a SVG (el manual pide logotipo vectorial).
- Confirmar con la clienta: fechas de retiros, ISBN del libro, la URL de la ficha del libro en Buscalibre (hoy enlaza a la portada del sitio) y la afirmación "más de veinte años" del hero (heredada del sitio anterior).
- Imagen OG (`public/og-image.jpg`) generada a partir del hero; reemplazar si se prefiere una foto.

## Procedencia de los assets generados

- `public/hero-poster.jpg`: fotograma (44 s) de `src/assets/hero_video.mp4`, poster del hero y fondo en móvil.
- `src/assets/dilo-como-es.jpg`: portada oficial del show *Dilo Como Es*, obtenida del oEmbed de Spotify (show `7EAPPcMUumoRKNNJd44f6k`).
- `public/fonts/*.woff`: subsets Latin de las fuentes del brand kit (`src/assets/*.TTF|.otf`) con fontTools.
- Logos en `src/assets/*.png`: los originales del cliente recortados al área con tinta (los originales traían margen transparente y una columna de 1 px en el borde derecho).
