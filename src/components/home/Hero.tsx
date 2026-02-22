import "./hero.css";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-pill">Digital Innovation Partner</div>

            <h1 className="hero-title">
              Build reliable products with{" "}
              <span className="hero-brand">
                <img
                  src="/image/logo.png"
                  alt="bitYantra"
                  className="hero-logo"
                />
              </span>
            </h1>

            <p className="hero-subtitle">
              Web, mobile and IoT experiences crafted with precision. From concept to deployment,
              we transform your ideas into scalable digital solutions that drive real business results.
            </p>

            <div className="hero-buttons">
              <button className="hero-btn hero-btn-dark">Start a project</button>

              <button className="hero-btn hero-btn-outline">
                View our work
              </button>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="hero-right">
            <div className="hero-art hero-art--layered" aria-hidden="true">
              {/* halo / orbits behind */}
              <div className="hero-halo" />
              <div className="hero-orbit hero-orbit-1" />
              <div className="hero-orbit hero-orbit-2" />

              {/* WEB PREVIEW */}
              <div className="hero-web hero-layer web">
                <div className="hero-web-top">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                  <span className="hero-web-pill" />
                </div>

                <div className="hero-web-body">
                  <div className="hero-web-card-row">
                    <div className="hero-web-card">
                      <div className="sk sk-title" />
                      <div className="sk sk-line" />
                      <div className="sk sk-line short" />
                    </div>
                    <div className="hero-web-card">
                      <div className="sk sk-title" />
                      <div className="sk sk-line" />
                      <div className="sk sk-line short" />
                    </div>
                  </div>

                  <div className="hero-web-scroll">
                    <div className="hero-web-scroll-inner">
                      <div className="sk sk-line long" />
                      <div className="sk sk-line" />
                      <div className="sk sk-line short" />
                      <div className="sk sk-block" />

                      <div className="sk sk-line long" />
                      <div className="sk sk-line" />
                      <div className="sk sk-line short" />
                      <div className="sk sk-block" />
                    </div>
                  </div>

                  <div className="hero-web-widgets">
                    <div className="hero-mini-widget">
                      <div className="sk sk-chip" />
                      <div className="sk sk-line short" />
                    </div>
                    <div className="hero-mini-widget">
                      <div className="sk sk-chip alt" />
                      <div className="sk sk-line short" />
                    </div>
                    <div className="hero-mini-widget">
                      <div className="sk sk-chip warm" />
                      <div className="sk sk-line short" />
                    </div>
                  </div>
                </div>

                {/* tiny reaction near web */}
                <div className="hero-bubble hero-bubble-heart" />
              </div>

              {/* PHONE */}
              <div className="hero-phone hero-layer phone">
                <div className="hero-phone-notch" />
                <div className="hero-phone-screen">
                  <div className="hero-phone-scroll">
                    <div className="hero-phone-scroll-inner">
                      <div className="ph ph-card" />
                      <div className="ph ph-card" />
                      <div className="ph ph-card tall" />
                      <div className="ph ph-card" />
                      <div className="ph ph-card" />
                    </div>
                  </div>
                </div>

                {/* like bubble */}
                <div className="hero-bubble hero-bubble-like" />
              </div>

              {/* MARKETING CHART */}
              <div className="hero-chart-card hero-layer chart">
                <div className="hero-chart-top">
                  <span className="hero-chart-chip" />
                  <span className="hero-chart-chip warm" />
                </div>

                <div className="hero-chart-wrap">
                  <svg className="hero-chart-svg" viewBox="0 0 320 150" fill="none">
                    {/* grid */}
                    <g className="hero-chart-grid">
                      {/* vertical grid */}
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <line key={`v-${i}`} x1={20 + i * 45} y1="14" x2={20 + i * 45} y2="128" />
                      ))}
                      {/* horizontal grid */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line key={`h-${i}`} x1="20" y1={14 + i * 28} x2="300" y2={14 + i * 28} />
                      ))}
                    </g>

                    {/* axis baseline */}
                    <path className="hero-chart-axis" d="M20 128 H300" />

                    {/* line path (slower, realistic) */}
                    <path
                      className="hero-chart-line"
                      d="
                        M20 112
                        C 45 110, 62 104, 80 106
                        C 102 108, 118 98, 140 96
                        C 160 94, 175 92, 190 86
                        C 208 78, 225 84, 242 74
                        C 262 62, 275 66, 300 48
                      "
                    />

                    {/* area fill under line */}
                    <path
                      className="hero-chart-area"
                      d="
                        M20 112
                        C 45 110, 62 104, 80 106
                        C 102 108, 118 98, 140 96
                        C 160 94, 175 92, 190 86
                        C 208 78, 225 84, 242 74
                        C 262 62, 275 66, 300 48
                        L300 128 L20 128 Z
                      "
                    />

                    {/* end dot */}
                    <circle className="hero-chart-dot" cx="300" cy="48" r="5" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}