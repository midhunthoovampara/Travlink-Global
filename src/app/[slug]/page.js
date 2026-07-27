import { notFound } from "next/navigation";
import LegacyPage, {
  getLegacyPage,
  getPageMetadata,
  pageKeys,
} from "@/components/LegacyPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return pageKeys.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!pageKeys.includes(slug)) return {};
  return getPageMetadata(slug);
}

export default async function StaticContentPage({ params }) {
  const { slug } = await params;
  if (!pageKeys.includes(slug)) notFound();
  return <LegacyPage page={getLegacyPage(slug)} />;
}
