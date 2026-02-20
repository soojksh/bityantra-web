import "../index.css";

const VALUES = [
  { title: "Craft in every detail", icon: "✨", desc: "Polished UI + solid engineering." },
  { title: "Partnership, not projects", icon: "🤝", desc: "We act like your in-house team." },
  { title: "Measured outcomes", icon: "📈", desc: "We track what matters." },
  { title: "Reliable systems", icon: "🛡️", desc: "Secure, stable, scalable delivery." },
  { title: "Continuous learning", icon: "🧠", desc: "We keep improving every sprint." },
];

const STEPS = [
  { n: "01", label: "Strategy", title: "Discover & define", tags: ["Roadmap", "Requirements"] },
  { n: "02", label: "Concept", title: "Design the experience", tags: ["UI/UX", "Tech Plan"] },
  { n: "03", label: "Production", title: "Build & launch", tags: ["Development", "QA"] },
  { n: "04", label: "Growth", title: "Support & evolve", tags: ["Monitoring", "Updates"] },
];

export default function About() {
  return (
    <div className="about2">
      {/* HERO HEADER */}
      <header className="about2-hero">
        <div className="about2-hero-inner">
          <div className="about2-badge">
            <span>About</span>
            <span className="about2-badge-dot" />
            <span>BitYantra</span>
          </div>

          <h1 className="about2-title">
            We build products that look premium, run fast, and scale safely.
          </h1>

          <p className="about2-subtitle">
            A small senior team for startups and modern businesses — web, mobile, marketing systems, and IoT experiences.
          </p>

          <div className="about2-hero-metrics">
            <div className="about2-metric">
              <div className="about2-metric-k">40+</div>
              <div className="about2-metric-l">Products shipped</div>
            </div>
            <div className="about2-metric">
              <div className="about2-metric-k">90%</div>
              <div className="about2-metric-l">Client retention</div>
            </div>
            <div className="about2-metric">
              <div className="about2-metric-k">10+</div>
              <div className="about2-metric-l">Industries served</div>
            </div>
          </div>
        </div>

        {/* right visual */}
        <div className="about2-hero-visual" aria-hidden="true">
          <div className="about2-visual-card">
            <div className="about2-visual-top">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <div className="about2-visual-title">Product Snapshot</div>
              <div className="about2-visual-pill">Live</div>
            </div>

            <div className="about2-visual-body">
              <div className="about2-visual-row">
                <div className="about2-chip" />
                <div className="about2-chip soft" />
                <div className="about2-chip soft2" />
              </div>

              <div className="about2-mini-grid">
                <div className="about2-mini-panel">
                  <div className="about2-mini-h" />
                  <div className="about2-mini-line w90" />
                  <div className="about2-mini-line w60" />
                  <div className="about2-mini-cta" />
                </div>

                <div className="about2-mini-panel">
                  <div className="about2-mini-h" />
                  <div className="about2-chart">
                    <span className="g" />
                    <span className="g" />
                    <span className="g" />
                    <svg className="about2-line" viewBox="0 0 220 80" fill="none">
                      <path
                        d="M8 64 C 40 60, 56 52, 76 48 C 94 44, 108 46, 128 38 C 146 30, 164 34, 188 22 C 198 18, 208 16, 214 14"
                        stroke="rgba(29,155,240,0.75)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 64 C 40 60, 56 52, 76 48 C 94 44, 108 46, 128 38 C 146 30, 164 34, 188 22 C 198 18, 208 16, 214 14"
                        stroke="rgba(29,155,240,0.20)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="about2-mini-line w70" />
                </div>
              </div>

              <div className="about2-kpis">
                <div className="about2-kpi">
                  <div className="kpi-k">99.9%</div>
                  <div className="kpi-l">Uptime</div>
                </div>
                <div className="about2-kpi">
                  <div className="kpi-k">~120ms</div>
                  <div className="kpi-l">Latency</div>
                </div>
                <div className="about2-kpi">
                  <div className="kpi-k">Secure</div>
                  <div className="kpi-l">By design</div>
                </div>
              </div>
            </div>

            <div className="about2-visual-glow" />
          </div>
        </div>
      </header>

      {/* STORY */}
      <section className="about2-section">
        <div className="about2-section-head">
          <div className="section-badge">
            <span>Our Story</span>
            <svg className="badge-accent" viewBox="0 0 120 8" fill="none">
              <path
                d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2 className="about2-h2">From side project to product partner.</h2>
          <p className="about2-p">
            We started by shipping fast MVPs. Today we design and build complete systems — web, mobile, growth, and IoT.
          </p>
        </div>

        <div className="about2-story">
          {/* left */}
          <div className="about2-story-copy">
            <div className="about2-copy-card">
              <h3 className="about2-h3">Where we started</h3>
              <p className="about2-p-sm">
                A small team obsessed with UI polish and reliable delivery — focused on real outcomes.
              </p>

              <div className="about2-quick">
                <div className="about2-quick-item">
                  <span className="about2-quick-ico">⚡</span>
                  <div>
                    <div className="about2-quick-t">Fast iteration</div>
                    <div className="about2-quick-s">Ship weekly improvements</div>
                  </div>
                </div>
                <div className="about2-quick-item">
                  <span className="about2-quick-ico">🧩</span>
                  <div>
                    <div className="about2-quick-t">System thinking</div>
                    <div className="about2-quick-s">Design + engineering together</div>
                  </div>
                </div>
                <div className="about2-quick-item">
                  <span className="about2-quick-ico">🔒</span>
                  <div>
                    <div className="about2-quick-t">Security first</div>
                    <div className="about2-quick-s">Production-ready by default</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right visual timeline */}
          <div className="about2-story-visual" aria-hidden="true">
            <div className="about2-timeline">
              <div className="about2-tl-line" />
              <div className="about2-tl-item active">
                <div className="about2-tl-dot" />
                <div className="about2-tl-card">
                  <div className="about2-tl-k">Phase 1</div>
                  <div className="about2-tl-t">MVP Delivery</div>
                  <div className="about2-tl-s">Launch fast, validate early.</div>
                </div>
              </div>
              <div className="about2-tl-item">
                <div className="about2-tl-dot" />
                <div className="about2-tl-card">
                  <div className="about2-tl-k">Phase 2</div>
                  <div className="about2-tl-t">Design Systems</div>
                  <div className="about2-tl-s">Consistency across platforms.</div>
                </div>
              </div>
              <div className="about2-tl-item">
                <div className="about2-tl-dot" />
                <div className="about2-tl-card">
                  <div className="about2-tl-k">Phase 3</div>
                  <div className="about2-tl-t">Scale & Reliability</div>
                  <div className="about2-tl-s">Monitoring, performance, security.</div>
                </div>
              </div>
              <div className="about2-tl-item">
                <div className="about2-tl-dot" />
                <div className="about2-tl-card">
                  <div className="about2-tl-k">Phase 4</div>
                  <div className="about2-tl-t">Growth Engine</div>
                  <div className="about2-tl-s">SEO, marketing systems, automation.</div>
                </div>
              </div>
            </div>

            <div className="about2-story-glow" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about2-section about2-section--values">
        <div className="about2-section-head">
          <div className="section-badge">
            <span>Values</span>
            <svg className="badge-accent" viewBox="0 0 120 8" fill="none">
              <path
                d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2 className="about2-h2">What we believe in.</h2>
          <p className="about2-p">Simple principles that keep delivery consistent.</p>
        </div>

        <div className="about2-values">
          {VALUES.map((v) => (
            <div className="about2-value" key={v.title}>
              <div className="about2-value-ico">{v.icon}</div>
              <div className="about2-value-t">{v.title}</div>
              <div className="about2-value-s">{v.desc}</div>
              <div className="about2-value-spark" />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="about2-section about2-section--process">
        <div className="about2-section-head">
          <div className="section-badge">
            <span>Process</span>
            <svg className="badge-accent" viewBox="0 0 120 8" fill="none">
              <path
                d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2 className="about2-h2">How we work with you.</h2>
          <p className="about2-p">Clarity, velocity, and quality — end to end.</p>
        </div>

        <div className="about2-process">
          <div className="about2-process-intro">
            <div className="about2-intro-card">
              <div className="about2-intro-kicker">End-to-end partnership</div>
              <div className="about2-intro-title">From first idea to ongoing optimisation.</div>
              <div className="about2-intro-bullets">
                <div className="about2-bullet">◆ One team across strategy, design, build, support.</div>
                <div className="about2-bullet">◆ Clear milestones + weekly check-ins.</div>
              </div>

              {/* mini deliverables visual */}
              <div className="about2-deliverables" aria-hidden="true">
                <div className="about2-deliv">
                  <div className="about2-deliv-top" />
                  <div className="about2-deliv-mid" />
                  <div className="about2-deliv-bar" />
                </div>
                <div className="about2-deliv">
                  <div className="about2-deliv-top" />
                  <div className="about2-deliv-mid" />
                  <div className="about2-deliv-bar soft" />
                </div>
              </div>
            </div>
          </div>

          <div className="about2-steps-wrap" aria-hidden="true">
            <div className="about2-steps-line" />
            <div className="about2-steps">
              {STEPS.map((s) => (
                <article className="about2-step" key={s.n}>
                  <div className="about2-step-n">{s.n}</div>
                  <div className="about2-step-label">{s.label}</div>
                  <div className="about2-step-title">{s.title}</div>
                  <div className="about2-step-tags">
                    {s.tags.map((t) => (
                      <span className="about2-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="about2-steps-glow" />
          </div>
        </div>
      </section>
    </div>
  );
}