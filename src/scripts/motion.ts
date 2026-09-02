/**
 * Movimiento del sitio (Hilo Rojo §10).
 * - Un solo gesto expresivo: el hilo dibujándose (scrub con el scroll).
 * - Entradas de texto: opacity + 16px, stagger 60ms (IntersectionObserver + CSS).
 * - Todo lo demás es silencio: colores, subrayados, un punto que se mueve.
 * - Reduced motion: estado final, sin scroll-jacking.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const html = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const NAV_H = 72;

/* ---------- Entradas por viewport ---------- */
const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
if (reduce || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.02 },
  );
  reveals.forEach((el) => io.observe(el));
}

/* ---------- El hilo: se dibuja con el scroll ----------
   Cada SVG adopta el tamaño real de su sección (viewBox 1:1 en px) y sus paths se escalan
   desde el viewBox de autor (1440×900). Así la longitud medida con getTotalLength() está en
   píxeles y el trazo (1.5px) es uniforme sin trucos de pathLength ni non-scaling-stroke. */
const threads = Array.from(document.querySelectorAll<SVGSVGElement>(".thread[data-draw]"));
let threadCtx: gsap.Context | null = null;
let introDone = false;

function scalePath(d: string, sx: number, sy: number): string {
  return d.replace(/([MLCSQTHVmlcsqthv])([^MLCSQTHVZmlcsqthvz]*)/g, (_m, cmd: string, args: string) => {
    const nums = args.trim().split(/[\s,]+/).filter(Boolean).map(Number);
    const c = cmd.toUpperCase();
    const out =
      c === "H" ? nums.map((n) => n * sx)
      : c === "V" ? nums.map((n) => n * sy)
      : nums.map((n, i) => (i % 2 === 0 ? n * sx : n * sy));
    return `${cmd} ${out.map((n) => +n.toFixed(2)).join(" ")} `;
  });
}

const MOBILE_X = 40; // margen izquierdo de la ruta móvil, en espacio de autor (≈11px a 390)

function fitThread(svg: SVGSVGElement) {
  const vb = (svg.dataset.viewbox ?? svg.getAttribute("viewBox") ?? "0 0 1440 900").split(/\s+/).map(Number);
  const rect = svg.getBoundingClientRect();
  const { width: W, height: H } = rect;
  if (!W || !H) return;
  const mobile = window.innerWidth < 900;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const sx = W / vb[2];
  const sy = H / vb[3];
  svg.querySelectorAll<SVGPathElement>("path").forEach((p) => {
    const d0 = p.dataset.d ?? (p.dataset.d = p.getAttribute("d") ?? "");
    const src = mobile && p.dataset.dm ? p.dataset.dm : d0;
    p.setAttribute("d", scalePath(src, sx, sy));
  });
  // En móvil el punto de encuentro se ancla al CTA real de la sección
  const anchorSel = svg.dataset.anchor;
  const dotEl = svg.querySelector<SVGPathElement>(".thread__dot");
  if (mobile && anchorSel && dotEl) {
    const scope = (svg.closest("section, footer, header") as HTMLElement | null) ?? svg.parentElement!;
    const target = scope.querySelector<HTMLElement>(anchorSel);
    if (target) {
      const t = target.getBoundingClientRect();
      const pos = svg.dataset.anchorPos ?? "center";
      const x = MOBILE_X * sx;
      const y = pos === "center" ? t.top - rect.top + t.height / 2 : t.top - rect.top - 14;
      dotEl.setAttribute("d", `M${x.toFixed(2)} ${y.toFixed(2)} h0.01`);
      if (pos === "end") {
        const main = svg.querySelector<SVGPathElement>("path:not(.thread__dot)");
        main?.setAttribute("d", `M ${x.toFixed(2)} ${(-10 * sy).toFixed(2)} L ${x.toFixed(2)} ${y.toFixed(2)}`);
      }
    }
  }
}

