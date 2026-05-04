"use client";
import { useEffect, useRef, useState } from "react";

const METRICS = [
  { val:"88",   suf:"%",  label:"mAP@0.5",           sub:"Particle Identification", model:"YOLOv9c" },
  { val:"90.15",suf:"%",  label:"Validation Accuracy", sub:"Crack Detection",        model:"U-Net Optimised" },
  { val:"0.89", suf:"",   label:"R² Score",            sub:"Strength Prediction",    model:"XGBoost + LightGBM" },
  { val:"91.6", suf:"%",  label:"Validation Accuracy", sub:"Phase Classification",   model:"MobileNetV2 + TL" },
];

function Counter({ val, suf }: { val: string; suf: string }) {
  const [n, setN] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
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
  return <div ref={ref} className="tabular-nums">{n}{suf}</div>;
}

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0"/>
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16 reveal">
          <div className="sec-label mb-4">Results</div>
          <div className="accent-bar mb-5"/>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            Validated on Real Industrial Data<br/>
            <span className="grad-text">from INSEE Cement</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            All four components were rigorously evaluated using industrial datasets, achieving
            performance that meets or surpasses existing literature benchmarks.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((m, i) => (
            <div key={m.label + m.sub} className="metric-card p-6 reveal" style={{ transitionDelay:`${i*.1}s` }}>
              <div className="text-3xl font-bold text-[#DB1A1A] leading-none mb-1">
                <Counter val={m.val} suf={m.suf}/>
              </div>
              <div className="text-sm font-semibold text-[#333] mt-1">{m.label}</div>
              <div className="text-xs text-[#888] mt-0.5">{m.sub}</div>
              <div className="mt-5 pt-4 border-t border-[#f0f0f0]">
                <span className="tag">{m.model}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

