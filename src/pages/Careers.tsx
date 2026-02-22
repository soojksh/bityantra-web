import "../index.css";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Careers() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! (This is a demo)");
  };

  return (
    <div className="career-section">
      {/* HERO */}
      <div className="career-hero">
        <div className="career-hero-inner">
          <div className="career-hero-left">
            <div className="section-badge">
              <span>Careers</span>
              <svg className="badge-accent" viewBox="0 0 120 8" fill="none">
                <path
                  d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h1 className="career-hero-title">Build products that matter.</h1>
            <p className="career-hero-subtitle">
              Join bitYantra as an intern, collaborator or teammate. Design, ship and grow real products.
            </p>

            {/* <div className="career-hero-chips">
              <span className="chip">
                <span className="chip-dot"></span> Internships
              </span>
              <span className="chip">
                <span className="chip-dot"></span> Collaborations
              </span>
              <span className="chip">
                <span className="chip-dot"></span> Remote-friendly
              </span>
            </div> */}

            <div className="career-hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  document.getElementById("open-roles")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Stay tuned
              </button>
            </div>
          </div>

          {/* Visual Right Side (Lottie) */}
          <div className="career-hero-right">
            <div className="career-lottie-card" aria-label="bitYantra careers animation">
              <div className="career-lottie-top">
                <div className="career-lottie-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
              </div>

              <div className="career-lottie-stage">
                <DotLottieReact
                  src="https://lottie.host/54c7a74a-8083-4b31-91aa-ab6d7dc58f78/UY1zVV9w53.lottie"
                  loop
                  autoplay
                />
              </div>

              <div className="career-lottie-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* OPEN ROLES */}
      <section id="open-roles" className="career-open-roles">
        {/* <div className="career-roles-header">
          <h2 className="career-roles-title">Open roles</h2>
          <div className="career-roles-filters" aria-hidden="true">
            <span className="filter-chip filter-chip-primary">All</span>
            <span className="filter-chip">Internship</span>
            <span className="filter-chip">Remote</span>
          </div>
        </div> */}

        {/* No roles state */}
        <div
          className="role-card"
          style={{
            gridColumn: "1 / -1",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div className="role-title" style={{ fontSize: "14px", fontWeight: 700 }}>
              No openings right now
            </div>
            <span className="role-type">Stay tuned</span>
          </div>

          <div style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
            We’ll post new opportunities here as soon as they open.
            If you’d like, you can still send an open application and we’ll reach out when there’s a fit.
          </div>

          {/* <div className="role-tags" style={{ marginTop: "2px" }}>
            <span className="role-tag">Open application</span>
            <span className="role-tag">Internships</span>
            <span className="role-tag">Collaborations</span>
          </div> */}

          <div className="role-footer" style={{ marginTop: "4px" }}>
            <button
              className="btn btn-outline"
              style={{ fontSize: "12px", padding: "8px 12px" }}
              onClick={() => {
                document.getElementById("application")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Send an open application
            </button>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="application" className="career-application">
        
          {/* <aside className="career-app-left">
            <div className="career-app-title">Send an open application.</div>
            <ul className="career-app-list">
              <li>1. Select “Open Application”.</li>
              <li>2. Share your details and portfolio links.</li>
              <li>3. We’ll reach out when there’s a match.</li>
            </ul>
          </aside> */}

          <div className="career-app-form">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input className="form-input" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Applying for</label>
                  <select className="form-select" defaultValue="Open Application">
                    <option>Open Application</option>
                    <option>Software Engineer Intern</option>
                    <option>UI/UX Intern</option>
                    <option>Digital Marketing Associate</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: "10px" }}>
                <label className="form-label">Short Note</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell us what you’re great at, and share links (GitHub, portfolio, LinkedIn)."
                ></textarea>
              </div>

              <div className="form-footer" style={{ marginTop: "12px" }}>
                <button type="submit" className="btn btn-primary">
                  Submit application
                </button>
              </div>
            </form>
          </div>
        
      </section>
    </div>
  );
}