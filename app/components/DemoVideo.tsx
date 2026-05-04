"use client";

export default function DemoVideo() {
  return (
    <section id="demo" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.4 }} />

      {/* Soft red blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(219,26,26,.06) 0%,transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: "min(640px, 100%)", margin: "0 auto 40px" }}
        >
          <div className="sec-label mb-4" style={{ justifyContent: "center" }}>
            Demo Video
          </div>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            See <span className="grad-text">CementAI</span> in Action
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.7 }}>
            Watch a full walkthrough of the integrated AI and IoT-based cement quality
            assessment platform — from microscopy image analysis to real-time strength
            prediction and clinker phase classification.
          </p>
        </div>

        {/* Video embed */}
        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <div
            style={{
              position: "relative",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {/* Glow ring behind the player */}
            <div
              style={{
                position: "absolute",
                inset: -2,
                borderRadius: 24,
                background:
                  "linear-gradient(135deg, rgba(219,26,26,.25), rgba(255,107,107,.15), rgba(219,26,26,.1))",
                filter: "blur(1px)",
                zIndex: 0,
              }}
            />

            {/* Player wrapper */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 22,
                overflow: "hidden",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,.14), 0 8px 24px rgba(219,26,26,.1)",
                background: "#000",
                aspectRatio: "16 / 9",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/On7oHmIUWXE?rel=0&modestbranding=1&color=white"
                title="CementAI — System Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Caption row */}
          <div
            style={{
              maxWidth: 900,
              margin: "20px auto 0",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#DB1A1A",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.8rem", color: "#888", fontWeight: 500 }}>
                CementAI — Full System Demonstration · SLIIT Final Year Project 2025–26
              </span>
            </div>
            <a
              href="https://youtu.be/On7oHmIUWXE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#DB1A1A",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 100,
                border: "1.5px solid rgba(219,26,26,.2)",
                background: "#fef2f2",
                transition: "background .2s, border-color .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fde8e8";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(219,26,26,.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fef2f2";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(219,26,26,.2)";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 6.5h9M7 2l4.5 4.5L7 11"
                  stroke="#DB1A1A"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>

        {/* Feature chips below video */}
        <div
          className="reveal"
          style={{
            maxWidth: 900,
            margin: "32px auto 0",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            transitionDelay: "0.2s",
          }}
        >
          {[
            "🎯 Particle Identification",
            "🧠 Crack Detection",
            "⚡ Strength Prediction",
            "📱 Phase Classification",
            "📊 Unified Dashboard",
            "📄 Automated Reports",
          ].map((chip) => (
            <span key={chip} className="tag" style={{ fontSize: "0.75rem", padding: "5px 14px" }}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

