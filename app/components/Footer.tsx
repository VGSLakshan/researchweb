const NAV = [
  { label:"Overview",   href:"#problem" },
  { label:"Components", href:"#components" },
  { label:"Results",    href:"#results" },
  { label:"Team",       href:"#team" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-[#DB1A1A] flex items-center justify-center shadow-md shadow-red-900">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="white"/>
                  <circle cx="4" cy="5" r="1.6" fill="white" opacity=".7"/>
                  <circle cx="14" cy="5" r="1.6" fill="white" opacity=".7"/>
                  <circle cx="4" cy="13" r="1.6" fill="white" opacity=".5"/>
                  <circle cx="14" cy="13" r="1.6" fill="white" opacity=".5"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-[15px] tracking-tight">CementAI</div>
                <div className="text-[9px] font-semibold tracking-[.18em] text-[#DB1A1A] uppercase">Research</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Advancing Industrial AI for Sri Lanka&apos;s Cement Industry
            </p>
            <div className="flex flex-col gap-1 text-xs text-white/30">
              <span>Project ID: 25-26J-250</span>
              <span>B.Sc. (Hons) Information Technology</span>
              <span>SLIIT · May 2026</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold tracking-[.16em] uppercase text-white/30 mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a key={n.label} href={n.href}
                  className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#DB1A1A] opacity-0 group-hover:opacity-100 transition-opacity"/>
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* Research info */}
          <div>
            <p className="text-[10px] font-bold tracking-[.16em] uppercase text-white/30 mb-5">Research Info</p>
            <div className="flex flex-col gap-4 text-sm">
              {[
                { k:"Sponsor",       v:"INSEE Cement (Private) Limited, Sri Lanka" },
                { k:"Supervisor",    v:"Dr. Dinuka Wijendra" },
                { k:"Co-Supervisor", v:"Ms. Jenny Krishara" },
                { k:"Conference",    v:"ICHORA 2026" },
              ].map((r) => (
                <div key={r.k}>
                  <div className="text-[10px] text-white/25 uppercase tracking-wider font-semibold mb-0.5">{r.k}</div>
                  <div className="text-white/60">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 CementAI Research Group — SLIIT. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DB1A1A]"/>
            <span className="text-xs text-white/25">Department of Information Technology · SLIIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

