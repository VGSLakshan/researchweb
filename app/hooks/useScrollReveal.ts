"use client";
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-l, .reveal-r");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
