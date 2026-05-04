const LAYERS = [
  {
    title: "Data Sources",
    items: [
      { icon:"🔬", label:"Optical Microscope" },
      { icon:"📡", label:"IoT Sensors" },
      { icon:"🗄️", label:"Lab Database" },
    ],
  },
  {
    title: "AI Models",
    items: [
      { icon:"🎯", label:"YOLOv9 — Particle ID" },
      { icon:"🧠", label:"U-Net — Crack Detection" },
      { icon:"⚡", label:"XGB+LGBM — Strength" },
      { icon:"📱", label:"MobileNetV2 — Phases" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon:"🚀", label:"FastAPI REST" },
      { icon:"🗃️", label:"PostgreSQL + MongoDB" },
      { icon:"🐳", label:"Docker Container" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon:"⚛️", label:"React.js Dashboard" },
      { icon:"📄", label:"PDF / CSV Reports" },
      { icon:"🔔", label:"Real-time Alerts" },
    ],
  },
];

const BADGES = [
  "< 2s Inference","100+ Images/Hour","Docker Containerised",
  "AWS / On-Premises","REST API","PDF + CSV Export",
];

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0"/>
      <div className="absolute inset-0 line-grid pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="sec-label mb-4 justify-center">System Architecture</div>
          <div className="accent-bar mx-auto mb-5"/>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            End-to-End <span className="grad-text">Data Pipeline</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            From raw data acquisition through AI inference to the unified web dashboard —
            every layer designed for real-time industrial deployment.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="reveal">
          <div className="bg-[#fafafa] rounded-2xl border border-[#e5e5e5] p-5 overflow-x-auto" style={{ WebkitOverflowScrolling:"touch" }}>
            <div className="flex flex-col md:flex-row items-stretch gap-4" style={{ minWidth: 560 }}>
              {LAYERS.map((layer, li) => (
                <div key={layer.title} className="flex flex-col gap-3 flex-1">
                  {/* Layer header */}
                  <div className="text-center py-2 rounded-xl bg-[#DB1A1A] text-white text-[10px] font-bold tracking-[.14em] uppercase shadow-sm shadow-red-200">
                    {layer.title}
                  </div>
                  {/* Items */}
                  <div className="flex flex-col gap-2 flex-1">
                    {layer.items.map((item) => (
                      <div key={item.label}
                        className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 border border-[#e5e5e5] hover:border-[rgba(219,26,26,.2)] hover:bg-[#fef2f2] transition-all group cursor-default">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-xs font-medium text-[#444] group-hover:text-[#DB1A1A] transition-colors">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow between layers */}
                  {li < LAYERS.length - 1 && (
                    <div className="hidden md:flex absolute" style={{ display:"none" }}/>
                  )}
                </div>
              ))}
            </div>

            {/* Arrows row */}
            <div className="hidden md:flex justify-between items-center mt-3 px-[12%]">
              {[0,1,2].map((i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-12 h-px bg-gradient-to-r from-[#e5e5e5] to-[rgba(219,26,26,.3)]"/>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5 1l4 4-4 4" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 reveal">
          {BADGES.map((b) => (
            <span key={b} className="flex items-center gap-1.5 bg-[#fafafa] border border-[#e5e5e5] rounded-full px-4 py-2 text-xs font-medium text-[#444] hover:border-[rgba(219,26,26,.2)] hover:text-[#DB1A1A] transition-all cursor-default">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

