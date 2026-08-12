(function () {
  "use strict";

  function initialiseLuxuryShowcases() {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-luxury-showcase]").forEach(function (showcase) {
      if (showcase.dataset.luxuryShowcaseReady === "true") return;
      showcase.dataset.luxuryShowcaseReady = "true";

      var cards = Array.from(showcase.querySelectorAll("[data-luxury-card]"));
      var navButtons = Array.from(showcase.querySelectorAll("[data-luxury-nav]"));
      var viewport = showcase.querySelector("[data-luxury-viewport]");
      var activeIndex = 0;
      var scrollFrame = 0;

      function setActive(index, shouldScroll) {
        var nextIndex = Math.max(0, Math.min(index, cards.length - 1));
        activeIndex = nextIndex;

        cards.forEach(function (card, cardIndex) {
          card.classList.toggle("is-active", cardIndex === nextIndex);
        });

        navButtons.forEach(function (button, buttonIndex) {
          var isActive = buttonIndex === nextIndex;
          button.classList.toggle("is-active", isActive);
          button.setAttribute("aria-pressed", String(isActive));
        });

        if (shouldScroll && viewport && viewport.scrollWidth > viewport.clientWidth) {
          viewport.scrollTo({
            left: cards[nextIndex].offsetLeft - (viewport.clientWidth - cards[nextIndex].offsetWidth) / 2,
            behavior: reducedMotion ? "auto" : "smooth"
          });
        }
      }

      function updateFromScroll() {
        scrollFrame = 0;
        var viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        var nearestIndex = activeIndex;
        var nearestDistance = Infinity;

        cards.forEach(function (card, index) {
          var distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - viewportCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        if (nearestIndex !== activeIndex) setActive(nearestIndex, false);
      }

      navButtons.forEach(function (button, index) {
        button.addEventListener("click", function () { setActive(index, true); });
      });

      cards.forEach(function (card, index) {
        card.addEventListener("mouseenter", function () { setActive(index, false); });
        card.addEventListener("focus", function () { setActive(index, false); });
        card.addEventListener("click", function () { setActive(index, true); });
      });

      if (viewport) {
        viewport.addEventListener("scroll", function () {
          if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateFromScroll);
        }, { passive: true });
      }

      setActive(0, false);

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
