import { Link } from "react-router-dom";
import "./footer.css";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.68H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46h1.74V4.96c-.3-.04-1.33-.13-2.52-.13-2.5 0-4.2 1.52-4.2 4.31V11H7.6v3h2.42v8h3.48z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M17.6 6.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/image/logo.png" alt="bitYantra" />
            </div>

            <p className="footer-tagline">
              bitYantra builds reliable web, mobile, IoT and digital experiences for teams that care about quality and speed.
            </p>

            <p className="footer-contact">
              Lalitpur-03, Balkumari <br />
              <a href="mailto:hello@bityantra.com">hello@bityantra.com</a>
            </p>

            <div className="footer-social" aria-label="Social links">
              <a
                href="#"
                className="footer-social-icon"
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <IconLinkedIn />
              </a>
              <a
                href="#"
                className="footer-social-icon"
                aria-label="Facebook"
                title="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <IconFacebook />
              </a>
              <a
                href="#"
                className="footer-social-icon"
                aria-label="Instagram"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer-column-title">Services</div>
            <ul className="footer-list">
              <li>
                <Link to="/#website-dev">Website development</Link>
              </li>
              <li>
                <Link to="/#mobile-app">Mobile apps</Link>
              </li>
              <li>
                <Link to="/#digital-marketing">Digital marketing</Link>
              </li>
              <li>
                <Link to="/#iot-hardware">IoT & hardware</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-column-title">Company</div>
            <ul className="footer-list">
              <li>
                <Link to="/about">About bitYantra</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources + Newsletter */}
          <div>
            <div className="footer-column-title">Resources</div>
            <ul className="footer-list">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link to="/insights">Insights</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>

            
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © <span>{currentYear}</span> bitYantra Private Limited. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}