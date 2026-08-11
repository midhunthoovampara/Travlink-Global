(function () {
  "use strict";

  function initialiseCountryEditorial() {
    var showcase = document.querySelector(".travlink-country-showcase");
    if (!showcase || showcase.dataset.countryEditorialReady === "true") return;

    showcase.dataset.countryEditorialReady = "true";
    var tiles = Array.from(showcase.querySelectorAll("[data-country-tile]"));
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    tiles.forEach(function (tile, index) {
      tile.style.setProperty("--country-delay", String((index % 5) * 65) + "ms");
    });

    showcase.classList.add("is-enhanced");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      tiles.forEach(function (tile) { tile.classList.add("is-visible"); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

      tiles.forEach(function (tile) { revealObserver.observe(tile); });
    }

    var indexLinks = Array.from(showcase.querySelectorAll(".travlink-country-index a"));
    var sections = indexLinks.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    }).filter(Boolean);

    function setActiveSection(id) {
      indexLinks.forEach(function (link) {
        var active = link.getAttribute("href") === "#" + id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    if ("IntersectionObserver" in window && sections.length) {
      var sectionObserver = new IntersectionObserver(function (entries) {
        var visible = entries.filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible.length) setActiveSection(visible[0].target.id);
      }, { rootMargin: "-24% 0px -58%", threshold: [0, 0.25, 0.75] });

      sections.forEach(function (section) { sectionObserver.observe(section); });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseCountryEditorial, { once: true });
  } else {
    initialiseCountryEditorial();
  }
})();
