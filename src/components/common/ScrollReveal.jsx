"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function ScrollReveal({ as: Element = "div", children, className = "", ...props }) {
  const { ref, isVisible } = useIntersectionObserver();
  return <Element ref={ref} className={`tl-reveal-up ${isVisible ? "is-visible" : ""} ${className}`.trim()} {...props}>{children}</Element>;
}
