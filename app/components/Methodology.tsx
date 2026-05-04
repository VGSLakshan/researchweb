const STEPS = [
  {
    num: "01", title: "Dataset Collection",
    desc: "Collected ~300 raw meal microscopy images and ~500 clinker phase images from INSEE Cement's QC laboratory. Industrial OPC production records including chemical composition, physical properties, and compressive strength measurements were gathered.",
    detail: "INSEE Cement, Sri Lanka · 100× & 200× magnification",
    icon: "📦",
  },
  {
    num: "02", title: "Preprocessing & Augmentation",
    desc: "Applied RGB→LAB/HSV colour space conversion, histogram equalisation, and K-Means clustering for particle segmentation. Data augmentation including flipping, rotation, brightness variation, and Gaussian noise was applied to improve model generalisation.",
    detail: "Normalisation · Augmentation · 40+ Feature Engineering",
    icon: "⚙️",
  },
  {
    num: "03", title: "Model Development",
    desc: "Trained and benchmarked five architectures per component. Selected YOLOv9c, U-Net Optimised, XGBoost+LightGBM ensemble, and MobileNetV2 with two-stage transfer learning as the best-performing models for each quality assessment task.",
    detail: "YOLOv9 · U-Net · XGBoost · LightGBM · MobileNetV2",
    icon: "🤖",
  },
  {
    num: "04", title: "Integration & Testing",
    desc: "Integrated all four AI components into a unified FastAPI backend and React.js frontend. Conducted end-to-end integration testing covering sensor calibration, crack detection, strength calculation, report export, and alert systems.",
    detail: "8 Integration Test Cases · All Passed · < 2s Inference",
    icon: "🔗",
  },
  {
    num: "05", title: "Industrial Deployment",
    desc: "Validated the complete system using real industrial datasets from INSEE Cement. Achieved 88–92% accuracy across all components. Containerised with Docker for scalable deployment on AWS or on-premises infrastructure.",
    detail: "INSEE Cement Validation · Docker · AWS / On-Premises",
    icon: "🚀",
  },
];

function StepCard({ s }: { s: (typeof STEPS)[number] }) {
  return (
    <div
      className="card"
      style={{ padding: 28 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: "1.3rem" }}>{s.icon}</span>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: 0 }}>
          {s.title}
        </h3>
      </div>
      <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7, marginBottom: 16 }}>
        {s.desc}
      </p>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "#fef2f2", borderRadius: 8,
        padding: "6px 12px", border: "1px solid rgba(219,26,26,.1)",
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "#DB1A1A", flexShrink: 0,
        }} />
        <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#DB1A1A" }}>
          {s.detail}
        </span>
      </div>
    </div>
  );
}

export default function Methodology() {
  /* Circle diameter + gap on each side */
  const CIRCLE = 48;   /* px — circle width/height */
  const HALF   = CIRCLE / 2;

  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.4 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="sec-label mb-4">Methodology</div>
          <div className="accent-bar mb-5" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            Research <span className="grad-text">Process</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            A structured five-stage development process from raw data collection through to
            validated industrial deployment.
          </p>
        </div>

        {/* ── Desktop alternating timeline ── */}
        <div className="hidden md:block">
          {/*
            Each row is:
            [card or empty — 44%] [circle column — 12%] [card or empty — 44%]
            The circle column is wide enough that cards never overlap the circle.
          */}
          <div style={{ position: "relative" }}>
            {/* Vertical line — sits behind everything */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, #DB1A1A 0%, rgba(219,26,26,.12) 100%)",
              borderRadius: 1,
              zIndex: 0,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {STEPS.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={s.num}
                    className="reveal"
                    style={{
                      display: "grid",
                      /* left card | gap | circle | gap | right card */
                      gridTemplateColumns: `1fr ${CIRCLE + 48}px 1fr`,
                      alignItems: "center",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    {/* Left column */}
                    <div style={{ paddingRight: 32 }}>
                      {isLeft && <StepCard s={s} />}
                    </div>

                    {/* Center column — circle only */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                    }}>
                      <div style={{
                        width: CIRCLE,
                        height: CIRCLE,
                        borderRadius: "50%",
                        background: "#DB1A1A",
                        color: "white",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(219,26,26,.35)",
                        border: `4px solid #fafafa`,
                        flexShrink: 0,
                        letterSpacing: "0.04em",
                      }}>
                        {s.num}
                      </div>
                    </div>

                    {/* Right column */}
                    <div style={{ paddingLeft: 32 }}>
                      {!isLeft && <StepCard s={s} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile vertical ── */}
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="reveal"
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Circle */}
              <div style={{
                width: 40, height: 40,
                borderRadius: "50%",
                background: "#DB1A1A",
                color: "white",
                fontSize: "0.65rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(219,26,26,.3)",
                marginTop: 4,
              }}>
                {s.num}
              </div>
              <div style={{ flex: 1 }}>
                <StepCard s={s} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

