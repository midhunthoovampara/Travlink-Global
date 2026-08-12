(function () {
  "use strict";

  function initialiseEssentialShowcases() {
    document.querySelectorAll("[data-essential-showcase]").forEach(function (showcase) {
      if (showcase.dataset.essentialShowcaseReady === "true") return;
      showcase.dataset.essentialShowcaseReady = "true";

      var cards = Array.from(showcase.querySelectorAll("[data-essential-card]"));
      var navButtons = Array.from(showcase.querySelectorAll("[data-essential-nav]"));
      var viewport = showcase.querySelector("[data-essential-viewport]");
      var progress = showcase.querySelector("[data-essential-progress]");
      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      var canHover = window.matchMedia("(hover: hover) and (min-width: 768px)");
      var activeIndex = 0;
      var scrollFrame = 0;

      if (!cards.length || !viewport) return;

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

        if (progress) {
          progress.textContent = String(nextIndex + 1).padStart(2, "0") + " / " + String(cards.length).padStart(2, "0");
        }

        if (shouldScroll) {
          var card = cards[nextIndex];
          var targetLeft = card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2;

          viewport.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: reducedMotion.matches ? "auto" : "smooth"
          });
        }
      }

      function updateFromScroll() {
        scrollFrame = 0;
        var viewportRect = viewport.getBoundingClientRect();
        var viewportCenter = viewportRect.left + viewportRect.width / 2;
        var nearestIndex = activeIndex;
        var nearestDistance = Infinity;

        cards.forEach(function (card, index) {
          var cardRect = card.getBoundingClientRect();
          var distance = Math.abs(cardRect.left + cardRect.width / 2 - viewportCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        if (nearestIndex !== activeIndex) setActive(nearestIndex, false);
      }

      navButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
          setActive(index, true);
        });
      });

      cards.forEach(function (card, index) {
        card.addEventListener("mouseenter", function () {
          if (canHover.matches) setActive(index, false);
        });
        card.addEventListener("focus", function () {
          setActive(index, false);
        });
        card.addEventListener("click", function () {
          setActive(index, true);
        });
        card.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setActive(index, true);
          }
        });
      });

      viewport.addEventListener("scroll", function () {
        if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateFromScroll);
      }, { passive: true });

      setActive(0, false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseEssentialShowcases, { once: true });
  } else {
    initialiseEssentialShowcases();
  }
})();
