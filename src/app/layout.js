import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://travlinkglobal.com"),
  title: {
    default: "Travlink Global",
    template: "%s | Travlink Global",
  },
  description:
    "International travel, visa assistance, trade sourcing, and shipping support from Travlink Global.",
  icons: {
    icon: "/img/icon/ca-fav-3.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
