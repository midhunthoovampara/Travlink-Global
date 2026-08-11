import Home from "@/views/Home";
import { getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("home");

export default function HomePage() {
  return <Home />;
}
