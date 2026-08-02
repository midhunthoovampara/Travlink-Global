(function () {
  "use strict";

  function initialiseCenteredCountryCards() {
    var carousels = document.querySelectorAll(".travlink-country-carousel");

    carousels.forEach(function (carousel) {
      var cards = Array.from(carousel.querySelectorAll(".travlink-country-card"));
      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      var activeCard = null;
      var animationFrame = 0;
      var isVisible = false;

      function updateCenteredCard() {
        var carouselRect = carousel.getBoundingClientRect();
        var carouselCenter = carouselRect.left + carouselRect.width / 2;
        var closestCard = null;
        var closestDistance = Infinity;

        cards.forEach(function (card) {
          var cardRect = card.getBoundingClientRect();
          var cardCenter = cardRect.left + cardRect.width / 2;
          var distance = Math.abs(carouselCenter - cardCenter);

          if (cardRect.right > carouselRect.left && cardRect.left < carouselRect.right && distance < closestDistance) {
            closestCard = card;
            closestDistance = distance;
          }
        });

        if (closestCard !== activeCard) {
          if (activeCard) {
            activeCard.classList.remove("is-centered");
          }

          activeCard = closestCard;

          if (activeCard) {
            activeCard.classList.add("is-centered");
          }
        }
      }

      function animate() {
        updateCenteredCard();

        if (isVisible && !reducedMotion.matches) {
          animationFrame = window.requestAnimationFrame(animate);
        }
      }

      function startAnimation() {
        isVisible = true;
        window.cancelAnimationFrame(animationFrame);
        animate();
      }

      function stopAnimation() {
        isVisible = false;
        window.cancelAnimationFrame(animationFrame);
      }

      if ("IntersectionObserver" in window) {
        var visibilityObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              startAnimation();
            } else {
              stopAnimation();
            }
          });
        }, { threshold: 0.05 });

        visibilityObserver.observe(carousel);
      } else {
        startAnimation();
      }

      carousel.addEventListener("scroll", updateCenteredCard, { passive: true });
      window.addEventListener("resize", updateCenteredCard, { passive: true });
      reducedMotion.addEventListener("change", function () {
        if (isVisible) {
          startAnimation();
        }
      });

      updateCenteredCard();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseCenteredCountryCards);
  } else {
    initialiseCenteredCountryCards();
  }
})();
