import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import "./navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Update these with real values
  const PHONE_DISPLAY = "+61 4XX XXX XXX";
  const PHONE_TEL = "+614XXXXXXXX";
  const EMAIL = "info@bityantra.com";

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Left Side: Logo & Hamburger */}
          <div className="nav-left">
            <button
              className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <Link to="/" className="logo" aria-label="Go to homepage">
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
          <ul className="nav-menu" aria-label="Primary navigation">
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

          {/* Right Side: Contact + Social (Desktop) */}
          <div className="nav-actions">
            <div className="nav-contacts" aria-label="Contact links">
              <a className="nav-contact-pill" href={`tel:${PHONE_TEL}`} title="Call us">
                <span className="pill-icon" aria-hidden="true">
                  <PhoneIcon />
                </span>
                <span className="pill-text">{PHONE_DISPLAY}</span>
              </a>

              <a className="nav-contact-pill" href={`mailto:${EMAIL}`} title="Email us">
                <span className="pill-icon" aria-hidden="true">
                  <MailIcon />
                </span>
                <span className="pill-text">{EMAIL}</span>
              </a>
            </div>

            <div className="nav-social" aria-label="Social links">
              <a className="social-icon" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className="social-icon" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className="social-icon" href="https://wa.me/614XXXXXXXX" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-content">
          {/* Mobile menu header (adds breathing room and structure) */}
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-logo" aria-label="Go to homepage">
              <img src="/image/logo.png" alt="bitYantra" />
            </Link>

            <button className="mobile-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Links (not button-like) */}
          <div className="mobile-menu-top">
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

          {/* Footer (always visible, no scrolling) */}
          <div className="mobile-menu-footer">
            <div className="mobile-contact">
              <a className="mobile-contact-row" href={`tel:${PHONE_TEL}`}>
                <span className="mci" aria-hidden="true">
                  <PhoneIcon />
                </span>
                <span>{PHONE_DISPLAY}</span>
              </a>

              <a className="mobile-contact-row" href={`mailto:${EMAIL}`}>
                <span className="mci" aria-hidden="true">
                  <MailIcon />
                </span>
                <span>{EMAIL}</span>
              </a>
            </div>

            <div className="mobile-social" aria-label="Social links">
              <a className="social-icon" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className="social-icon" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className="social-icon" href="https://wa.me/614XXXXXXXX" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>

            <div className="mobile-mini-note">
              <span className="dot" aria-hidden="true"></span>
              <span>Support hours: Sun–Fri, 9am–6pm</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Inline SVG Icons (no library needed) ---------- */

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.2 22 2 13.8 2 3c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.1v8h4.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zM17.6 6.7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 11.9A8 8 0 1 1 6.3 6.3 8 8 0 0 1 20 11.9zm-8 7.1c1.3 0 2.5-.3 3.6-1l2.4.7-.7-2.3c.7-1.1 1.1-2.4 1.1-3.7a6.4 6.4 0 1 0-6.4 6.3zm3.2-4.6c-.2.5-1 .9-1.4.9-.3 0-.8.1-2.6-.6-2.1-.8-3.4-2.9-3.5-3.1-.1-.2-.8-1.1-.8-2.1s.5-1.4.7-1.6c.2-.2.4-.2.6-.2h.4c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.2.1.3 0 .5-.1.2-.2.3-.3.4-.1.1-.2.2-.3.4-.1.1-.2.2-.1.4.1.2.6 1 1.3 1.7.9.8 1.6 1.1 1.8 1.2.2.1.3.1.4-.1.1-.1.5-.6.6-.8.2-.2.3-.2.5-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3 0 .1 0 .6-.2 1.1z"
        fill="currentColor"
      />
    </svg>
  );
}