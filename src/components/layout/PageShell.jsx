import Footer from "./Footer";
import Header from "./Header";
import PageAssets from "./PageAssets";
import PageContent from "./PageContent";
import ScrollTopButton from "./ScrollTopButton";
import WhatsAppButton from "./WhatsAppButton";

export default function PageShell({ page }) {
  return (
    <div className={`travlink-react-page ${page.bodyClass || ""}`.trim()} data-react-page={page.key} suppressHydrationWarning>
      <PageAssets pageKey={page.key} stylesheets={page.stylesheets} inlineStyles={page.inlineStyles} />
      <Header />
      <PageContent mainMarkup={page.mainMarkup} runtimeMarkup={page.runtimeMarkup} />
      <Footer />
      <ScrollTopButton />
      <WhatsAppButton />
    </div>
  );
}
