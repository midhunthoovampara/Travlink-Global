import fs from "node:fs";
import path from "node:path";

const contentDirectory = path.join(process.cwd(), "content");
const markupDirectory = path.join(contentDirectory, "markup");

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
  const headPath = path.join(markupDirectory, `${key}.head.html`);
  const bodyPath = path.join(markupDirectory, `${key}.html`);

  if (
    !fs.existsSync(filePath) ||
    !fs.existsSync(headPath) ||
    !fs.existsSync(bodyPath)
  ) {
    throw new Error(`Missing content files for page "${key}".`);
  }

  return {
    ...JSON.parse(fs.readFileSync(filePath, "utf8")),
    headMarkup: fs.readFileSync(headPath, "utf8"),
    bodyMarkup: fs.readFileSync(bodyPath, "utf8"),
  };
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
      data-content-version={process.env.TRAVLINK_CONTENT_VERSION}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `${page.headMarkup}\n${page.bodyMarkup}`,
      }}
    />
  );
}
