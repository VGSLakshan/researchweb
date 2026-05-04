const STEPS = [
  { label: "Project Proposal",  date: "June 2025",    desc: "Research problem defined, literature review completed, objectives set." },
  { label: "Dataset Collection",date: "Aug–Sep 2025", desc: "Industrial data collected from INSEE Cement's QC laboratory." },
  { label: "Model Development", date: "Oct–Dec 2025", desc: "All four AI models trained, benchmarked, and optimised." },
  { label: "System Integration",date: "Jan–Mar 2026", desc: "Unified web platform built, integration testing completed." },
  { label: "Final Submission",  date: "May 2026",     desc: "Thesis submitted, ICHORA 2026 paper prepared." },
];

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7l4 4 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="absolute inset-0 line-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="sec-label mb-4">Research Milestones</div>
          <div className="accent-bar mb-5" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            Project <span className="grad-text">Timeline</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            From initial proposal to final submission — a structured research journey spanning
            the 2025–26 academic year.
          </p>
        </div>

        {/* ── Desktop horizontal ── */}
        <div className="hidden md:block reveal">
          {/*
            Layout:
            1. Row of cards (full width)
            2. Row of circles aligned to each card center, overlapping the progress bar
            3. Progress bar
            The circles sit BETWEEN the cards and the bar using negative margin.
          */}
          <div style={{ position: "relative" }}>

            {/* Progress bar — sits in the middle of the circles row */}
            <div
              style={{
                position: "absolute",
                left: "5%",
                right: "5%",
                top: "calc(100% + 20px)", /* will be overridden by JS-free approach below */
                height: 4,
                background: "#f0f0f0",
                borderRadius: 2,
              }}
            />

            {/* Full self-contained layout using flex */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

              {/* Cards row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: 12,
                  marginBottom: 0,
                }}
              >
                {STEPS.map((s) => (
                  <div
                    key={s.label}
                    className="card"
                    style={{ padding: 16, textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#DB1A1A",
                        marginBottom: 4,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {s.date}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "#111",
                        marginBottom: 6,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#666",
                        lineHeight: 1.5,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Connector row: circles + line */}
              <div
                style={{
                  position: "relative",
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  margin: "12px 0",
                }}
              >
                {/* Line behind circles */}
                <div
                  style={{
                    position: "absolute",
                    left: "10%",
                    right: "10%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: 4,
                    background: "linear-gradient(90deg, #DB1A1A, #ff6b6b)",
                    borderRadius: 2,
                  }}
                />

                {/* Circles grid — same 5-col layout as cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 12,
                    width: "100%",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {STEPS.map((s) => (
                    <div
                      key={s.label}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "#DB1A1A",
                          border: "4px solid white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 14px rgba(219,26,26,.3)",
                          flexShrink: 0,
                        }}
                      >
                        {CHECK}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Mobile vertical ── */}
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className="reveal"
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#DB1A1A",
                  border: "3px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(219,26,26,.25)",
                  marginTop: 4,
                }}
              >
                {CHECK}
              </div>
              <div className="card" style={{ padding: 16, flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#DB1A1A",
                    marginBottom: 2,
                  }}
                >
                  {s.date}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.5 }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

