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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
