"use client";
import { useState, useEffect } from "react";
import IntroScreen from "./IntroScreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Avoid SSR flash */
  if (!mounted) return null;

  return (
    <>
      {showIntro && <IntroScreen onEnter={() => setShowIntro(false)} />}
      <div style={{
        transition: "opacity .5s ease",
        opacity: showIntro ? 0 : 1,
        pointerEvents: showIntro ? "none" : "auto",
      }}>
        {children}
      </div>
    </>
  );
}

