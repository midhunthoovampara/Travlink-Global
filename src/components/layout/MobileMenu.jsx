/* eslint-disable @next/next/no-html-link-for-pages -- legacy pages require a document load so their route scripts initialize */
import Image from "@/components/common/Image";
import { primaryNavigation, socialLinks } from "@/data/navigation";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/utils/constants";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div className={`ca-offcanvas w-bg ${isOpen ? "ca-offcanvas-open" : ""}`} aria-hidden={!isOpen}>
        <div className="ca-offcanvas-wrapper">
          <div className="ca-offcanvas-header d-flex justify-content-between align-items-center mb-40">
            <div className="ca-offcanvas-logo">
              <a className="travlink-offcanvas-logo" href="/" aria-label="Travlink Global home">
                <Image src="/img/logo/travlink-secondary-2026.png" alt="Travlink Global" />
              </a>
            </div>
            <div className="ca-offcanvas-close">
              <button className="ca-offcanvas-close-toggle" type="button" aria-label="Close navigation menu" onClick={onClose}>
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
          <div className="ca-offcanvas-menu-3 mb-40">
            <nav aria-label="Mobile navigation">
              <ul>
                {primaryNavigation.flatMap((item) => item.children || [item]).map((item) => (
                  <li key={item.id}><a href={item.href} onClick={onClose}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="ca-offcanvas-contact mb-40">
            <a href="/contact/" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Get A Quote <span><i className="fa-solid fa-angle-right" /></span></a>
          </div>
          <div className="ca-offcanvas-contact-info mb-40">
            <h3 className="ca-offcanvas-sm-title">Contact Info</h3>
            <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
              <div className="icon"><span><i className="fa-solid fa-envelope" /></span></div>
              <div className="ca-sm-single-item-4-content"><p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p></div>
            </div>
            <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
              <div className="icon"><span><i className="fa-brands fa-whatsapp" /></span></div>
              <div className="ca-sm-single-item-4-content"><p><a href={WHATSAPP_URL}>+{WHATSAPP_NUMBER.slice(0, 2)} {WHATSAPP_NUMBER.slice(2, 7)} {WHATSAPP_NUMBER.slice(7)}</a></p></div>
            </div>
          </div>
          <div className="ca-offcanvas-social mb-40">
            <h3 className="ca-offcanvas-sm-title">Follow Us</h3>
            <div className="ca-footer-social ca-footer-social-3"><ul>
              {socialLinks.map((link) => <li key={link.id}><a href={link.href} target={link.href === "#" ? undefined : "_blank"} rel={link.href === "#" ? undefined : "noopener noreferrer"} aria-label={link.label}><i className={link.icon} /></a></li>)}
            </ul></div>
          </div>
        </div>
      </div>
      <button type="button" aria-label="Close navigation menu" className={`ca-offcanvas-overlay ${isOpen ? "ca-offcanvas-overlay-open" : ""}`} onClick={onClose} />
    </>
  );
}
