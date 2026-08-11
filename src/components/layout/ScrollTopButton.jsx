"use client";

export default function ScrollTopButton() {
  return <button id="topBtn3" type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa-solid fa-arrow-up" /></button>;
}
