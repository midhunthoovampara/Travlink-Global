(function () {
  "use strict";

  function initialiseConnectNetwork() {
    document.querySelectorAll(".travlink-connect").forEach(function (section) {
      var cards = Array.from(section.querySelectorAll(".travlink-connect-card"));
      var cardGroup = section.querySelector(".travlink-connect__cards");
      var routes = Array.from(section.querySelectorAll("[data-connect-line]"));
      var nodes = Array.from(section.querySelectorAll("[data-connect-node]"));

      function activateConnection(name) {
        cards.forEach(function (card) {
          var active = card.dataset.connect === name;
          card.classList.toggle("is-active", active);
          card.setAttribute("aria-pressed", active ? "true" : "false");
        });
        routes.forEach(function (route) {
          route.classList.toggle("is-active", route.dataset.connectLine === name);
          route.classList.toggle("is-muted", route.dataset.connectLine !== name);
        });
        nodes.forEach(function (node) {
          node.classList.toggle("is-active", node.dataset.connectNode === name);
          node.classList.toggle("is-muted", node.dataset.connectNode !== name);
        });
        if (cardGroup) cardGroup.classList.add("has-active");
      }

      cards.forEach(function (card) {
        ["mouseenter", "focus", "click"].forEach(function (eventName) {
          card.addEventListener(eventName, function () {
            activateConnection(card.dataset.connect);
          });
        });
      });

      nodes.forEach(function (node) {
        node.style.cursor = "pointer";
        node.setAttribute("tabindex", "0");
        node.setAttribute("role", "button");
        ["mouseenter", "focus", "click"].forEach(function (eventName) {
          node.addEventListener(eventName, function () {
            activateConnection(node.dataset.connectNode);
          });
        });
        node.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activateConnection(node.dataset.connectNode);
          }
        });
      });

      if ("IntersectionObserver" in window) {
        var sectionObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              section.classList.add("is-in-view");
              sectionObserver.disconnect();
            }
          });
        }, { threshold: 0.18 });
        sectionObserver.observe(section);

        var mobileObserver = new IntersectionObserver(function (entries) {
          if (!window.matchMedia("(max-width: 767px)").matches) return;
          entries
            .filter(function (entry) { return entry.isIntersecting; })
            .sort(function (first, second) { return second.intersectionRatio - first.intersectionRatio; })
            .slice(0, 1)
            .forEach(function (entry) { activateConnection(entry.target.dataset.connect); });
        }, { rootMargin: "-28% 0px -34%", threshold: [0.35, 0.65] });
        cards.forEach(function (card) { mobileObserver.observe(card); });
      } else {
        section.classList.add("is-in-view");
      }

      if (cards.length) activateConnection(cards[0].dataset.connect);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseConnectNetwork);
  } else {
    initialiseConnectNetwork();
  }
})();
