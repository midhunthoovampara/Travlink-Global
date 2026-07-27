import fs from "node:fs";
import path from "node:path";

const contentDirectory = path.join(process.cwd(), "content");

export const pageKeys = [
  "about",
  "travel",
  "trade",
  "shipping",
  "faq",
  "contact",
  "team",
  "testimonial",
  "services",
];

export function getLegacyPage(key) {
  const filePath = path.join(contentDirectory, `${key}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Missing migrated page "${key}". Run npm run migrate:content first.`,
    );
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function getPageMetadata(key) {
  const page = getLegacyPage(key);

  return {
    title: page.title === "Travlink-Global" ? "Home" : page.title,
    description: page.description,
  };
}

export default function LegacyPage({ page }) {
  return (
    <div
      className={`travlink-react-page ${page.bodyClass || ""}`.trim()}
      data-react-migrated-page={page.key}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `${page.headMarkup}\n${page.bodyMarkup}`,
      }}
    />
  );
}
