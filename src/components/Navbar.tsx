import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css'; 

// Add specific Navbar styles here or in a separate Navbar.css file
// For brevity, I am assuming you will copy the .navbar CSS from your HTML 
// into src/index.css or a module, adjusting class names if needed.

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '10px 0', borderBottom: '1px solid rgba(148, 163, 184, 0.2)', backdropFilter: 'blur(14px)', background: 'var(--color-bg)' }}>
        <div className="navbar-inner" style={{ width: 'min(96vw, 1320px)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left Side: Logo & Hamburger */}
          <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none' /* Responsive CSS handles this */ }}
            >
              <span></span><span></span><span></span>
            </button>

            <Link to="/" className="logo">
              <div className="logo-icon" style={{ width: '160px', height: '50px' }}>
                <img src="/image/logo.png" alt="bitYantra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('product')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="nav-link">Product ▾</span>
              {/* Product Mega Menu */}
              <div className={`mega-menu ${activeMenu === 'product' ? 'active' : ''}`}>
                 {/* ... Copy the inner HTML of your Mega Menu here ... */}
                 <div className="mega-section">
                    <div className="mega-title">Features</div>
                    <a href="#" className="mega-item">
                        <div className="mega-icon icon-purple">📁</div>
                        <div className="mega-content"><h3>Team Workspace</h3><p>Keep track of info.</p></div>
                    </a>
                 </div>
                 {/* Add other sections similarly */}
              </div>
            </li>

            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('solutions')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="nav-link">Solutions ▾</span>
               {/* Solutions Dropdown */}
               <div className={`dropdown-menu ${activeMenu === 'solutions' ? 'active' : ''}`}>
                  <a href="#" className="dropdown-item">
                    <div className="dropdown-icon">🏢</div>
                    <div className="dropdown-content"><h4>Enterprise</h4></div>
                  </a>
               </div>
            </li>

            <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="/careers" className="nav-link">Career</Link></li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary">Request a demo</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/about" className="mobile-nav-link">About Us</Link>
          <Link to="/careers" className="mobile-nav-link">Careers</Link>
        </div>
      </div>
    </>
  );
}