"use client";
import { useState } from "react";
import Image from "next/image";

const COMPS = [
  {
    num: "01",
    icon: "🎯",
    name: "Colour-Based Particle Identification",
    tech: "YOLOv9 Instance Segmentation",
    desc: "Automatically detects and classifies raw meal particles by colour — dark red (iron-rich), light red (calcite), and white (quartz) — from high-resolution optical microscopy images. Replaces time-consuming manual analysis with sub-2-second AI inference.",
    metric: "88%",
    metricLabel: "mAP@0.5",
    tags: ["YOLOv9c", "Instance Segmentation", "~300 Images", "Real-time"],
    details: [
      { k: "Dataset",   v: "~300 images" },
      { k: "Classes",   v: "3 particle types" },
      { k: "Inference", v: "< 1.8 seconds" },
      { k: "Backbone",  v: "GELAN + PGI" },
    ],
    screenshots: [
      "/screenshots/comp01/1.png",
      "/screenshots/comp01/2.png",
      "/screenshots/comp01/3.png",
    ],
  },
  {
    num: "02",
    icon: "🧠",
    name: "IoT-Based Area Measurement and Image-Based Crack Detection",
    tech: "U-Net + VL53L0X Time Of Flight Distance Sensor",
    desc: "Integrates IoT VL53L0X Time Of Flight Distance Sensors for non-contact cement cube dimension measurement with a U-Net deep learning model for real-time crack detection. Eliminates manual caliper errors and subjective visual crack inspection.",
    metric: "90.15%",
    metricLabel: "Val Accuracy",
    tags: ["U-Net Optimised", "VL53L0X ToF", "ESP32 Module", "Load Cell"],
    details: [
      { k: "Precision",    v: "±1mm" },
      { k: "Architecture", v: "Encoder-Decoder" },
      { k: "Latency",      v: "< 100ms" },
      { k: "Hardware",     v: "ESP32 Module" },
    ],
    screenshots: [
      "/screenshots/comp02/1.png",
      "/screenshots/comp02/2.png",
      "/screenshots/comp02/3.png",
      "/screenshots/comp02/4.png",
      "/screenshots/comp02/5.png",
      "/screenshots/comp02/6.png",
    ],
  },
  {
    num: "03",
    icon: "⚡",
    name: "Cement Strength Predictor",
    tech: "XGBoost + LightGBM Ensemble",
    desc: "Predicts compressive strength at five curing ages (1, 2, 7, 28, 56 days) using chemical composition, physical properties, and environmental factors. Eliminates weeks-long lab waits with instant batch-specific predictions.",
    metric: "R² 0.89",
    metricLabel: "Ensemble Score",
    tags: ["XGBoost", "LightGBM", "40+ Features", "5 Curing Ages"],
    details: [
      { k: "Features",   v: "40+ engineered" },
      { k: "Outputs",    v: "5 curing ages" },
      { k: "Env. inputs",v: "Temp + Humidity" },
      { k: "Method",     v: "Bogue equations" },
    ],
    screenshots: [
      "/screenshots/comp03/1.png",
      "/screenshots/comp03/2.png",
      "/screenshots/comp03/3.png",
    ],
  },
  {
    num: "04",
    icon: "📱",
    name: "Clinker Phase Classifier",
    tech: "MobileNetV2 Transfer Learning",
    desc: "Automatically classifies the four primary cement clinker phases (C2S, C3S, C3A, C4AF) from microscopic images using two-stage transfer learning. Outperforms ResNet50 and InceptionV3 on the industrial dataset.",
    metric: "91.6%",
    metricLabel: "Val Accuracy",
    tags: ["MobileNetV2", "Transfer Learning", "~500 Images", "4 Phases"],
    details: [
      { k: "Dataset",  v: "~500 images" },
      { k: "Phases",   v: "C2S, C3S, C3A, C4AF" },
      { k: "Strategy", v: "2-stage fine-tune" },
      { k: "Input",    v: "224×224 px" },
    ],
    screenshots: [
      "/screenshots/comp04/1.png",
      "/screenshots/comp04/2.png",
      "/screenshots/comp04/3.png",
      "/screenshots/comp04/4.png",
      "/screenshots/comp04/5.png",
    ],
  },
];

