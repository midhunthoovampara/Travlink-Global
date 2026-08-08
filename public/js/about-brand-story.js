(function () {
  "use strict";

  function initialiseBrandStory() {
    document.querySelectorAll(".travlink-brand-story").forEach(function (section) {
      var revealItems = Array.from(section.querySelectorAll("[data-story-reveal]"));

      if (!("IntersectionObserver" in window)) {
        section.classList.add("is-in-view");
        revealItems.forEach(function (item) { item.classList.add("is-visible"); });
        return;
      }

      var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            section.classList.add("is-in-view");
            sectionObserver.disconnect();
          }
        });
      }, { threshold: 0.12 });

      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -10%", threshold: 0.12 });

      sectionObserver.observe(section);
      revealItems.forEach(function (item, index) {
        item.style.transitionDelay = String(Math.min(index % 4, 3) * 90) + "ms";
        revealObserver.observe(item);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseBrandStory);
  } else {
    initialiseBrandStory();
  }
})();
