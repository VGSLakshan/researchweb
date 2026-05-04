const DOCS = [
  {
    title: "Group Thesis Report",
    sub: "Final Dissertation — May 2026",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/GroupFinalThesis.pdf",
    download: "GroupFinalThesis.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 3h11l6 6v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="#DB1A1A" strokeWidth="1.7" fill="none"/>
        <path d="M16 3v6h6" stroke="#DB1A1A" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M8 13h10M8 17h7" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Research Paper",
    sub: "ICHORA 2026 Conference Paper",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/An Integrated AI and IoT-Based Framework for Automated Cement Quality Assessment.pdf",
    download: "CementAI_Research_Paper_ICHORA2026.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 2L3 7v12l10 5 10-5V7L13 2z" stroke="#DB1A1A" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M13 2v17M3 7l10 5 10-5" stroke="#DB1A1A" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Proposal Presentation",
    sub: "Project Proposal Slides",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/Cement_Proposal_Presentation.pdf",
    download: "Cement_Proposal_Presentation.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="4" width="22" height="15" rx="2" stroke="#DB1A1A" strokeWidth="1.7"/>
        <path d="M13 19v4M9 23h8" stroke="#DB1A1A" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M9 11l3 3 5-5" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Progress Report 1",
    sub: "Research Progress Report — PP1",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/Cement_RP_250_PP1.pdf",
    download: "Cement_RP_250_PP1.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="20" height="20" rx="3" stroke="#DB1A1A" strokeWidth="1.7"/>
        <path d="M8 9h10M8 13h10M8 17h6" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Progress Report 2",
    sub: "Research Progress Report — PP2",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/Cement_RP_250_PP2.pdf",
    download: "Cement_RP_250_PP2.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="20" height="20" rx="3" stroke="#DB1A1A" strokeWidth="1.7"/>
        <path d="M8 9h10M8 13h10M8 17h6" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "TAF Final Document",
    sub: "IT4010 TAF — 2025 Final Doc",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/IT4010-TAF-2025_Final Doc.pdf",
    download: "IT4010-TAF-2025_Final_Doc.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 3h11l6 6v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="#DB1A1A" strokeWidth="1.7" fill="none"/>
        <path d="M16 3v6h6" stroke="#DB1A1A" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M8 13h10M8 17h7" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "ICHORA 2026 Acceptance",
    sub: "Conference Acceptance Letter",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/Acceptance_Letter_ICHORA2026_ID_283.pdf",
    download: "Acceptance_Letter_ICHORA2026.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="20" height="20" rx="3" stroke="#DB1A1A" strokeWidth="1.7"/>
        <path d="M8 13l4 4 6-6" stroke="#DB1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "ICHORA 2026 Receipt",
    sub: "Conference Payment Receipt",
    type: "PDF",
    btnLabel: "Download",
    href: "/documents/receipt_ICHORA2026.pdf",
    download: "receipt_ICHORA2026.pdf",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 3h18v18l-3-2-3 2-3-2-3 2-3-2-3 2V3z" stroke="#DB1A1A" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8 9h10M8 13h7" stroke="#DB1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Documents() {
  return (
    <section id="documents" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0"/>
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14 reveal">
          <div className="sec-label mb-4">Documents</div>
          <div className="accent-bar mb-5"/>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] mb-5 leading-tight">
            Project <span className="grad-text">Documents</span>
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed">
            Access the full research documentation — thesis report, conference paper,
            proposals, progress reports, and official letters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DOCS.map((d, i) => (
            <div
              key={d.title}
              className="card p-6 flex flex-col reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-5">
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "#fef2f2", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {d.icon}
                </div>
                <span className="tag">{d.type}</span>
              </div>

              <h3 className="text-sm font-bold text-[#111] mb-1">{d.title}</h3>
              <p className="text-xs text-[#888] mb-5 flex-1">{d.sub}</p>

              <a
                href={d.href}
                download={d.download}
                className="btn-red w-full justify-center text-sm"
                style={{ textDecoration: "none" }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v8M2.5 6l4 4 4-4M1 11h11" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {d.btnLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Individual Final Proposals */}
        <div className="mt-14 reveal">
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
            <div className="accent-bar" style={{ width:24 }}/>
            <h3 style={{ fontSize:"1rem", fontWeight:700, color:"#111" }}>
              Individual Final Proposals
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name:"Koralage K.Y.P",       id:"IT22584472", file:"/documents/IT22584472_Final_Proposal.pdf", dl:"IT22584472_Final_Proposal.pdf" },
              { name:"Lakshan V.G.S",         id:"IT22562210", file:"/documents/IT22562210_Final_Proposal.pdf", dl:"IT22562210_Final_Proposal.pdf" },
              { name:"Weerasooriya K.H.P",    id:"IT22368034", file:"/documents/IT22368034_Final_Proposal.pdf", dl:"IT22368034_Final_Proposal.pdf" },
              { name:"Abeywickrama W.H.C.A",  id:"IT22640284", file:"/documents/IT22640284_Final_Proposal.pdf", dl:"IT22640284_Final_Proposal.pdf" },
            ].map((p, i) => (
              <div key={p.id} className="card p-6 flex flex-col reveal" style={{ transitionDelay:`${i*.07}s` }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
                  <div style={{
                    width:44, height:44, borderRadius:12,
                    background:"#DB1A1A", display:"flex",
                    alignItems:"center", justifyContent:"center", flexShrink:0,
                    boxShadow:"0 4px 12px rgba(219,26,26,.25)",
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 2h8l5 5v11a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M12 2v5h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 10h8M6 13h5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="tag">PDF</span>
                </div>
                <div style={{ fontSize:".85rem", fontWeight:700, color:"#111", marginBottom:2 }}>{p.name}</div>
                <div style={{ fontSize:".7rem", color:"#888", fontWeight:500, fontFamily:"monospace", marginBottom:16, flex:1 }}>{p.id}</div>
                <a
                  href={p.file}
                  download={p.dl}
                  className="btn-red w-full justify-center text-sm"
                  style={{ textDecoration:"none" }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 1v8M2.5 6l4 4 4-4M1 11h11" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

