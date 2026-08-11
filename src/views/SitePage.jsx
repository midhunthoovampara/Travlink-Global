import PageShell from "@/components/layout/PageShell";
import { getPageContent } from "@/lib/content";

export default function SitePage({ pageKey }) {
  return <PageShell page={getPageContent(pageKey)} />;
}
