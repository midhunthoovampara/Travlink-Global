import LegacyPage, {
  getLegacyPage,
  getPageMetadata,
} from "@/components/LegacyPage";

export const metadata = getPageMetadata("home");

export default function HomePage() {
  return <LegacyPage page={getLegacyPage("home")} />;
}
