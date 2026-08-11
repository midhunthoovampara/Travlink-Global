export const pageRegistry = {
  home: { title: "Home", bodyClass: "travlink-home" },
  about: { title: "About", bodyClass: "travlink-about-page-body" },
  travel: { title: "Travel", bodyClass: "travlink-travel-page-body" },
  trade: { title: "Trade", bodyClass: "travlink-trade-page-body" },
  shipping: { title: "Shipping", bodyClass: "travlink-shipping-page-body" },
  faq: { title: "FAQ", bodyClass: "travlink-faq-page-body" },
  contact: { title: "Contact", bodyClass: "travlink-contact-page-body" },
  team: { title: "Team", bodyClass: "travlink-team-page-body" },
  testimonial: { title: "Testimonials", bodyClass: "travlink-testimonial-page-body" },
  services: { title: "Services", bodyClass: "travlink-services-page-body" },
};

export const pageKeys = Object.keys(pageRegistry).filter((key) => key !== "home");

export const defaultDescription =
  "Travel, visa assistance, supplier sourcing, trade, and shipping support from Travlink Global.";
