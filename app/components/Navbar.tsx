"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV = [
  { label: "Home",       href: "#home" },
  { label: "Overview",   href: "#problem" },
  { label: "Components", href: "#components" },
  { label: "Domain",     href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Results",    href: "#results" },
  { label: "Demo",       href: "#demo" },
  { label: "Documents",  href: "#documents" },
  { label: "About Us",   href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all .3s ease",
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #f0f0f0" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink: 0 }}>
            <Image
              src="/images/navlog.png"
              alt="CementAI logo"
              width={120}
              height={44}
              style={{ width:"auto", height:44, objectFit:"contain", display:"block" }}
              priority
            />
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: 0,
              flexWrap: "nowrap",
              overflow: "hidden",
            }}
            className="md:flex"
          >
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                style={{
                  padding: "7px 10px",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#444",
                  borderRadius: 8,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color .2s, background .2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#DB1A1A";
                  (e.currentTarget as HTMLElement).style.background = "#fef2f2";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#444";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a href="#results" className="btn-red" style={{ display: "none", padding: "9px 18px", fontSize: ".8rem", whiteSpace: "nowrap", flexShrink: 0 }} id="nav-cta">
            View Research
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: 36, height: 36,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              borderRadius: 8,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Menu"
          >
            <span
              style={{
                width: 20, height: 2,
                background: "#111",
                borderRadius: 2,
                display: "block",
                transition: "all .3s",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                width: 20, height: 2,
                background: "#111",
                borderRadius: 2,
                display: "block",
                transition: "all .3s",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 20, height: 2,
                background: "#111",
                borderRadius: 2,
                display: "block",
                transition: "all .3s",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Desktop CTA — shown via CSS ── */}
      <style>{`
        @media (min-width: 768px) {
          #nav-cta { display: inline-flex !important; }
          .md\\:flex { display: flex !important; }
        }
      `}</style>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.2)",
            backdropFilter: "blur(4px)",
            transition: "opacity .3s",
            opacity: open ? 1 : 0,
          }}
        />
        {/* Drawer */}
        <div
          style={{
            position: "absolute",
            top: 0, right: 0, bottom: 0,
            width: 280,
            background: "#fff",
            boxShadow: "-4px 0 40px rgba(0,0,0,.12)",
            transition: "transform .3s cubic-bezier(.16,1,.3,1)",
            transform: open ? "translateX(0)" : "translateX(100%)",
            padding: "80px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                borderRadius: 12,
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#444",
                textDecoration: "none",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#DB1A1A";
                el.style.background = "#fef2f2";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#444";
                el.style.background = "transparent";
              }}
            >
              <span
                style={{
                  width: 6, height: 6,
                  borderRadius: "50%",
                  background: "#DB1A1A",
                  flexShrink: 0,
                }}
              />
              {n.label}
            </a>
          ))}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f0f0f0" }}>
            <a
              href="#results"
              onClick={() => setOpen(false)}
              className="btn-red"
              style={{ width: "100%", justifyContent: "center" }}
            >
              View Research
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

