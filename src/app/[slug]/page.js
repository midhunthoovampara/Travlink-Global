import { notFound } from "next/navigation";
import ContentPage from "@/views/ContentPage";
import { getPageMetadata } from "@/lib/content";
import { pageKeys } from "@/data/pages";

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
  return <ContentPage pageKey={slug} />;
}
