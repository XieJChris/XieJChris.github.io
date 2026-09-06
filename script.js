/* Reveal-on-scroll, scrollspy, footer dates. Respects reduced motion. */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Reveal on scroll ──
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
      revealObserver.observe(el);
    });
  }

  // ── Scrollspy: highlight the nav link of the section in view ──
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  const linkFor = new Map(
    navLinks.map((a) => [a.getAttribute("href").slice(1), a])
  );
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor.get(entry.target.id);
        if (!link || !entry.isIntersecting) return;
        navLinks.forEach((l) => l.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  ["research", "publications", "news", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });

  // ── Footer dates ──
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const updatedEl = document.getElementById("updated");
  if (updatedEl) {
    const modified = new Date(document.lastModified);
    if (!Number.isNaN(modified.getTime())) {
      updatedEl.textContent = modified.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
  }
})();
