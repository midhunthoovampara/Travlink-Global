(function () {
    "use strict";

    function closeMobileMenu() {
        var menu = document.querySelector(".ca-offcanvas");
        var overlay = document.querySelector(".ca-offcanvas-overlay");
        if (menu) { menu.classList.remove("ca-offcanvas-open"); }
        if (overlay) { overlay.classList.remove("ca-offcanvas-overlay-open"); }
    }

    document.addEventListener("click", function (event) {
        var link = event.target.closest(".ca-offcanvas-menu-3 a");
        if (link && !link.getAttribute("href").startsWith("#")) {
            closeMobileMenu();
        }
    });
}());
