const PROBLEMS = [
  {
    icon: "🔬",
    title: "Manual Microscopy",
    desc: "Cement raw meal particle analysis relies on subjective visual inspection. Results vary between operators and shifts, making consistent quality standards impossible to maintain at scale.",
    stat: "75%",
    statLabel: "of analysts spend 1+ hour per session",
  },
  {
    icon: "⏱️",
    title: "Delayed Strength Testing",
    desc: "Compressive strength results require 7–28 day curing periods before reliable data is available, preventing timely process adjustments and increasing material wastage.",
    stat: "28 days",
    statLabel: "wait time for reliable results",
  },
  {
    icon: "⚠️",
    title: "Operator-Dependent Analysis",
    desc: "Crack detection and cube measurement depend on manual calipers and subjective visual judgment — introducing inconsistency and limiting industrial throughput.",
    stat: "High",
    statLabel: "human error rate in QC",
  },
];

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="absolute inset-0 line-grid pointer-events-none"/>
      <div className="divider absolute top-0 inset-x-0"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="sec-label mb-4">Research Problem</div>
          <div className="accent-bar mb-5"/>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight mb-5">
            Traditional Cement QC is{" "}
            <span className="grad-text-warm">Slow, Subjective</span>
            <br/>& Error-Prone
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            The cement industry relies on manual, fragmented quality control methods that are
            labour-intensive, inconsistent, and unable to meet modern industrial demands.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="card p-7 reveal group" style={{ transitionDelay:`${i*.1}s` }}>
              {/* Top accent */}
              <div className="w-full h-0.5 bg-gradient-to-r from-[#DB1A1A] to-transparent rounded-full mb-6"/>
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#fef2f2] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111] mb-3">{p.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed mb-6">{p.desc}</p>
              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-5 border-t border-[#f0f0f0]">
                <span className="text-2xl font-bold text-[#DB1A1A]">{p.stat}</span>
                <span className="text-xs text-[#888]">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="reveal">
          <div className="max-w-3xl mx-auto bg-white border border-[rgba(219,26,26,.12)] rounded-2xl p-8 text-center shadow-sm shadow-red-50">
            <div className="w-10 h-10 rounded-full bg-[#fef2f2] flex items-center justify-center text-xl mx-auto mb-4">💡</div>
            <p className="text-[15px] text-[#444] leading-relaxed italic">
              &ldquo;The core research problem is how to develop a scalable, reliable, and
              operator-independent automated system that simultaneously addresses all major
              aspects of cement quality assessment within a single unified framework.&rdquo;
            </p>
            <div className="mt-4 text-[10px] font-bold tracking-[.16em] text-[#DB1A1A] uppercase">
              — Research Problem Statement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