function setupThreads() {
  threadCtx?.revert();
  threadCtx = gsap.context(() => {
    for (const svg of threads) {
      fitThread(svg);
      const mode = svg.dataset.draw;
      const section = (svg.closest("section, footer, header") as HTMLElement | null) ?? svg.parentElement!;
      const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path:not(.thread__dot)"));

      if (reduce) {
        svg.classList.add("is-ready", "is-done");
        continue;
      }
      if (mode === "scrub" || mode === "hero") {
        for (const p of paths) {
          const L = p.getTotalLength();
          p.style.strokeDasharray = `${L}`;
          p.style.strokeDashoffset = mode === "hero" && introDone ? "0" : `${L}`;
        }
        svg.classList.add("is-ready");
        if (mode === "scrub") {
          gsap.to(paths, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              end: "bottom 62%",
              scrub: 0.6,
              onUpdate: (self) => svg.classList.toggle("is-done", self.progress > 0.94),
            },
          });
        }
      } else if (mode === "clip") {
        svg.classList.add("is-ready");
        gsap.fromTo(
          svg,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              end: "bottom 62%",
              scrub: 0.6,
              onUpdate: (self) => svg.classList.toggle("is-done", self.progress > 0.94),
            },
          },
        );
      }
    }
  });
}

// Medir tras las fuentes (cambian la altura de las secciones); tope de espera de 1.5 s.
let threadsReady = false;
let introRequested = false;
const fontsReady: Promise<unknown> = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts?.ready ?? Promise.resolve();
Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(() => {
  setupThreads();
  ScrollTrigger.refresh();
  threadsReady = true;
  if (introRequested) intro();
});

// Al cambiar el ancho, re-medir y reconstruir (el alto de las secciones cambia).
let lastW = window.innerWidth;
let resizeT = 0;
window.addEventListener("resize", () => {
  if (window.innerWidth === lastW) return;
  lastW = window.innerWidth;
  clearTimeout(resizeT);
  resizeT = window.setTimeout(() => {
    setupThreads();
    ScrollTrigger.refresh();
  }, 200);
});

/* ---------- Intro del hero (tras el preloader) ---------- */
function intro() {
  if (introDone) return;
  introDone = true;
  const heroEls = gsap.utils.toArray<HTMLElement>("[data-hero]");
  const heroThread = document.querySelector<SVGSVGElement>('.thread[data-draw="hero"]');
  const heroPaths = heroThread
    ? Array.from(heroThread.querySelectorAll<SVGPathElement>("path:not(.thread__dot)"))
    : [];

  if (reduce) {
    gsap.set(heroEls, { clearProps: "all", opacity: 1 });
    heroThread?.classList.add("is-done");
    return;
  }
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  if (heroPaths.length) {
    tl.to(heroPaths, { strokeDashoffset: 0, duration: 1.6, ease: "expo.out" }, 0);
  }
  tl.fromTo(
    heroEls,
    { autoAlpha: 0, y: 24 },
    { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, clearProps: "transform" },
    0.15,
  );
  tl.call(() => heroThread?.classList.add("is-done"), [], 1.35);
}
const requestIntro = () => {
  introRequested = true;
  if (threadsReady) intro();
};
if (html.classList.contains("hr-ready")) requestIntro();
else document.addEventListener("hr:ready", requestIntro, { once: true });

