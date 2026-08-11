"use client";

import { useEffect } from "react";

export default function useAutoScroll(callback, delay = 4000, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    const interval = window.setInterval(callback, delay);
    return () => window.clearInterval(interval);
  }, [callback, delay, enabled]);
}
