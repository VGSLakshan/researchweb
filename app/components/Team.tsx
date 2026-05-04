"use client";
import Image from "next/image";

const SUPERVISORS = [
  {
    name: "Dr. Dinuka Wijendra",
    role: "Supervisor",
    init: "DW",
    image: "/images/dinuka.png",
  },
  {
    name: "Ms. Jenny Krishara",
    role: "Co-Supervisor",
    init: "JK",
    image: "/images/jenny.png",
  },
];

const MEMBERS = [
  {
    name: "Koralage K.Y.P",
    id: "IT22584472",
    role: "Component 01",
    comp: "Colour-Based Particle Identification",
    tech: "YOLOv9 · FastAPI · React",
    init: "KY",
    image: "/images/kanchana.png",
  },
  {
    name: "Lakshan V.G.S",
    id: "IT22562210",
    role: "Component 02",
    comp: "IoT Crack Detection & Measurement",
    tech: "U-Net · IoT Sensors · ESP 32",
    init: "LV",
    image: "/images/sanchithanew.png",
  },
  {
    name: "Weerasooriya K.H.P",
    id: "IT22368034",
    role: "Component 03",
    comp: "Cement Strength Predictor",
    tech: "XGBoost · LightGBM · Feature Engineering",
    init: "WK",
    image: "/images/hiruminew.png",
  },
  {
    name: "Abeywickrama W.H.C.A",
    id: "IT22640284",
    role: "Component 04",
    comp: "Clinker Phase Classifier",
    tech: "MobileNetV2 · Transfer Learning · React",
    init: "AW",
    image: "/images/chamudininew.png",
  },
];

export default function Team() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="divider absolute top-0 inset-x-0" />
      <div className="absolute inset-0 line-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="sec-label mb-4">About Us</div>
          <div className="accent-bar mb-5" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            Meet the <span className="grad-text">Research Team</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            The CementAI research project is supervised by experienced faculty and
            executed by four final-year students from the Department of Information
            Technology at SLIIT.
          </p>
        </div>

        {/* ══════════════════════════════════
            SUPERVISORS — top, large cards
        ══════════════════════════════════ */}
        <div className="mb-16 reveal">
          {/* Sub-label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 20,
          }}>
            <div style={{ width: 16, height: 2, background: "#DB1A1A", borderRadius: 1 }} />
            <span style={{
              fontSize: ".68rem", fontWeight: 700,
              letterSpacing: ".18em", textTransform: "uppercase", color: "#DB1A1A",
            }}>
              Supervisors
            </span>
          </div>

          {/* 2-col supervisor grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 16,
          }}>
            {SUPERVISORS.map((s, i) => (
              <div
                key={s.name}
                className="card reveal"
                style={{
                  padding: 28,
                  transitionDelay: `${i * 0.1}s`,
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(219,26,26,.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5";
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg,#DB1A1A,#ff6b6b,transparent)",
                  borderRadius: "20px 20px 0 0",
                }} />

                {/* Large photo */}
                <div style={{
                  width: 100, height: 100,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "3px solid rgba(219,26,26,.15)",
                  boxShadow: "0 8px 24px rgba(219,26,26,.15)",
                  position: "relative",
                  flexShrink: 0,
                }}>
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="100px"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  ) : (
                    <div style={{
                      width: "100%", height: "100%",
                      background: "#111",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{ color: "white", fontWeight: 700, fontSize: "1.4rem" }}>
                        {s.init}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  {/* Role badge */}
                  <span style={{
                    display: "inline-block",
                    background: "#fef2f2", color: "#DB1A1A",
                    fontSize: ".65rem", fontWeight: 700,
                    letterSpacing: ".1em", textTransform: "uppercase",
                    padding: "3px 10px", borderRadius: 100,
                    border: "1px solid rgba(219,26,26,.15)",
                    marginBottom: 8,
                  }}>
                    {s.role}
                  </span>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#111" }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: ".8rem", color: "#888", marginTop: 4 }}>
                    Department of Information Technology · SLIIT
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            RESEARCH GROUP — below, smaller
        ══════════════════════════════════ */}
        <div className="mb-12">
          {/* Sub-label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 20,
          }}>
            <div style={{ width: 16, height: 2, background: "#DB1A1A", borderRadius: 1 }} />
            <span style={{
              fontSize: ".68rem", fontWeight: 700,
              letterSpacing: ".18em", textTransform: "uppercase", color: "#DB1A1A",
            }}>
              The Research Group
            </span>
          </div>

          {/* 4-col member grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: 14,
          }}>
            {MEMBERS.map((m, i) => (
              <div
                key={m.id}
                className="card reveal group"
                style={{ padding: 20, transitionDelay: `${i * 0.08}s` }}
              >
                {/* Photo */}
                <div
                  className="group-hover:scale-105"
                  style={{
                    width: 80, height: 80,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "2px solid rgba(219,26,26,.15)",
                    boxShadow: "0 4px 14px rgba(219,26,26,.12)",
                    position: "relative",
                    marginBottom: 14,
                    transition: "transform .2s",
                  }}
                >
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                      priority
                    />
                  ) : (
                    <div style={{
                      width: "100%", height: "100%",
                      background: "#DB1A1A",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                        {m.init}
                      </span>
                    </div>
                  )}
                </div>

                {/* Role badge */}
                <span style={{
                  display: "inline-block",
                  background: "#fef2f2", color: "#DB1A1A",
                  fontSize: ".6rem", fontWeight: 700,
                  letterSpacing: ".08em", textTransform: "uppercase",
                  padding: "2px 9px", borderRadius: 100,
                  border: "1px solid rgba(219,26,26,.14)",
                  marginBottom: 8,
                }}>
                  {m.role}
                </span>

                <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#111", marginBottom: 2 }}>
                  {m.name}
                </div>
                <div style={{ fontSize: ".68rem", color: "#aaa", fontFamily: "monospace", marginBottom: 8 }}>
                  {m.id}
                </div>
                <div style={{ fontSize: ".75rem", fontWeight: 600, color: "#444", marginBottom: 4 }}>
                  {m.comp}
                </div>
                <div style={{ fontSize: ".68rem", color: "#888" }}>{m.tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            Institution + Sponsor footer
        ══════════════════════════════════ */}
        <div className="reveal">
          <div style={{
            background: "#fafafa", borderRadius: 20,
            border: "1px solid #e5e5e5", padding: "24px 28px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", gap: 16,
            justifyContent: "space-between",
          }}>
            {/* SLIIT */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "#DB1A1A",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(219,26,26,.2)",
              }}>
                <span style={{ color: "white", fontWeight: 700, fontSize: ".6rem" }}>SLIIT</span>
              </div>
              <div>
                <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#111" }}>
                  Sri Lanka Institute of Information Technology
                </div>
                <div style={{ fontSize: ".75rem", color: "#666" }}>
                  Department of Information Technology · B.Sc. (Hons) Information Technology
                </div>
              </div>
            </div>

            {/* Sponsor */}
            <div style={{ textAlign: "right" }}>
              <div style={{
                fontSize: ".6rem", color: "#aaa",
                fontWeight: 600, textTransform: "uppercase",
                letterSpacing: ".1em", marginBottom: 2,
              }}>
                Sponsored by
              </div>
              <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#111" }}>
                INSEE Cement (Pvt) Ltd
              </div>
              <div style={{ fontSize: ".75rem", color: "#666" }}>Sri Lanka</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

