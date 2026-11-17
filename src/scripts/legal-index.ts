// Páginas legales: el índice marca la sección que se está leyendo.
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-pol-link]"));
const targets = links
  .map((a) => document.getElementById(a.dataset.polLink ?? ""))
  .filter((el): el is HTMLElement => el !== null);
if (targets.length && "IntersectionObserver" in window) {
  const setActive = (id: string) => {
    for (const a of links) {
      if (a.dataset.polLink === id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    }
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );
  targets.forEach((t) => io.observe(t));
}
