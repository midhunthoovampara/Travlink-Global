import "./globals.css";
import "@/styles/variables.css";
import "@/styles/components.css";
import "@/styles/animations.css";

export const metadata = {
  metadataBase: new URL("https://travlinkglobal.com"),
  title: {
    default: "Travlink Global",
    template: "%s | Travlink Global",
  },
  description:
    "International travel, visa assistance, trade sourcing, and shipping support from Travlink Global.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@600;700&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
