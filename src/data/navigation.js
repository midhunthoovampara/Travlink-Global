export const primaryNavigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about/" },
  {
    id: "services",
    label: "Services",
    children: [
      { id: "travel", label: "Travel", href: "/travel/" },
      { id: "trade", label: "Trade", href: "/trade/" },
    ],
  },
  { id: "faq", label: "FAQ", href: "/faq/" },
  { id: "contact", label: "Contact Us", href: "/contact/" },
];

export const footerNavigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about/" },
  { id: "travel", label: "Travel", href: "/travel/" },
  { id: "trade", label: "Trade", href: "/trade/" },
  { id: "contact", label: "Contact", href: "/contact/" },
];

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/travlinkglobal?igsh=MTJsZXBidGRzZGVxYQ%3D%3D&utm_source=qr",
    icon: "fa-brands fa-instagram",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591932206679&mibextid=wwXIfr",
    icon: "fa-brands fa-facebook-f",
  },
  { id: "linkedin", label: "LinkedIn", href: "#", icon: "fa-brands fa-linkedin-in" },
  {
    id: "threads",
    label: "X",
    href: "https://www.threads.com/@travlinkglobal",
    icon: "fa-brands fa-x-twitter",
  },
];
