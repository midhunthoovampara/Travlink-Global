(function () {
    "use strict";

    function addMotionClass(element, className, delay) {
        if (!element || element.hasAttribute("data-aos") || element.classList.contains(className)) {
            return;
        }

        element.classList.add(className);
        element.style.setProperty("--travlink-motion-delay", delay + "ms");
    }

    function initialiseScrollMotion() {
        if (document.querySelector(".travlink-home")) {
            return;
        }

        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        var sections = document.querySelectorAll("main > section, main > div.ca-service-lft-area, main > div.ca-more-section");
        var itemSelector = [
            ".ca-sec-content-3",
            ".ca-portfolio-content-3",
            ".travlink-service-card",
            ".travlink-package-item",
            ".travlink-visa-card",
            ".travlink-trade-services__list article",
            ".travlink-process__step",
            ".travlink-feature-card",
            ".ca-accordion-item",
            ".ca-location-3",
            ".ca-team-box",
            ".travlink-footer__top > *"
        ].join(",");
        var items = document.querySelectorAll(itemSelector);
        var travelText = document.querySelectorAll([
            ".travlink-travel-selector__header > *",
            ".travlink-packages-editorial__intro > *",
            ".travlink-essential-showcase__intro > :is(span, h3, p)",
            ".travlink-luxury-showcase__intro > *",
            ".travlink-ocean-showcase__intro > *",
            ".travlink-adventure-showcase__content > :is(span, h3, p)",
            ".travlink-travel-feature--visa > .travlink-travel-feature__content > :is(span, h2)",
            ".travlink-country-showcase > h3",
            ".travlink-travel-contact > :is(span, h2)",
            ".travlink-travel-faq__heading > *"
        ].join(","));

        for (var index = 0; index < sections.length; index++) {
            addMotionClass(sections[index], "travlink-scroll-section", 0);
        }

        for (var itemIndex = 0; itemIndex < items.length; itemIndex++) {
            addMotionClass(items[itemIndex], "travlink-scroll-item", (itemIndex % 5) * 70);
        }

        for (var textIndex = 0; textIndex < travelText.length; textIndex++) {
            addMotionClass(travelText[textIndex], "travlink-text-reveal", (textIndex % 4) * 65);
        }

        if (!("IntersectionObserver" in window)) {
            document.querySelectorAll(".travlink-scroll-section, .travlink-scroll-item, .travlink-text-reveal").forEach(function (element) {
                element.classList.add("travlink-scroll-visible");
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries, activeObserver) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("travlink-scroll-visible");
                activeObserver.unobserve(entry.target);
            });
        }, {
            root: null,
            rootMargin: "0px 0px 12% 0px",
            threshold: 0.08
        });

        document.querySelectorAll(".travlink-scroll-section, .travlink-scroll-item, .travlink-text-reveal").forEach(function (element) {
            observer.observe(element);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialiseScrollMotion);
    } else {
        initialiseScrollMotion();
    }
}());
