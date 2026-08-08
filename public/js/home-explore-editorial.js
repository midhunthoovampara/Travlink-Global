(function () {
  "use strict";

  function initExploreSection() {
    var section = document.querySelector(".travlink-explore");
    if (!section || section.dataset.exploreReady === "true") return;

    section.dataset.exploreReady = "true";

    var feature = section.querySelector(".travlink-explore__feature");
    var slides = Array.from(section.querySelectorAll("[data-explore-slide]"));
    var dots = Array.from(section.querySelectorAll("[data-explore-dot]"));
    var revealItems = Array.from(section.querySelectorAll(".travlink-explore__reveal"));
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var activeIndex = 0;
    var rotationTimer = 0;

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
        slide.tabIndex = isActive ? 0 : -1;
      });

      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", String(isActive));
      });
    }

    function stopRotation() {
      if (!rotationTimer) return;
      window.clearInterval(rotationTimer);
      rotationTimer = 0;
    }

    function startRotation() {
      stopRotation();
      if (reducedMotion.matches || document.hidden) return;
      rotationTimer = window.setInterval(function () {
        showSlide(activeIndex + 1);
      }, 5200);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        showSlide(index);
        startRotation();
      });
    });

    if (feature) {
      feature.addEventListener("pointerenter", stopRotation);
      feature.addEventListener("pointerleave", startRotation);
      feature.addEventListener("focusin", stopRotation);
      feature.addEventListener("focusout", startRotation);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopRotation();
      else startRotation();
    });

    revealItems.forEach(function (item, index) {
      item.style.setProperty("--explore-delay", Math.min(index, 4) * 90 + "ms");
    });

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    } else {
      section.classList.add("travlink-explore--motion-ready");
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

      revealItems.forEach(function (item) {
        observer.observe(item);
      });
    }

    showSlide(0);
    startRotation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExploreSection, { once: true });
  } else {
    initExploreSection();
  }
}());
