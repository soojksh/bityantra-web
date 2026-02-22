import '../index.css';
import './about.css';

export default function About() {
  return (
    <div className="about-container">
      {/* OUR STORY */}
      <section className="about-section about-section--story">
        <div className="about-section-header">
          <div className="section-badge">
            <span>Our Story</span>
            <svg className="badge-accent" viewBox="0 0 120 8" fill="none">
              <path d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="about-section-title">From side project to product partner.</h2>
          <p className="about-section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus aliquet nunc, nec ullamcorper massa interdum in.
          </p>
        </div>

        <div className="about-story-grid">
          <article className="about-story-copy">
            <h3>Where we started</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu hendrerit, varius sapien vel, aliquam quam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu eleifend eros. Donec blandit, enim at molestie pulvinar.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt interdum justo, vitae malesuada justo.</p>
          </article>

          <div className="about-metrics-strip">
            <div className="about-metrics-row">
              <div className="about-metric-pill">
                <div className="about-metric-icon">🏭</div>
                <div className="about-metric-text">
                  <span className="about-metric-value">10+</span>
                  <span className="about-metric-label">Industries</span>
                </div>
              </div>
              <div className="about-metric-pill">
                <div className="about-metric-icon">🚀</div>
                <div className="about-metric-text">
                  <span className="about-metric-value">40+</span>
                  <span className="about-metric-label">Products</span>
                </div>
              </div>
            </div>
            <div className="about-metrics-row">
              <div className="about-metric-pill">
                <div className="about-metric-icon">💙</div>
                <div className="about-metric-text">
                  <span className="about-metric-value">90%</span>
                  <span className="about-metric-label">Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-section about-section--values">
        <div className="about-section-header">
            <div className="section-badge">
                <span>Values</span>
                <svg className="badge-accent" viewBox="0 0 120 8" fill="none">
                    <path d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>
            <h2 className="about-section-title">What we believe in.</h2>
        </div>

        <div className="values-strip">
            {['Craft in every detail', 'Partnership, not projects', 'Measured outcomes', 'Reliable systems', 'Continuous learning'].map((val, i) => (
                <div className="value-pill" key={i}>
                    <div className="value-icon">✨</div>
                    <div className="value-text">
                        <h3>{val}</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="about-section about-section--process">
          <div className="about-section-header">
             <div className="section-badge"><span>Process</span></div>
             <h2 className="about-section-title">How we work with you.</h2>
          </div>
          
          <div className="process-layout">
             <div className="process-intro-card">
                 <div className="process-intro-label">End-to-end partnership</div>
                 <div className="process-intro-title">From first idea to ongoing optimisation.</div>
                 <p className="process-intro-text">We combine strategy, design, engineering and long-term support.</p>
                 <ul className="process-intro-list">
                    <li><span className="process-intro-bullet">◆</span> Single team across discovery, delivery and support.</li>
                    <li><span className="process-intro-bullet">◆</span> Transparent milestones and check-ins.</li>
                 </ul>
             </div>

             <div className="process-visual-wrapper">
                <div className="process-steps">
                    <article className="process-step">
                        <div className="process-step-indicator">01</div>
                        <div className="process-step-label">Strategy</div>
                        <div className="process-step-title">Discover & define</div>
                        <div className="process-step-tags">
                            <span className="process-step-tag">Roadmap</span>
                            <span className="process-step-tag">Requirements</span>
                        </div>
                    </article>
                    <article className="process-step">
                        <div className="process-step-indicator">02</div>
                        <div className="process-step-label">Concept</div>
                        <div className="process-step-title">Design the experience</div>
                         <div className="process-step-tags">
                            <span className="process-step-tag">UI/UX</span>
                            <span className="process-step-tag">Tech Plan</span>
                        </div>
                    </article>
                    <article className="process-step">
                        <div className="process-step-indicator">03</div>
                        <div className="process-step-label">Production</div>
                        <div className="process-step-title">Build & launch</div>
                         <div className="process-step-tags">
                            <span className="process-step-tag">Development</span>
                            <span className="process-step-tag">QA</span>
                        </div>
                    </article>
                    <article className="process-step">
                        <div className="process-step-indicator">04</div>
                        <div className="process-step-label">Growth</div>
                        <div className="process-step-title">Support & evolve</div>
                         <div className="process-step-tags">
                            <span className="process-step-tag">Monitoring</span>
                            <span className="process-step-tag">Updates</span>
                        </div>
                    </article>
                </div>
             </div>
          </div>
      </section>
    </div>
  );
}