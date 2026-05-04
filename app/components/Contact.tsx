"use client";
import { useState } from "react";

const INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.239 2 5 4.239 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.761-2.239-5-5-5z" stroke="#DB1A1A" strokeWidth="1.7"/>
        <circle cx="10" cy="7" r="1.8" stroke="#DB1A1A" strokeWidth="1.7"/>
      </svg>
    ),
    label: "Our Location",
    value: "Peliyagoda, Colombo",
    sub: "Sri Lanka",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 2h2.5l1.5 4-2 1.5c.9 1.8 2.5 3.4 4.5 4.5L14 10l4 1.5v2.5C18 15.9 16.4 17 14.5 17 7.5 17 3 12.5 3 5.5 3 3.6 4.1 2 6 2z" stroke="#DB1A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone Number",
    value: "+94 76 378 4111",
    sub: "Mon–Fri, 8am–5pm",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#DB1A1A" strokeWidth="1.7"/>
        <path d="M2 7l8 5 8-5" stroke="#DB1A1A" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email Address",
    value: "INSEECCement@gmail.com",
    sub: "We reply within 24 hours",
  },
];

function Toast({ show }: { show: boolean }) {
  return (
    <div style={{
      position: "fixed", top: 16, right: 16, left: 16, zIndex: 9999,
      display: "flex", alignItems: "center", gap: 10,
      background: "#fff", border: "1px solid rgba(219,26,26,.2)",
      borderRadius: 14, padding: "14px 18px",
      boxShadow: "0 8px 32px rgba(219,26,26,.15), 0 2px 8px rgba(0,0,0,.08)",
      transition: "all .4s cubic-bezier(.16,1,.3,1)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(-16px)",
      pointerEvents: show ? "auto" : "none",
      maxWidth: 420, margin: "0 auto",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%", background: "#DB1A1A",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7l4 4 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <div style={{ fontSize: ".85rem", fontWeight: 700, color: "#111" }}>Email sent successfully!</div>
        <div style={{ fontSize: ".72rem", color: "#888", marginTop: 1 }}>We&apos;ll get back to you within 24 hours.</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [name, setName]       = useState("INSEE Cement");
  const [email, setEmail]     = useState("INSEECCement@gmail.com");
  const [message, setMessage] = useState("");
  const [toast, setToast]     = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setToast(true);
      setMessage("");
      setTimeout(() => setToast(false), 3000);
    }, 800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    background: "#fafafa", border: "1.5px solid #e5e5e5",
    borderRadius: 10, fontSize: ".875rem", color: "#111",
    outline: "none", transition: "border-color .2s, box-shadow .2s",
    fontFamily: "inherit",
  };

  const focusInput = (el: HTMLInputElement | HTMLTextAreaElement) => {
    el.style.borderColor = "#DB1A1A";
    el.style.boxShadow = "0 0 0 3px rgba(219,26,26,.08)";
  };
  const blurInput = (el: HTMLInputElement | HTMLTextAreaElement) => {
    el.style.borderColor = "#e5e5e5";
    el.style.boxShadow = "none";
  };

  return (
    <>
      <Toast show={toast} />

      <section id="contact" className="py-24 md:py-28 bg-[#fafafa] relative overflow-hidden">
        <div className="divider absolute top-0 inset-x-0" />
        <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: 0.4 }} />

        {/* Blobs */}
        <div className="absolute pointer-events-none" style={{ top: "10%", right: "5%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(219,26,26,.05) 0%,transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "10%", left: "5%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(219,26,26,.04) 0%,transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* ── Section header ── */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            {/* CONTACT US label — bigger & prominent */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              marginBottom: 12,
            }}>
              <div style={{ width: 24, height: 2.5, background: "#DB1A1A", borderRadius: 2, flexShrink: 0 }} />
              <span style={{
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#DB1A1A",
              }}>
                Contact Us
              </span>
            </div>

            {/* Red underline */}
            <div style={{
              width: 56, height: 2.5,
              background: "linear-gradient(90deg,#DB1A1A,#ff6b6b)",
              borderRadius: 2, margin: "0 auto 20px",
            }} />

            {/* Heading */}
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-.02em", marginBottom: 12,
            }}>
              <span style={{ color: "#111" }}>Get in </span>
              <span className="grad-text">Touch</span>
            </h2>
            <p style={{ fontSize: ".9rem", color: "#555", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              Have a question about the CementAI research? We&apos;d love to hear from you.
            </p>
          </div>

          {/* ── 2-column grid — perfectly aligned ── */}
          <div className="contact-grid">

            {/* ── LEFT column ── */}
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Info cards */}
              {INFO.map((info) => (
                <div key={info.label} className="card" style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "#fef2f2", border: "1px solid rgba(219,26,26,.12)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: ".65rem", fontWeight: 700, color: "#DB1A1A", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 2 }}>
                        {info.label}
                      </div>
                      <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#111" }}>{info.value}</div>
                      <div style={{ fontSize: ".72rem", color: "#888", marginTop: 1 }}>{info.sub}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Red sponsor card */}
              <div style={{
                background: "#DB1A1A", borderRadius: 20, padding: "20px 22px",
                boxShadow: "0 8px 24px rgba(219,26,26,.25)",
              }}>
                <div style={{ fontSize: ".62rem", fontWeight: 700, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 6 }}>
                  Industry Partner
                </div>
                <div style={{ fontSize: ".95rem", fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                  INSEE Cement (Pvt) Ltd
                </div>
                <div style={{ fontSize: ".78rem", color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>
                  Peliyagoda, Colombo, Sri Lanka<br />
                  SLIIT Final Year Research 2025–26
                </div>
              </div>
            </div>

            {/* ── RIGHT column — form ── */}
            <div className="card reveal" style={{ padding: 28, transitionDelay: ".1s" }}>
              {/* Top accent bar */}
              <div style={{ height: 3, background: "linear-gradient(90deg,#DB1A1A,#ff6b6b,transparent)", borderRadius: 2, marginBottom: 24 }} />

              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111", marginBottom: 20 }}>
                Send us a message
              </h3>

              {/* Name */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#444", marginBottom: 5 }}>Your Name</label>
                <input
                  type="text" value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => focusInput(e.target as HTMLInputElement)}
                  onBlur={(e) => blurInput(e.target as HTMLInputElement)}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#444", marginBottom: 5 }}>Email Address</label>
                <input
                  type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => focusInput(e.target as HTMLInputElement)}
                  onBlur={(e) => blurInput(e.target as HTMLInputElement)}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#444", marginBottom: 5 }}>Message</label>
                <textarea
                  rows={5} value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                  onFocus={(e) => focusInput(e.target as HTMLTextAreaElement)}
                  onBlur={(e) => blurInput(e.target as HTMLTextAreaElement)}
                />
              </div>

              {/* Button */}
              <button
                onClick={handleSend}
                disabled={sending || !message.trim()}
                style={{
                  width: "100%", padding: "13px 24px",
                  background: sending || !message.trim()
                    ? "#e5e5e5"
                    : "linear-gradient(135deg,#DB1A1A,#ff4d4d)",
                  color: sending || !message.trim() ? "#aaa" : "white",
                  fontSize: ".875rem", fontWeight: 700,
                  borderRadius: 12, border: "none",
                  cursor: sending || !message.trim() ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: sending || !message.trim() ? "none" : "0 6px 20px rgba(219,26,26,.28)",
                  transition: "all .25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!sending && message.trim()) {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 28px rgba(219,26,26,.38)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "none";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = sending || !message.trim() ? "none" : "0 6px 20px rgba(219,26,26,.28)";
                }}
              >
                {sending ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ animation: "spin .8s linear infinite" }}>
                      <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="2" strokeDasharray="18" strokeDashoffset="9"/>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M2 7.5h11M8 3l4.5 4.5L8 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              <p style={{ fontSize: ".7rem", color: "#bbb", textAlign: "center", marginTop: 10 }}>
                We&apos;ll respond within 24 hours · Project 25-26J-250
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}


