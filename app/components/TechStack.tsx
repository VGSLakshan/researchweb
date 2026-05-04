const TECHS = [
  { icon:"🎯", label:"YOLOv9",       cat:"Vision" },
  { icon:"🧠", label:"U-Net",        cat:"Segmentation" },
  { icon:"📱", label:"MobileNetV2",  cat:"Classification" },
  { icon:"⚡", label:"XGBoost",      cat:"ML" },
  { icon:"🌿", label:"LightGBM",     cat:"ML" },
  { icon:"🚀", label:"FastAPI",      cat:"Backend" },
  { icon: "🟢",label: "Node.js",     cat: "Backend" },
  { icon:"⚛️", label:"React.js",     cat:"Frontend" },
  { icon:"🔌", label:"ESP 32",       cat:"IoT" },
  { icon:"🍃", label:"MongoDB",      cat:"Database" },
  { icon:"🐘", label:"PostgreSQL",   cat:"Database" },
  { icon:"🐍", label:"Python",       cat:"Language" },
  { icon:"🔶", label:"TensorFlow",   cat:"DL Framework" },
  { icon:"🔥", label:"PyTorch",      cat:"DL Framework" },
  { icon:"🐳", label:"Docker",       cat:"DevOps" },
  { icon:"👁️", label:"OpenCV",       cat:"Vision" },
  { icon:"📊", label:"Scikit-learn", cat:"ML" },
];

const HW = [
  { icon: "📡", label: "VL53L0X Distance Sensor", cat: "Sensor" },
  { icon: "🟢", label: "ESP32 Microcontroller", cat: "Controller" },
  { icon: "⚙️", label: "Stepper Motor", cat: "Actuator" },
  { icon: "🔌", label: "Power Supply", cat: "Hardware" },
  { icon: "🛞", label: "Plastic 3D Print", cat: "Mechanical" }
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0"/>
      <div className="absolute inset-0 line-grid pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14 reveal">
          <div className="sec-label mb-4">Tech Stack</div>
          <div className="accent-bar mb-5"/>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            Technologies <span className="grad-text">Used</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            Built on a modern open-source stack — from deep learning frameworks to IoT hardware
            and cloud-ready deployment tools.
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2.5 mb-12 reveal">
          {TECHS.map((t) => (
            <div key={t.label}
              className="flex items-center gap-2.5 bg-white border border-[#e5e5e5] rounded-full px-4 py-2.5 hover:border-[rgba(219,26,26,.25)] hover:bg-[#fef2f2] hover:-translate-y-0.5 transition-all duration-200 cursor-default group shadow-sm">
              <span className="text-lg">{t.icon}</span>
              <span className="text-sm font-semibold text-[#333] group-hover:text-[#DB1A1A] transition-colors">{t.label}</span>
              <span className="text-[10px] text-[#aaa] font-medium">{t.cat}</span>
            </div>
          ))}
        </div>

        {/* Hardware grid */}
        <div className="reveal">
          <div className="bg-[#fafafa] rounded-2xl border border-[#e5e5e5] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-bold text-[#DB1A1A] tracking-[.16em] uppercase">IoT Hardware Components</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {HW.map((h) => (
                <div key={h.label}
                  className="bg-white rounded-xl p-4 text-center border border-[#e5e5e5] hover:border-[rgba(219,26,26,.2)] hover:bg-[#fef2f2] transition-all cursor-default group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{h.icon}</div>
                  <div className="text-[11px] font-medium text-[#444] leading-tight">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

