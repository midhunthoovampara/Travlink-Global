import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="travlink-not-found">
      <p>404</p>
      <h1>Page not found</h1>
      <Link href="/">Return to Travlink Global</Link>
    </main>
  );
}
