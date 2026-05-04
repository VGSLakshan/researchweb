"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  /* ── Stagger mount animations ── */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - .5) * .4,
        vy: (Math.random() - .5) * .4,
        r: Math.random() * 2 + .5,
        a: Math.random() * .3 + .06,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(219,26,26,${.06 * (1 - d / 120)})`;
            ctx.lineWidth = .5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(219,26,26,${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 700);
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        transition: "opacity .7s ease, transform .7s ease",
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.03)" : "scale(1)",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .6 }}
      />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, #d4d4d4 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: .4,
      }} />

      {/* Animated blobs — percentage-based to prevent overflow */}
      <div style={{
        position: "absolute", top: "15%", left: "10%",
        width: "min(400px,60vw)", height: "min(400px,60vw)", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(219,26,26,.07) 0%, transparent 70%)",
        filter: "blur(60px)",
        animation: "blobFloat1 8s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "8%",
        width: "min(340px,55vw)", height: "min(340px,55vw)", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(219,26,26,.06) 0%, transparent 70%)",
        filter: "blur(50px)",
        animation: "blobFloat2 10s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", right: "20%",
        width: "min(240px,40vw)", height: "min(240px,40vw)", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(219,26,26,.04) 0%, transparent 70%)",
        filter: "blur(40px)",
        animation: "blobFloat1 12s ease-in-out infinite reverse",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
        padding: "0 20px", width: "100%", maxWidth: 580,
      }}>

        {/* Logo — fades + scales in */}
        <div style={{
          marginBottom: 32,
          transition: "opacity .8s ease, transform .8s cubic-bezier(.16,1,.3,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(.85)",
        }}>
          {/* Glow ring behind logo */}
          <div style={{
            position: "relative", display: "inline-block",
          }}>
            <div style={{
              position: "absolute", inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(219,26,26,.12) 0%, transparent 70%)",
              filter: "blur(20px)",
              animation: "pulseGlow 3s ease-in-out infinite",
            }} />
            <Image
              src="/images/navlog.png"
              alt="INSEE CementAI"
              width={200}
              height={80}
              priority
              style={{ width: "auto", height: 72, objectFit: "contain", position: "relative" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: 60, height: 3,
          background: "linear-gradient(90deg, #DB1A1A, #ff6b6b)",
          borderRadius: 2, marginBottom: 28,
          transition: "opacity .8s ease .2s, transform .8s ease .2s",
          opacity: visible ? 1 : 0,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
        }} />

        {/* Heading — slides up */}
        <h1 style={{
          fontSize: "clamp(1.5rem, 5vw, 2.6rem)",
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: "-.02em",
          color: "#111", marginBottom: 16,
          transition: "opacity .8s ease .25s, transform .8s cubic-bezier(.16,1,.3,1) .25s",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}>
          Welcome to{" "}
          <span style={{
            background: "linear-gradient(135deg, #DB1A1A, #ff5c5c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            INSEE CementAI
          </span>
        </h1>

        {/* Subtitle — fades in */}
        <p style={{
          fontSize: "clamp(.9rem, 2vw, 1.05rem)",
          color: "#555", lineHeight: 1.7,
          maxWidth: 500, marginBottom: 44,
          transition: "opacity .8s ease .4s, transform .8s ease .4s",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
        }}>
          An Integrated AI &amp; IoT-Based Framework for Automated Cement Quality Assessment
        </p>

        {/* Project badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "#fef2f2", border: "1px solid rgba(219,26,26,.18)",
          borderRadius: 100, padding: "6px 16px", marginBottom: 36,
          transition: "opacity .8s ease .5s",
          opacity: visible ? 1 : 0,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#DB1A1A", display: "inline-block",
            animation: "pulseRing 2.4s ease-out infinite",
          }} />
          <span style={{
            fontSize: ".68rem", fontWeight: 700,
            letterSpacing: ".16em", textTransform: "uppercase", color: "#DB1A1A",
          }}>
            Project 25-26J-250 · SLIIT 2025–26
          </span>
        </div>

        {/* Enter button — bounces in */}
        <button
          onClick={handleEnter}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "15px 36px",
            background: "linear-gradient(135deg, #DB1A1A, #ff4d4d)",
            color: "white", fontSize: "1rem", fontWeight: 700,
            borderRadius: 100, border: "none", cursor: "pointer",
            boxShadow: "0 8px 32px rgba(219,26,26,.35)",
            transition: "opacity .8s ease .6s, transform .8s cubic-bezier(.34,1.56,.64,1) .6s",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) translateY(0)" : "scale(.8) translateY(20px)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05) translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 40px rgba(219,26,26,.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1) translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(219,26,26,.35)";
          }}
        >
          Enter INSEE
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Scroll hint */}
        <p style={{
          marginTop: 20, fontSize: ".72rem", color: "#bbb",
          transition: "opacity .8s ease .8s",
          opacity: visible ? 1 : 0,
        }}>
          SLIIT Final Year Research · INSEE Cement (Pvt) Ltd, Sri Lanka
        </p>
      </div>

      <style>{`
        @keyframes blobFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.05); }
          66%      { transform: translate(-20px,15px) scale(.97); }
        }
        @keyframes blobFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-25px,20px) scale(1.04); }
          70%      { transform: translate(20px,-15px) scale(.98); }
        }
        @keyframes pulseGlow {
          0%,100% { opacity:.6; transform:scale(1); }
          50%      { opacity:1;  transform:scale(1.08); }
        }
        @keyframes pulseRing {
          0%   { box-shadow:0 0 0 0 rgba(219,26,26,.4); }
          70%  { box-shadow:0 0 0 8px rgba(219,26,26,0); }
          100% { box-shadow:0 0 0 0 rgba(219,26,26,0); }
        }
      `}</style>
    </div>
  );
}

