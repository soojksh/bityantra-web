import { useEffect, useState } from "react";
import { TrendingUp, Cpu, Check, Users, MessageCircle } from "lucide-react";
import "./services.css";

export default function Services() {
  const [activeProduct, setActiveProduct] = useState("website-dev");

  // ScrollSpy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["website-dev", "mobile-app", "digital-marketing", "iot-hardware"];
      const navHeight = 90;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
            setActiveProduct(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 90;
      const offset = element.getBoundingClientRect().top + window.scrollY - (navHeight + 20);
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="products-section">
        <div className="products-container">
          {/* Sidebar */}
          <div className="products-sidebar">
            <button
              className={`sidebar-item ${activeProduct === "website-dev" ? "active" : ""}`}
              onClick={() => scrollToSection("website-dev")}
            >
              <h3>Website Development</h3>
            </button>
            <button
              className={`sidebar-item ${activeProduct === "mobile-app" ? "active" : ""}`}
              onClick={() => scrollToSection("mobile-app")}
            >
              <h3>Mobile Apps</h3>
            </button>
            <button
              className={`sidebar-item ${activeProduct === "digital-marketing" ? "active" : ""}`}
              onClick={() => scrollToSection("digital-marketing")}
            >
              <h3>Digital Marketing</h3>
            </button>
            <button
              className={`sidebar-item ${activeProduct === "iot-hardware" ? "active" : ""}`}
              onClick={() => scrollToSection("iot-hardware")}
            >
              <h3>IoT & Hardware</h3>
            </button>
          </div>

          {/* Content */}
          <div className="products-content">
            {/* Website Development */}
            <div id="website-dev" className="product-display">
              <h2>Website Development</h2>
              <p>Clean, responsive sites that convert visitors into customers</p>

              {/* Same container style as mobile-app */}
              <div className="service-panel service-panel--web">
                {/* Visual LEFT */}
                <div className="service-panel-visual">
                  <div className="desk-rec" aria-hidden="true">
                    {/* Monitor */}
                    <div className="desk-monitor">
                      {/* Bezel */}
                      <div className="desk-bezel">
                        {/* Top bar */}
                        <div className="desk-topbar">
                          <div className="desk-dots">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                          </div>
                          <div className="desk-tab">Search</div>
                          <div className="desk-url">www.search.dev</div>
                          <div className="desk-right">
                            <span className="desk-pill" />
                            <span className="desk-pill soft" />
                          </div>
                        </div>

                        {/* Screen */}
                        <div className="desk-screen">
                          {/* Screen grain */}
                          <div className="desk-grain" />

                          {/* Search header */}
                          <div className="desk-header">
                            <div className="desk-logo" />
                            <div className="desk-searchbar">
                              <span className="desk-typed">
                                website development agency near me
                              </span>
                              <span className="desk-caret" />
                            </div>
                            <div className="desk-tools">
                              <div className="desk-tool" />
                              <div className="desk-tool" />
                              <div className="desk-tool" />
                            </div>
                          </div>

                          {/* Content split (results + preview) */}
                          <div className="desk-content">
                            {/* Results */}
                            <div className="desk-results">
                              {Array.from({ length: 6 }).map((_, i) => (
                                <div className={`desk-result ${i === 1 ? "active" : ""}`} key={i}>
                                  <div className="desk-title" />
                                  <div className="desk-urlrow">
                                    <span className="desk-favicon" />
                                    <div className="desk-urltext" />
                                  </div>
                                  <div className="desk-desc w90" />
                                  <div className={`desk-desc ${i % 2 === 0 ? "w75" : "w65"}`} />
                                </div>
                              ))}
                            </div>

                            {/* Website preview (scrolling) */}
                            <div className="desk-preview">
                              <div className="desk-preview-top">
                                <span className="pv-chip" />
                                <span className="pv-chip soft" />
                                <span className="pv-chip soft2" />
                              </div>

                              <div className="desk-viewport">
                                <div className="desk-page">
                                  <div className="page-hero">
                                    <div className="page-h1" />
                                    <div className="page-p w85" />
                                    <div className="page-p w60" />
                                    <div className="page-cta">
                                      <div className="page-btn" />
                                      <div className="page-btn ghost" />
                                    </div>
                                  </div>

                                  <div className="page-row">
                                    <div className="page-card" />
                                    <div className="page-card" />
                                    <div className="page-card" />
                                  </div>

                                  <div className="page-section">
                                    <div className="page-sec-title w70" />
                                    <div className="page-grid">
                                      <div className="page-rowline" />
                                      <div className="page-rowline" />
                                      <div className="page-rowline" />
                                      <div className="page-rowline" />
                                    </div>
                                  </div>

                                  <div className="page-section">
                                    <div className="page-sec-title w55" />
                                    <div className="page-chart">
                                      <div className="chart-grid">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                      </div>
                                      <svg className="chart-line" viewBox="0 0 220 90" preserveAspectRatio="none">
                                        <path d="M6,70 C35,66 40,58 62,55 C92,50 98,36 122,34 C145,32 155,20 178,22 C200,24 206,14 214,12" />
                                      </svg>
                                      <div className="chart-dot" />
                                    </div>
                                  </div>

                                  <div className="page-footer">
                                    <div className="page-foot w50" />
                                    <div className="page-foot w35" />
                                  </div>
                                </div>

                                {/* duplicate for seamless scroll */}
                                <div className="desk-page" aria-hidden="true">
                                  <div className="page-hero">
                                    <div className="page-h1" />
                                    <div className="page-p w85" />
                                    <div className="page-p w60" />
                                    <div className="page-cta">
                                      <div className="page-btn" />
                                      <div className="page-btn ghost" />
                                    </div>
                                  </div>

                                  <div className="page-row">
                                    <div className="page-card" />
                                    <div className="page-card" />
                                    <div className="page-card" />
                                  </div>

                                  <div className="page-section">
                                    <div className="page-sec-title w70" />
                                    <div className="page-grid">
                                      <div className="page-rowline" />
                                      <div className="page-rowline" />
                                      <div className="page-rowline" />
                                      <div className="page-rowline" />
                                    </div>
                                  </div>

                                  <div className="page-section">
                                    <div className="page-sec-title w55" />
                                    <div className="page-chart">
                                      <div className="chart-grid">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                      </div>
                                      <svg className="chart-line" viewBox="0 0 220 90" preserveAspectRatio="none">
                                        <path d="M6,70 C35,66 40,58 62,55 C92,50 98,36 122,34 C145,32 155,20 178,22 C200,24 206,14 214,12" />
                                      </svg>
                                      <div className="chart-dot" />
                                    </div>
                                  </div>

                                  <div className="page-footer">
                                    <div className="page-foot w50" />
                                    <div className="page-foot w35" />
                                  </div>
                                </div>
                              </div>

                              {/* Scroll bar */}
                              <div className="desk-scrollbar">
                                <span className="desk-scrollthumb" />
                              </div>
                            </div>
                          </div>

                          {/* Cursor */}
                          <div className="desk-cursor">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M4 3l7.8 17.2 2-6 6-2L4 3z"
                                fill="rgba(255,255,255,0.96)"
                                stroke="rgba(15,23,42,0.35)"
                                strokeWidth="1"
                              />
                            </svg>
                            <span className="desk-click" />
                          </div>
                        </div>
                      </div>

                      {/* Monitor stand */}
                      <div className="desk-stand">
                        <div className="desk-neck" />
                        <div className="desk-base" />
                      </div>
                    </div>

                    {/* Soft shadow/glow outside monitor only */}
                    <div className="desk-shadow" />
                  </div>
                </div>

                {/* Text RIGHT */}
                <div className="service-panel-text">
                  <h3>Web Development</h3>
                  <p>Clean UI, fast performance, and scalable architecture — built for growth.</p>

                  <div className="service-panel-bullets">
                    {["Responsive", "SEO-ready", "Secure"].map((t) => (
                      <div className="service-panel-pill" key={t}>
                        <Check size={16} style={{ display: "inline", marginRight: "8px" }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Application */}
            <div id="mobile-app" className="product-display">
              <h2>Mobile Application</h2>
              <p>Android and iOS apps that users love</p>

              <div
                style={{
                  marginTop: "24px",
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  borderRadius: "20px",
                  padding: "40px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "32px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: "700", color: "white", marginBottom: "12px" }}>
                    Native & Cross-Platform
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.95)", marginBottom: "20px" }}>
                    Beautiful, performant apps for iOS and Android
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {["React Native", "Flutter", "Native iOS/Android"].map((tech) => (
                      <div
                        key={tech}
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "500",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <Check size={16} style={{ display: "inline", marginRight: "8px" }} />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Mockup (real-like) */}
                <div
                  style={{
                    flex: "1 1 280px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="mrec-wrap" aria-hidden="true">
                    <div className="mrec-phone">
                      {/* Bezel */}
                      <div className="mrec-bezel">
                        <div className="mrec-notch" />

                        {/* Screen */}
                        <div className="mrec-screen">
                          <div className="mrec-grain" />

                          {/* Status bar */}
                          <div className="mrec-status">
                            <span className="mrec-time">9:41</span>
                            <span className="mrec-signal" />
                            <span className="mrec-wifi" />
                            <span className="mrec-batt" />
                          </div>

                          {/* Search header (typing) */}
                          <div className="mrec-header">
                            <div className="mrec-avatar" />
                            <div className="mrec-search">
                              <span className="mrec-typed">best mobile app ui inspiration</span>
                              <span className="mrec-caret" />
                            </div>
                            <div className="mrec-chip" />
                          </div>

                          {/* Home icons (tap → open) */}
                          <div className="mrec-home">
                            <div className="mrec-icons">
                              {["Chat", "Shop", "Bank", "Maps", "Music", "Camera"].map((t) => (
                                <div className="mrec-icon" key={t}>
                                  <div className="mrec-icon-badge" />
                                  <div className="mrec-icon-square" />
                                  <div className="mrec-icon-label" />
                                </div>
                              ))}
                            </div>

                            {/* Opened app card */}
                            <div className="mrec-app">
                              <div className="mrec-appbar">
                                <div className="mrec-appbar-left">
                                  <div className="mrec-dot" />
                                  <div className="mrec-app-title" />
                                </div>
                                <div className="mrec-appbar-actions">
                                  <span className="mrec-mini-btn" />
                                  <span className="mrec-mini-btn" />
                                </div>
                              </div>

                              {/* Feed scroll loop */}
                              <div className="mrec-feed">
                                <div className="mrec-track">
                                  {Array.from({ length: 6 }).map((_, i) => (
                                    <div className="mrec-card" key={`t1-${i}`}>
                                      <div className="mrec-card-top">
                                        <span className="mrec-pill" />
                                        <span className="mrec-pill soft" />
                                      </div>
                                      <div className="mrec-hero" />
                                      <div className="mrec-lines">
                                        <div className="mrec-line w90" />
                                        <div className="mrec-line w70" />
                                      </div>
                                      <div className="mrec-actions">
                                        <span className="mrec-ico like" />
                                        <span className="mrec-ico msg" />
                                        <span className="mrec-ico share" />
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mrec-track" aria-hidden="true">
                                  {Array.from({ length: 6 }).map((_, i) => (
                                    <div className="mrec-card" key={`t2-${i}`}>
                                      <div className="mrec-card-top">
                                        <span className="mrec-pill" />
                                        <span className="mrec-pill soft" />
                                      </div>
                                      <div className="mrec-hero" />
                                      <div className="mrec-lines">
                                        <div className="mrec-line w90" />
                                        <div className="mrec-line w70" />
                                      </div>
                                      <div className="mrec-actions">
                                        <span className="mrec-ico like" />
                                        <span className="mrec-ico msg" />
                                        <span className="mrec-ico share" />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom tab bar */}
                          <div className="mrec-tabbar">
                            <span className="mrec-tab active" />
                            <span className="mrec-tab" />
                            <span className="mrec-tab" />
                            <span className="mrec-tab" />
                          </div>

                          {/* Finger/cursor + tap ripple */}
                          <div className="mrec-pointer">
                            <span className="mrec-finger" />
                            <span className="mrec-tap" />
                          </div>
                        </div>
                      </div>

                      {/* Outer glow */}
                      <div className="mrec-glow" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Digital Marketing */}
            <div id="digital-marketing" className="product-display">
              <h2>Digital Marketing</h2>
              <p>Data-driven strategies that grow your business</p>

              <div
                style={{
                  marginTop: "24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                    borderRadius: "16px",
                    padding: "28px",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <TrendingUp size={40} style={{ marginBottom: "16px", opacity: 0.9 }} />
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>SEO Optimization</h3>
                  <p style={{ fontSize: "13px", opacity: 0.95, marginBottom: "16px" }}>
                    Rank higher on search engines and drive organic traffic
                  </p>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                      padding: "12px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div style={{ fontSize: "32px", fontWeight: "700", marginBottom: "4px" }}>+150%</div>
                    <div style={{ fontSize: "12px", opacity: 0.9 }}>Average traffic increase</div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "-30px",
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      filter: "blur(30px)",
                    }}
                  ></div>
                </div>

                <div
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <MessageCircle size={40} color="#fa709a" style={{ marginBottom: "16px" }} />
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>Social Media</h3>
                  <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px" }}>
                    Build and engage your community across platforms
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
                      <span
                        key={platform}
                        style={{
                          fontSize: "11px",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          background: "#fee140",
                          color: "#0f172a",
                          fontWeight: "500",
                        }}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <Users size={40} color="#fa709a" style={{ marginBottom: "16px" }} />
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>Content Strategy</h3>
                  <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px" }}>
                    Create compelling content that converts
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li style={{ fontSize: "12px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={16} color="#fa709a" /> Blog posts & articles
                    </li>
                    <li style={{ fontSize: "12px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={16} color="#fa709a" /> Video marketing
                    </li>
                    <li style={{ fontSize: "12px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={16} color="#fa709a" /> Email campaigns
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IoT & Hardware */}
            <div id="iot-hardware" className="product-display">
              <h2>IoT & Hardware</h2>
              <p>Smart devices and embedded systems for the connected world</p>

              <div
                style={{
                  marginTop: "24px",
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  borderRadius: "20px",
                  padding: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
                    <div style={{ flex: "1 1 300px" }}>
                      <Cpu size={48} color="#1d9bf0" style={{ marginBottom: "16px" }} />
                      <h3 style={{ fontSize: "24px", fontWeight: "700", color: "white", marginBottom: "12px" }}>
                        Connected Solutions
                      </h3>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginBottom: "20px" }}>
                        From prototypes to production-ready IoT devices
                      </p>

                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {["Arduino & Raspberry Pi", "Custom PCB Design", "Cloud Integration"].map((tech) => (
                          <div
                            key={tech}
                            style={{
                              background: "rgba(29, 155, 240, 0.1)",
                              padding: "12px 16px",
                              borderRadius: "12px",
                              color: "#1d9bf0",
                              fontSize: "14px",
                              fontWeight: "500",
                              border: "1px solid rgba(29, 155, 240, 0.3)",
                            }}
                          >
                            <Check size={16} style={{ display: "inline", marginRight: "8px" }} />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* IoT Device Illustration */}
                    <div style={{ flex: "1 1 280px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <div
                        style={{
                          width: "280px",
                          height: "280px",
                          background: "rgba(29, 155, 240, 0.1)",
                          borderRadius: "20px",
                          padding: "24px",
                          border: "2px solid rgba(29, 155, 240, 0.3)",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* Central Device */}
                        <div
                          style={{
                            width: "120px",
                            height: "120px",
                            background: "#1d9bf0",
                            borderRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 40px rgba(29, 155, 240, 0.4)",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          <Cpu size={60} color="white" />
                        </div>

                        {/* Connection Points */}
                        {[
                          { top: "20px", left: "20px", delay: "0s" as const },
                          { top: "20px", right: "20px", delay: "0.3s" as const },
                          { bottom: "20px", left: "20px", delay: "0.6s" as const },
                          { bottom: "20px", right: "20px", delay: "0.9s" as const },
                        ].map((pos, i) => (
                          <div
                            key={i}
                            style={{
                              position: "absolute",
                              ...(pos as any),
                              width: "40px",
                              height: "40px",
                              background: "rgba(29, 155, 240, 0.2)",
                              borderRadius: "50%",
                              border: "2px solid #1d9bf0",
                              animation: `pulse 2s ease-in-out infinite ${pos.delay}`,
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                background: "#1d9bf0",
                                transform: "scale(0.5)",
                              }}
                            ></div>
                          </div>
                        ))}

                        <style>{`
                          @keyframes pulse {
                            0%, 100% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(1.2); opacity: 0.7; }
                          }
                        `}</style>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Circuit board pattern background */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.05,
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, #1d9bf0 10px, #1d9bf0 11px),
                                     repeating-linear-gradient(90deg, transparent, transparent 10px, #1d9bf0 10px, #1d9bf0 11px)`,
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}