/* ---------- Nav: adopta la superficie de la sección y marca la activa ---------- */
const nav = document.getElementById("nav");
if (nav) {
  const navLinks = Array.from(nav.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const setActive = (id: string) => {
    for (const a of navLinks) {
      if (a.dataset.navLink === id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    }
  };
  const blocks = Array.from(
    document.querySelectorAll<HTMLElement>("main [data-surface], footer[data-surface]"),
  );
  for (const block of blocks) {
    ScrollTrigger.create({
      trigger: block,
      start: `top ${NAV_H}px`,
      end: `bottom ${NAV_H}px`,
      onToggle: (self) => {
        if (!self.isActive) return;
        nav.dataset.surface = block.dataset.surface ?? "noche";
        if (block.dataset.tone) nav.dataset.tone = block.dataset.tone;
        else delete nav.dataset.tone;
        if (block.id) setActive(block.id);
      },
    });
  }
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Menú móvil ---------- */
const menu = document.querySelector<HTMLElement>("[data-menu]");
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
if (menu && toggle) {
  const setOpen = (open: boolean) => {
    menu.classList.toggle("is-open", open);
    if (open) menu.removeAttribute("inert");
    else menu.setAttribute("inert", "");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.style.overflow = open ? "hidden" : "";
    if (nav) {
      if (open) nav.dataset.surface = "noche";
      else ScrollTrigger.refresh();
    }
  };
  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
  menu.querySelectorAll<HTMLAnchorElement>("[data-menu-link]").forEach((a) =>
    a.addEventListener("click", () => setOpen(false)),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) setOpen(false);
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

/* ---------- Índice: el punto sigue la fila activa ---------- */
const toc = document.querySelector<HTMLElement>("[data-toc]");
const tocDot = toc?.querySelector<HTMLElement>(".toc__dot");
if (toc && tocDot) {
  const rows = Array.from(toc.querySelectorAll<HTMLElement>(".toc__row"));
  const yTo = gsap.quickTo(tocDot, "y", { duration: reduce ? 0 : 0.38, ease: "power3.out" });
  const moveTo = (row: HTMLElement) => {
    const r = row.getBoundingClientRect();
    const l = toc.getBoundingClientRect();
    yTo(r.top - l.top + r.height / 2);
  };
  rows.forEach((row) => {
    row.addEventListener("pointerenter", () => moveTo(row));
    row.addEventListener("focus", () => moveTo(row));
  });
  // sin hover: el punto acompaña la fila más cercana al centro de la pantalla
  ScrollTrigger.create({
    trigger: toc,
    start: "top bottom",
    end: "bottom top",
    onUpdate: () => {
      if (toc.matches(":hover")) return;
      const mid = window.innerHeight * 0.5;
      let best = rows[0];
      let bestD = Infinity;
      for (const row of rows) {
        const r = row.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = row;
        }
      }
      moveTo(best);
    },
  });
  if (rows[0]) {
    const r = rows[0].getBoundingClientRect();
    const l = toc.getBoundingClientRect();
    gsap.set(tocDot, { y: r.top - l.top + r.height / 2 });
  }
}

/* ---------- Video del hero: carga diferida, solo escritorio, pausa fuera de pantalla ---------- */
const video = document.querySelector<HTMLVideoElement>(".hero__video");
if (video) {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const okToLoad =
    !reduce && window.matchMedia("(min-width: 768px)").matches && !(conn && conn.saveData);
  if (okToLoad && video.dataset.src) {
    const start = () => {
      video.src = video.dataset.src!;
      video.load();
      video
        .play()
        .then(() => video.classList.add("is-playing"))
        .catch(() => {});
    };
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
        .requestIdleCallback(start, { timeout: 2500 });
    } else {
      setTimeout(start, 1400);
    }
    new IntersectionObserver(
      ([e]) => {
        if (!video.src) return;
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 },
    ).observe(video);
  }
}

/* ---------- Fachadas: los iframes solo se cargan al hacer click ---------- */
document.querySelectorAll<HTMLButtonElement>("[data-embed]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const kind = btn.dataset.embed;
    const wrap = document.createElement("div");
    const iframe = document.createElement("iframe");
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.width = "100%";
    if (kind === "spotify") {
      wrap.className = "embed embed--spotify";
      iframe.src = "https://open.spotify.com/embed/show/7EAPPcMUumoRKNNJd44f6k/video?utm_source=generator&theme=0";
      iframe.title = "Podcast Dilo Como Es en Spotify";
      iframe.height = "352";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    } else {
      wrap.className = "embed embed--yt";
      iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0`;
      iframe.title = "Video del canal de la Dra. Ruiz en YouTube";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
    }
    wrap.appendChild(iframe);
    btn.replaceWith(wrap);
  });
});
