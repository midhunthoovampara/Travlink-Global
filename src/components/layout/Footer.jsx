/* eslint-disable @next/next/no-html-link-for-pages -- legacy pages require a document load so their route scripts initialize */
import Image from "@/components/common/Image";
import { footerNavigation, socialLinks } from "@/data/navigation";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="travlink-footer"><div className="container">
      <div className="travlink-footer__top">
        <div className="travlink-footer__brand">
          <a className="travlink-footer__logo" href="/" aria-label="Travlink Global home">
            <Image src="/img/logo/travlink-secondary.png" alt="Travlink Global" />
          </a>
          <p className="travlink-footer__description">Connecting people and businesses across borders through trusted travel and trade solutions.</p>
          <div className="travlink-footer__socials" aria-label="Social media links">{socialLinks.map((link) => <a key={link.id} href={link.href} target={link.href === "#" ? undefined : "_blank"} rel={link.href === "#" ? undefined : "noopener noreferrer"} aria-label={link.label}><i className={link.icon} /></a>)}</div>
        </div>
        <nav className="travlink-footer__column" aria-label="Footer quick links"><h2>Quick Links</h2><ul>{footerNavigation.map((link) => <li key={link.id}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
        <nav className="travlink-footer__column" aria-label="Footer services"><h2>Services</h2><ul><li><a href="/travel/">Travel</a></li><li><a href="/trade/">Trade</a></li></ul></nav>
        <div className="travlink-footer__column travlink-footer__contact"><h2>Contact &amp; Legal</h2><ul>
          <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" />WhatsApp</a></li>
          <li><a href={`mailto:${CONTACT_EMAIL}`}><i className="fa-regular fa-envelope" aria-hidden="true" />{CONTACT_EMAIL}</a></li>
        </ul></div>
      </div>
      <div className="travlink-footer__bottom"><p className="travlink-footer__copyright">&copy; 2026 Travlink Global. All rights reserved.</p><nav className="travlink-footer__legal" aria-label="Legal links"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></nav></div>
    </div></footer>
  );
}