/* ── Lightbox modal ── */
function Lightbox({
  screenshots,
  title,
  onClose,
}: {
  screenshots: string[];
  title: string;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,.85)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff", borderRadius: 20,
          width: "100%", maxWidth: 900,
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,.4)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #f0f0f0",
        }}>
          <div>
            <div style={{ fontSize: ".65rem", fontWeight: 700, color: "#DB1A1A", letterSpacing: ".14em", textTransform: "uppercase" }}>
              Project Screenshots
            </div>
            <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#111", marginTop: 2 }}>{title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: ".75rem", color: "#888" }}>
              {active + 1} / {screenshots.length}
            </span>
            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "#f5f5f5", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", color: "#555",
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Main image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#f8f8f8" }}>
          <Image
            src={screenshots[active]}
            alt={`${title} screenshot ${active + 1}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="900px"
          />

          {/* Prev / Next arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={() => setActive((p) => (p - 1 + screenshots.length) % screenshots.length)}
                style={{
                  position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,.9)", border: "1px solid #e5e5e5",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % screenshots.length)}
                style={{
                  position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,.9)", border: "1px solid #e5e5e5",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {screenshots.length > 1 && (
          <div style={{
            display: "flex", gap: 8, padding: "12px 16px",
            overflowX: "auto", borderTop: "1px solid #f0f0f0",
            background: "#fafafa",
          }}>
            {screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  flexShrink: 0, width: 72, height: 48,
                  borderRadius: 8, overflow: "hidden",
                  border: i === active ? "2px solid #DB1A1A" : "2px solid transparent",
                  cursor: "pointer", padding: 0, background: "#eee",
                  position: "relative",
                  boxShadow: i === active ? "0 0 0 2px rgba(219,26,26,.2)" : "none",
                  transition: "border-color .2s",
                }}
              >
                <Image src={src} alt={`thumb ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="72px"/>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Components() {
  const [modal, setModal] = useState<{ screenshots: string[]; title: string } | null>(null);

  return (
    <>
      <section id="components" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none"/>
        <div className="divider absolute top-0 inset-x-0"/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="sec-label mb-4 justify-center">Four AI-Powered Systems</div>
            <div className="accent-bar mx-auto mb-5"/>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
              A Unified, Modular <span className="grad-text">Quality Control</span> Platform
            </h2>
            <p className="text-[15px] text-[#555] leading-relaxed">
              Each component addresses a distinct quality control challenge, integrated into one
              web-deployable system validated on real industrial data from INSEE Cement.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMPS.map((c, i) => (
              <div key={c.num} className="card p-7 reveal group" style={{ transitionDelay: `${i * 0.1}s` }}>
                {/* Top accent bar */}
                <div style={{ height: 2, background: "linear-gradient(90deg,#DB1A1A,#ff6b6b,transparent)", borderRadius: 2, marginBottom: 24 }}/>

                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 10,
                      background: "#DB1A1A", color: "white",
                      fontSize: ".7rem", fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(219,26,26,.25)",
                    }}>
                      {c.num}
                    </div>
                    <div style={{
                      width: 44, height: 44, borderRadius: 14,
                      background: "#fef2f2",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.3rem",
                      transition: "transform .2s",
                    }}
                      className="group-hover:scale-110"
                    >
                      {c.icon}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#DB1A1A", lineHeight: 1 }}>{c.metric}</div>
                    <div style={{ fontSize: ".68rem", color: "#888", marginTop: 2 }}>{c.metricLabel}</div>
                  </div>
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111", marginBottom: 4 }}>{c.name}</h3>
                <p style={{ fontSize: ".72rem", fontWeight: 600, color: "#DB1A1A", marginBottom: 14 }}>{c.tech}</p>
                <p style={{ fontSize: ".875rem", color: "#555", lineHeight: 1.65, marginBottom: 20 }}>{c.desc}</p>

                {/* Detail grid */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
                  marginBottom: 20, paddingTop: 20,
                  borderTop: "1px solid #f0f0f0",
                }}>
                  {c.details.map((d) => (
                    <div key={d.k} style={{
                      background: "#fafafa", borderRadius: 12,
                      padding: "10px 12px", border: "1px solid #f0f0f0",
                    }}>
                      <div style={{ fontSize: ".6rem", color: "#aaa", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 600 }}>{d.k}</div>
                      <div style={{ fontSize: ".78rem", fontWeight: 600, color: "#333", marginTop: 2 }}>{d.v}</div>
                    </div>
                  ))}
                </div>

                {/* Tags + button row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>

                  {/* View Screenshots button */}
                  <button
                    onClick={() => setModal({ screenshots: c.screenshots, title: c.name })}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "8px 16px",
                      background: "#DB1A1A", color: "white",
                      fontSize: ".75rem", fontWeight: 600,
                      borderRadius: 100, border: "none", cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(219,26,26,.25)",
                      transition: "transform .2s, box-shadow .2s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(219,26,26,.35)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "none";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(219,26,26,.25)";
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <rect x="1" y="1" width="11" height="8" rx="1.5" stroke="white" strokeWidth="1.4"/>
                      <path d="M4 9v3M9 9v3M2.5 12h8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    View Screenshots
                    <span style={{
                      background: "rgba(255,255,255,.25)", borderRadius: 100,
                      padding: "1px 7px", fontSize: ".65rem", fontWeight: 700,
                    }}>
                      {c.screenshots.length}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {modal && (
        <Lightbox
          screenshots={modal.screenshots}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}

