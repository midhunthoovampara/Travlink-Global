(function () {
  "use strict";

  function initialiseOceanShowcases() {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-ocean-showcase]").forEach(function (showcase) {
      if (showcase.dataset.oceanShowcaseReady === "true") return;
      showcase.dataset.oceanShowcaseReady = "true";

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
      }, { threshold: 0.12 });

      observer.observe(showcase);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseOceanShowcases, { once: true });
  } else {
    initialiseOceanShowcases();
  }
})();
