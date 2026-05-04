const SPECIFIC = [
  "Develop a YOLOv9-based instance segmentation model to automatically detect and classify colour-based particles (dark red, light red, and white) in cement raw meal microscopic images with a target mAP of 85% or above.",
  "Design and implement an IoT-based non-contact cement cube measurement system using VL53L0X Time Of Flight Distance Sensors, integrated with a U-Net deep learning model for real-time crack detection and automated compressive strength calculation.",
  "Build a hybrid ensemble machine learning model combining XGBoost and LightGBM for multi-output cement compressive strength prediction at five curing ages (1, 2, 7, 28, and 56 days), incorporating chemical composition, physical properties, and environmental factors.",
  "Develop a MobileNetV2 transfer learning model to automatically classify the four primary cement clinker phases (C2S, C3S, C3A, and C4AF) from microscopic images with a target validation accuracy of 90% or above.",
  "Integrate all four components into a unified, scalable web-based platform with a React.js frontend and FastAPI backend, enabling real-time quality control, automated reporting, and data-driven decision support.",
];

const ARCH = [
  { num:"01", label:"Particle Identification", sub:"YOLOv9" },
  { num:"02", label:"Crack Detection",         sub:"U-Net + IoT" },
  { num:"03", label:"Strength Predictor",      sub:"XGBoost + LightGBM" },
  { num:"04", label:"Phase Classifier",        sub:"MobileNetV2" },
];

export default function Objectives() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left */}
          <div className="reveal-l">
            <div className="sec-label mb-4">Objectives</div>
            <div className="accent-bar mb-5"/>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-8 leading-tight">
              What We Set Out<br/>to Solve
            </h2>

            {/* Main objective */}
            <div className="relative bg-[#fef2f2] rounded-2xl p-6 mb-8 border border-[rgba(219,26,26,.12)]">
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-[#DB1A1A] rounded-r-full"/>
              <div className="pl-4">
                <div className="text-[10px] font-bold text-[#DB1A1A] tracking-[.16em] uppercase mb-2">Main Objective</div>
                <p className="text-sm text-[#333] leading-relaxed font-medium">
                  To design, develop, and validate an integrated AI- and IoT-based framework for
                  automated cement quality assessment combining colour-based particle identification,
                  IoT-driven area measurement with crack detection, multi-output cement strength
                  prediction, and automated clinker phase classification into a unified,
                  web-deployable platform for real-time industrial quality control.
                </p>
              </div>
            </div>

            {/* Specific objectives */}
            <div className="flex flex-col gap-4">
              {SPECIFIC.map((obj, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#DB1A1A] text-white text-xs font-bold flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform shadow-sm shadow-red-200">
                    {i + 1}
                  </span>
                  <p className="text-sm text-[#444] leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — architecture diagram */}
          <div className="reveal-r lg:sticky lg:top-24">
            <div className="card p-6 shadow-sm">
              <div className="text-[10px] font-bold text-[#DB1A1A] tracking-[.16em] uppercase mb-5">System Architecture</div>
              <div className="flex flex-col gap-3">
                {ARCH.map((a) => (
                  <div key={a.num} className="flex items-center gap-3 bg-[#fafafa] rounded-xl px-4 py-3 border border-[#f0f0f0] hover:border-[rgba(219,26,26,.2)] hover:bg-[#fef2f2] transition-all group">
                    <span className="w-7 h-7 rounded-lg bg-[#DB1A1A] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {a.num}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-[#111] group-hover:text-[#DB1A1A] transition-colors">{a.label}</div>
                      <div className="text-[11px] text-[#888]">{a.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Arrow */}
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-gradient-to-b from-[#DB1A1A] to-[rgba(219,26,26,.2)]"/>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M8 0v8M3 5l5 5 5-5" stroke="#DB1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Dashboard */}
                <div className="bg-[#DB1A1A] rounded-xl px-4 py-4 text-center shadow-md shadow-red-200">
                  <div className="text-sm font-bold text-white">Unified Web Dashboard</div>
                  <div className="text-[11px] text-white/70 mt-0.5">React.js + FastAPI Backend</div>
                </div>
              </div>
            </div>

            {/* Sponsor badge */}
            <div className="mt-4 flex items-center gap-3 bg-[#fafafa] rounded-xl px-4 py-3 border border-[#f0f0f0]">
              <span className="text-xl">🏭</span>
              <div>
                <div className="text-[10px] text-[#888] uppercase tracking-wider font-semibold">Industry Partner</div>
                <div className="text-sm font-bold text-[#111]">INSEE Cement (Pvt) Ltd, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

