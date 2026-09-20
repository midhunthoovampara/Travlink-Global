"use client";

import { useEffect } from "react";

export default function PageContent({ mainMarkup, runtimeMarkup }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        once: true,
        disable: "mobile",
      });
      window.AOS.refreshHard();
    }
  }, [mainMarkup]);

  return (
    <div
      className="tl-page-content"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: `${mainMarkup}\n${runtimeMarkup}` }}
    />
  );
}
