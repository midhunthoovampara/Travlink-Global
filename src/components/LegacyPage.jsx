import fs from "node:fs";
import path from "node:path";

const contentDirectory = path.join(process.cwd(), "content");
const markupDirectory = path.join(contentDirectory, "markup");
const sharedHeaderPath = path.join(markupDirectory, "shared-header.html");
const sharedFooterPath = path.join(markupDirectory, "shared-footer.html");

function replaceMarkedSection(markup, startMarker, endMarker, replacement) {
  const startIndex = markup.indexOf(startMarker);
  const endIndex = markup.indexOf(endMarker, startIndex);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Missing shared markup boundary: ${startMarker}`);
  }

  return `${markup.slice(0, startIndex)}${replacement.trim()}${markup.slice(
    endIndex + endMarker.length,
  )}`;
}

function applySharedChrome(markup) {
  const sharedHeader = fs.readFileSync(sharedHeaderPath, "utf8");
  const sharedFooter = fs.readFileSync(sharedFooterPath, "utf8");

  const withSharedHeader = replaceMarkedSection(
    markup,
    "<!-- Header Area Start-->",
    "<!-- offcanvas end -->",
    sharedHeader,
  );

  return replaceMarkedSection(
    withSharedHeader,
    '<footer class="travlink-footer">',
    "</footer>",
    sharedFooter,
  );
}

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
    !fs.existsSync(bodyPath) ||
    !fs.existsSync(sharedHeaderPath) ||
    !fs.existsSync(sharedFooterPath)
  ) {
    throw new Error(`Missing content files for page "${key}".`);
  }

  return {
    ...JSON.parse(fs.readFileSync(filePath, "utf8")),
    headMarkup: fs.readFileSync(headPath, "utf8"),
    bodyMarkup: applySharedChrome(fs.readFileSync(bodyPath, "utf8")),
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
