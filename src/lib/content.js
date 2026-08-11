import fs from "node:fs";
import path from "node:path";
import { defaultDescription, pageRegistry } from "@/data/pages";

const contentDirectory = path.join(process.cwd(), "content");
const markupDirectory = path.join(contentDirectory, "markup");

function between(markup, startToken, endToken) {
  const start = markup.indexOf(startToken);
  const end = markup.indexOf(endToken, start);
  if (start < 0 || end < 0) throw new Error(`Unable to find ${startToken} in page markup.`);
  return markup.slice(start, end + endToken.length);
}

function getRuntimeMarkup(markup) {
  const footerEnd = markup.lastIndexOf("</footer>");
  if (footerEnd < 0) return "";

  return markup
    .slice(footerEnd + "</footer>".length)
    .replace(/<button id="topBtn3"[\s\S]*?<\/button>/i, "")
    .replace(/<a\s+class="travlink-whatsapp-float"[\s\S]*?<\/a>/i, "");
}

function getSharedNavigationStyles() {
  const source = fs.readFileSync(path.join(markupDirectory, "shared-header.html"), "utf8");
  return [...source.matchAll(/<style[\s\S]*?<\/style>/gi)].map(([style]) => style).join("\n");
}

function parseAssets(markup) {
  const stylesheets = [...markup.matchAll(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)]
    .map(([, href]) => href)
    .filter((href, index, items) => items.indexOf(href) === index);
  const inlineStyles = [...markup.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)]
    .map(([, css]) => css);

  return { stylesheets, inlineStyles };
}

export function getPageContent(key) {
  const definition = pageRegistry[key];
  if (!definition) throw new Error(`Unknown page: ${key}`);

  const jsonPath = path.join(contentDirectory, `${key}.json`);
  const headPath = path.join(markupDirectory, `${key}.head.html`);
  const bodyPath = path.join(markupDirectory, `${key}.html`);
  const metadata = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const bodyMarkup = fs.readFileSync(bodyPath, "utf8");
  const assets = parseAssets(`${fs.readFileSync(headPath, "utf8")}\n${getSharedNavigationStyles()}`);

  return {
    key,
    title: metadata.title || definition.title,
    description: metadata.description || defaultDescription,
    bodyClass: metadata.bodyClass || definition.bodyClass,
    ...assets,
    mainMarkup: between(bodyMarkup, "<main", "</main>"),
    runtimeMarkup: getRuntimeMarkup(bodyMarkup),
  };
}

export function getPageMetadata(key) {
  const page = getPageContent(key);
  return { title: page.title === "Travlink-Global" ? "Home" : page.title, description: page.description };
}
