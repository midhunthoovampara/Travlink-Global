(function () {
  "use strict";

  function initialiseLuxuryShowcases() {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-luxury-showcase]").forEach(function (showcase) {
      if (showcase.dataset.luxuryShowcaseReady === "true") return;
      showcase.dataset.luxuryShowcaseReady = "true";

      if (reducedMotion || !("IntersectionObserver" in window)) {
        showcase.classList.add("is-visible");
        return;
      }

      showcase.classList.add("is-reveal-ready");
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.18 });

      observer.observe(showcase);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseLuxuryShowcases, { once: true });
  } else {
    initialiseLuxuryShowcases();
  }
})();
