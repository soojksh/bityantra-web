import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Left Side: Logo & Hamburger */}
          <div className="nav-left">
            <button
              className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <Link to="/" className="logo">
              <div className="logo-icon" style={{ width: "160px", height: "50px" }}>
                <img
                  src="/image/logo.png"
                  alt="bitYantra"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            
            <li className="nav-item">
              <Link to="/careers" className="nav-link">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary">Request a demo</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-nav-link">
            Home
          </Link>
          <Link to="/contact" className="mobile-nav-link">
            Contact
          </Link>
          <Link to="/careers" className="mobile-nav-link">
            Careers
          </Link>
        </div>
      </div>
    </>
  );
}
