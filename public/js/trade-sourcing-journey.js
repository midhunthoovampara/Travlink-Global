(function () {
  "use strict";

  function initialiseTradeJourneys() {
    document.querySelectorAll(".travlink-trade-journey__canvas").forEach(function (journey) {
      var steps = Array.from(journey.querySelectorAll(".travlink-trade-step"));

      function activateStep(selectedStep) {
        var selectedIndex = steps.indexOf(selectedStep);
        journey.style.setProperty("--route-progress", selectedStep.dataset.progress);

        steps.forEach(function (step, index) {
          var isSelected = step === selectedStep;
          step.classList.toggle("is-active", isSelected);
          step.classList.toggle("is-complete", index < selectedIndex);
          step.setAttribute("aria-pressed", isSelected ? "true" : "false");
        });
      }

      steps.forEach(function (step) {
        step.addEventListener("mouseenter", function () { activateStep(step); });
        step.addEventListener("focus", function () { activateStep(step); });
        step.addEventListener("click", function () { activateStep(step); });
      });

      if ("IntersectionObserver" in window) {
        var mobileStepObserver = new IntersectionObserver(function (entries) {
          if (!window.matchMedia("(max-width: 767px)").matches) {
            return;
          }

          entries
            .filter(function (entry) { return entry.isIntersecting; })
            .sort(function (first, second) { return second.intersectionRatio - first.intersectionRatio; })
            .slice(0, 1)
            .forEach(function (entry) { activateStep(entry.target); });
        }, {
          root: null,
          rootMargin: "-30% 0px -35%",
          threshold: [0.35, 0.6, 0.85]
        });

        steps.forEach(function (step) { mobileStepObserver.observe(step); });
      }

      if (steps.length) {
        activateStep(steps[0]);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseTradeJourneys);
  } else {
    initialiseTradeJourneys();
  }
})();
