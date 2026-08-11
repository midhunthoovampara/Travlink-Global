"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- legacy pages require a document load so their route scripts initialize */

import { useEffect, useState } from "react";
import { primaryNavigation } from "@/data/navigation";
import Image from "@/components/common/Image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 0);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <header className={`header-area-3 stiky travlink-shared-nav ${isScrolled ? "scroll-header" : ""}`}>
        <div className="container fluid-header-3"><div className="row align-items-center">
          <div className="col-xl-3 col-lg col-md-6 col-6"><div className="ca-logo">
            <a className="travlink-site-logo" href="/" aria-label="Travlink Global home">
              <Image className="travlink-site-logo__image travlink-site-logo__image--primary" src="/img/logo/travlink-primary.png" alt="Travlink Global" />
              <Image className="travlink-site-logo__image travlink-site-logo__image--secondary" src="/img/logo/travlink-secondary.png" alt="" aria-hidden="true" />
            </a>
          </div></div>
          <div className="col-xl-6 col-lg-7 d-none d-lg-block"><div className="ca-main-menu-3">
            <nav aria-label="Primary navigation"><ul>
              {primaryNavigation.map((item) => <li key={item.id}>
                <a href={item.href || "#"}>{item.label}{item.children ? <span><i className="fa-solid fa-angle-down" /></span> : <span />}</a>
                {item.children ? <ul className="sub-menu">{item.children.map((child) => <li key={child.id}><a href={child.href}>{child.label}</a></li>)}</ul> : null}
              </li>)}
            </ul></nav>
          </div></div>
          <div className="col-xl-3 col-lg col-md-6 col-6"><div className="ca-header-action-item d-lg-none text-end">
            <button type="button" className="ca-offcanvas-toogle" aria-label="Open navigation menu" onClick={() => setIsOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" aria-hidden="true"><rect x="10" width="20" height="2" fill="currentColor" /><rect x="5" y="7" width="25" height="2" fill="currentColor" /><rect x="10" y="14" width="20" height="2" fill="currentColor" /></svg>
            </button>
          </div></div>
        </div></div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
