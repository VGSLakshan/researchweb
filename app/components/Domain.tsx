const CARDS = [
  {
    num: "01",
    icon: "📚",
    title: "Literature Survey",
    desc: "Traditional cement quality control relies on manual microscopy, laboratory testing, and subjective evaluation, which are time-consuming, inconsistent, and error-prone. Advanced techniques such as SEM provide high accuracy but are costly and impractical for routine use. Recent research shows that machine learning and computer vision can improve particle analysis, crack detection, strength prediction, and clinker phase classification. However, most approaches address these tasks separately rather than in an integrated system.",
    details: [
      { k: "Focus Area",  v: "Quality Control" },
      { k: "Methods",     v: "ML + Computer Vision" },
      { k: "Gap Found",   v: "No integrated system" },
      { k: "Scope",       v: "Industrial datasets" },
    ],
  },
  {
    num: "02",
    icon: "🔍",
    title: "Research Gap",
    desc: "Existing research lacks a unified system that integrates particle analysis, IoT-based measurement, crack detection, strength prediction, and clinker phase classification into a single platform. Most solutions operate independently, lack real-time feedback, and do not incorporate environmental factors. Additionally, there is limited application of such systems in Sri Lankan cement industries with real industrial datasets.",
    details: [
      { k: "Missing",     v: "Unified platform" },
      { k: "Limitation",  v: "No real-time feedback" },
      { k: "Env. Factors",v: "Not incorporated" },
      { k: "Region",      v: "Sri Lanka context" },
    ],
  },
  {
    num: "03",
    icon: "⚠️",
    title: "Research Problem",
    desc: "Cement quality assessment processes are manual, slow, and dependent on human expertise, leading to inconsistencies and delayed decision-making. Strength testing requires long curing periods, and current methods lack real-time monitoring. There is no automated, scalable, and integrated solution that combines all quality assessment processes into a single reliable system.",
    details: [
      { k: "Core Issue",  v: "Manual processes" },
      { k: "Delay",       v: "7–28 day curing" },
      { k: "Impact",      v: "Inconsistent QC" },
      { k: "Need",        v: "Automated system" },
    ],
  },
  {
    num: "04",
    icon: "🎯",
    title: "Research Objectives",
    desc: "Main Objective: Develop an integrated AI and IoT-based system for automated cement quality assessment. Specific Objectives: Automate particle identification using YOLOv9 · Develop IoT-based cube measurement and crack detection using U-Net · Predict compressive strength using XGBoost + LightGBM · Classify clinker phases using MobileNetV2 · Integrate all components into a web-based real-time system.",
    details: [
      { k: "Models",      v: "4 AI components" },
      { k: "Platform",    v: "Web-based" },
      { k: "Monitoring",  v: "Real-time" },
      { k: "Validation",  v: "INSEE Cement" },
    ],
  },
  {
    num: "05",
    icon: "⚙️",
    title: "Methodology",
    desc: "The system follows a modular architecture with four main components: (1) YOLOv9 for color-based particle detection, (2) IoT sensors + U-Net for crack detection and measurement, (3) Ensemble ML (XGBoost + LightGBM) for strength prediction, (4) MobileNetV2 for clinker phase classification. Data is collected from sensors, microscopes, and industrial datasets, processed through AI models, and displayed via a web dashboard with real-time analytics and reporting.",
    details: [
      { k: "Architecture", v: "Modular design" },
      { k: "Data Sources", v: "Sensors + Microscopes" },
      { k: "Processing",   v: "AI pipeline" },
      { k: "Output",       v: "Dashboard + Reports" },
    ],
  },
  {
    num: "06",
    icon: "🛠️",
    title: "Technologies Used",
    desc: "AI & ML: YOLOv9 (object detection) · U-Net (image segmentation) · MobileNetV2 (classification) · XGBoost & LightGBM (prediction). IoT: VL53L0X ToF sensors, Load Cell, ESP32 Camera. Backend: FastAPI. Frontend: React.js. Database: MongoDB / PostgreSQL. Image Processing: OpenCV. Deployment: Docker · AWS / On-Premises.",
    details: [
      { k: "AI Models",   v: "4 architectures" },
      { k: "IoT Hardware",v: "ESP32 + Sensors" },
      { k: "Stack",       v: "FastAPI + React" },
      { k: "Deployment",  v: "Docker + AWS" },
    ],
  },
];

export default function Domain() {
  return (
    <section id="domain" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.5 }} />

      {/* Soft red blobs */}
      <div className="absolute pointer-events-none" style={{
        top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(219,26,26,.05) 0%,transparent 70%)",
        filter: "blur(50px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "10%", left: "5%", width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(219,26,26,.04) 0%,transparent 70%)",
        filter: "blur(40px)",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
          <div className="sec-label mb-4" style={{ justifyContent: "center" }}>
            Research Domain
          </div>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <h2 style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-.02em", marginBottom: 16,
          }}>
            <span style={{ color: "#111" }}>Research Domain </span>
            <span className="grad-text">Overview</span>
          </h2>
          <p style={{ fontSize: ".95rem", color: "#555", lineHeight: 1.7 }}>
            A comprehensive overview of the research foundation, identified gaps, objectives,
            and the technical approach behind the CementAI framework.
          </p>
        </div>

        {/* ── 2×3 card grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 16,
        }}>
          {CARDS.map((c, i) => (
            <div
              key={c.num}
              className="card reveal group"
              style={{ padding: 28, transitionDelay: `${i * 0.08}s` }}
            >
              {/* Top accent bar */}
              <div style={{
                height: 2,
                background: "linear-gradient(90deg,#DB1A1A,#ff6b6b,transparent)",
                borderRadius: 2, marginBottom: 24,
              }} />

              {/* Header row */}
              <div style={{
                display: "flex", alignItems: "flex-start",
                justifyContent: "space-between", marginBottom: 20,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Number badge */}
                  <div style={{
                    width: 32, height: 32, borderRadius: 10,
                    background: "#DB1A1A", color: "white",
                    fontSize: ".7rem", fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(219,26,26,.25)",
                    flexShrink: 0,
                  }}>
                    {c.num}
                  </div>
                  {/* Icon box */}
                  <div
                    className="group-hover:scale-110"
                    style={{
                      width: 44, height: 44, borderRadius: 14,
                      background: "#fef2f2",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.3rem",
                      transition: "transform .2s",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "1rem", fontWeight: 700,
                color: "#111", marginBottom: 4,
              }}>
                {c.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: ".875rem", color: "#555",
                lineHeight: 1.7, marginBottom: 20,
              }}>
                {c.desc}
              </p>

              {/* Detail grid */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
                paddingTop: 20, borderTop: "1px solid #f0f0f0",
              }}>
                {c.details.map((d) => (
                  <div key={d.k} style={{
                    background: "#fafafa", borderRadius: 12,
                    padding: "10px 12px", border: "1px solid #f0f0f0",
                  }}>
                    <div style={{
                      fontSize: ".6rem", color: "#aaa",
                      textTransform: "uppercase", letterSpacing: ".08em",
                      fontWeight: 600, marginBottom: 2,
                    }}>
                      {d.k}
                    </div>
                    <div style={{ fontSize: ".78rem", fontWeight: 600, color: "#333" }}>
                      {d.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

