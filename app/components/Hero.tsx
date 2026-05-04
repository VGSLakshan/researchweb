"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STATS = [
  { val: "88",   suf: "%",  label: "Particle mAP@0.5" },
  { val: "91.6", suf: "%",  label: "Phase Accuracy" },
  { val: "0.89", suf: "",   label: "Strength R²" },
  { val: "90",   suf: "%",  label: "Crack Detection" },
];

function Counter({ val, suf }: { val: string; suf: string }) {
  const [n, setN] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const target = parseFloat(val);
      const dec = val.includes(".");
      const steps = 55; let i = 0;
      const t = setInterval(() => {
        i++;
        const p = 1 - Math.pow(1 - i / steps, 3);
        setN(dec ? (target * p).toFixed(2) : String(Math.floor(target * p)));
        if (i >= steps) { setN(val); clearInterval(t); }
      }, 1600 / steps);
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [val]);
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{n}{suf}</span>;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 60; i++) pts.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.8 + .5, a: Math.random() * .3 + .06,
    });
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) { ctx.beginPath(); ctx.strokeStyle = `rgba(219,26,26,${.06*(1-d/100)})`; ctx.lineWidth = .5; ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(219,26,26,${p.a})`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: .45 }} />
      <div className="dot-grid absolute inset-0 pointer-events-none" style={{ opacity: .3 }} />

      {/* Blobs — percentage-based so they never overflow */}
      <div className="absolute pointer-events-none" style={{ top:"15%", right:"5%", width:"min(400px,60vw)", height:"min(400px,60vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(219,26,26,.07) 0%,transparent 70%)", filter:"blur(50px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"15%", left:"5%", width:"min(280px,50vw)", height:"min(280px,50vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(219,26,26,.05) 0%,transparent 70%)", filter:"blur(40px)" }} />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6" style={{ paddingTop:"5rem", paddingBottom:"4rem", zIndex:10 }}>
        <style>{`
          @media (min-width: 1024px) {
            #hero-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
        <div id="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2.5rem", alignItems:"center" }}>

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="anim-fade-up" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#fef2f2", border:"1px solid rgba(219,26,26,.2)", borderRadius:100, padding:"5px 14px", marginBottom:"1.5rem" }}>
              <span className="anim-pulse" style={{ width:7, height:7, borderRadius:"50%", background:"#DB1A1A", display:"inline-block", flexShrink:0 }} />
              <span style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#DB1A1A" }}>
                Project 25-26J-250 · SLIIT 2025–26
              </span>
            </div>

            {/* Headline */}
            <h1 className="anim-fade-up" style={{ fontSize:"clamp(2rem,5.5vw,4rem)", fontWeight:800, lineHeight:1.06, letterSpacing:"-.02em", marginBottom:"1.2rem", animationDelay:".08s" }}>
              <span style={{ color:"#111" }}>Revolutionizing</span><br />
              <span className="grad-text">Cement Quality</span><br />
              <span style={{ color:"#111", fontSize:".78em" }}>Through AI & IoT</span>
            </h1>

            {/* Subheading */}
            <p className="anim-fade-up" style={{ fontSize:"clamp(.85rem,2vw,.95rem)", color:"#555", maxWidth:460, lineHeight:1.75, marginBottom:"2rem", animationDelay:".16s" }}>
              An Integrated AI and IoT-Based Framework for Automated Cement Quality
              Assessment — validated with real industrial data from{" "}
              <strong style={{ color:"#111" }}>INSEE Cement, Sri Lanka</strong>.
            </p>

            {/* CTAs */}
            <div className="anim-fade-up" style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:"2.5rem", animationDelay:".22s" }}>
              <a href="#components" className="btn-red">
                Explore Components
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#results" className="btn-ghost">View Results</a>
            </div>

            {/* Stat chips */}
            <div className="anim-fade-up" style={{ display:"flex", flexWrap:"wrap", gap:8, animationDelay:".3s" }}>
              {STATS.map(s => (
                <div key={s.label} className="card" style={{ padding:"12px 16px", cursor:"default" }}>
                  <div style={{ fontSize:"1.3rem", fontWeight:700, color:"#DB1A1A", lineHeight:1, marginBottom:3 }}><Counter val={s.val} suf={s.suf} /></div>
                  <div style={{ fontSize:".65rem", color:"#888", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: image ── */}
          <div id="hero-right" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div className="anim-fade-up anim-float" style={{ width:"100%", maxWidth:480, animationDelay:".18s" }}>
              <Image
                src="/images/heroi.png"
                alt="INSEE Cement — CementAI Quality Assessment"
                width={480}
                height={360}
                priority
                style={{ width:"100%", height:"auto", display:"block" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:.3 }}>
          <span style={{ fontSize:".6rem", letterSpacing:".2em", textTransform:"uppercase", color:"#888" }}>Scroll</span>
          <div style={{ width:1, height:32, background:"linear-gradient(to bottom,#DB1A1A,transparent)" }} />
        </div>
      </div>
    </section>
  );
}

