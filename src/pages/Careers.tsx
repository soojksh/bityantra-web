import '../index.css';

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
                 <path d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="career-hero-title">Build products that matter.</h1>
            <p className="career-hero-subtitle">
              Join bitYantra as an intern, collaborator or teammate. Design, ship and grow real products.
            </p>
            <div className="career-hero-chips">
              <span className="chip"><span className="chip-dot"></span> Internships</span>
              <span className="chip"><span className="chip-dot"></span> Junior roles</span>
              <span className="chip"><span className="chip-dot"></span> Remote-friendly</span>
            </div>
            <div className="career-hero-actions">
               <button className="btn btn-primary">View open roles</button>
            </div>
          </div>
          {/* Visual Right Side */}
          <div className="career-hero-right">
             <div className="career-illustration">
                <div className="career-illustration-inner">
                   <div style={{color:'#fff', fontSize:'12px', textAlign:'center'}}>bitYantra Team Board</div>
                   <div className="career-graph">
                      <div className="career-graph-bars">
                         <div className="graph-bar"></div><div className="graph-bar"></div><div className="graph-bar"></div><div className="graph-bar"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* OPEN ROLES */}
      <section id="open-roles" className="career-open-roles">
        <div className="career-roles-header">
           <h2 className="career-roles-title">Open roles & collaborations</h2>
           <div className="career-roles-filters">
              <span className="filter-chip filter-chip-primary">All</span>
              <span className="filter-chip">Internship</span>
              <span className="filter-chip">Remote</span>
           </div>
        </div>

        <div className="career-roles-grid">
           <article className="role-card">
              <div className="role-header">
                 <div className="role-title">Software Engineer Intern</div>
                 <span className="role-type">Internship</span>
              </div>
              <div className="role-tags">
                 <span className="role-tag">React / JS</span>
                 <span className="role-tag">Node</span>
              </div>
              <div className="role-footer">
                 <button className="btn btn-outline" style={{fontSize: '12px', padding: '6px 12px'}}>Apply</button>
              </div>
           </article>
           
           <article className="role-card">
              <div className="role-header">
                 <div className="role-title">UI / UX Design Intern</div>
                 <span className="role-type">Internship</span>
              </div>
              <div className="role-tags">
                 <span className="role-tag">Figma</span>
                 <span className="role-tag">Design Systems</span>
              </div>
              <div className="role-footer">
                 <button className="btn btn-outline" style={{fontSize: '12px', padding: '6px 12px'}}>Apply</button>
              </div>
           </article>

           <article className="role-card">
              <div className="role-header">
                 <div className="role-title">Digital Marketing Associate</div>
                 <span className="role-type">Junior</span>
              </div>
              <div className="role-tags">
                 <span className="role-tag">Social Media</span>
                 <span className="role-tag">Content</span>
              </div>
              <div className="role-footer">
                 <button className="btn btn-outline" style={{fontSize: '12px', padding: '6px 12px'}}>Apply</button>
              </div>
           </article>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="application" className="career-application">
          <div className="career-application-layout">
             <aside className="career-app-left">
                <div className="career-app-title">Send your application.</div>
                <ul className="career-app-list">
                   <li>1. Choose a role or select "Open application".</li>
                   <li>2. Share your details and portfolio links.</li>
                   <li>3. We review and get back to you.</li>
                </ul>
             </aside>

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
                         <select className="form-select">
                            <option>Software Engineer Intern</option>
                            <option>UI/UX Intern</option>
                            <option>Open Application</option>
                         </select>
                      </div>
                   </div>
                   <div className="form-group" style={{marginTop:'10px'}}>
                      <label className="form-label">Short Note</label>
                      <textarea className="form-textarea" placeholder="Tell us about yourself"></textarea>
                   </div>
                   <div className="form-footer" style={{marginTop:'12px'}}>
                      <button type="submit" className="btn btn-primary">Submit Application</button>
                   </div>
                </form>
             </div>
          </div>
      </section>
    </div>
  );
}