import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/image/logo.png" alt="bitYantra" />
            </div>
            <p className="footer-tagline">
              bitYantra builds reliable web, mobile, IoT and digital experiences for teams that care about quality and speed.
            </p>
            <p className="footer-contact">
              Kathmandu-10, Mid Baneshwor<br />
              <a href="mailto:hello@bityantra.com">hello@bityantra.com</a>
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">LinkedIn</a>
              <a href="#" className="footer-social-link">Facebook</a>
              <a href="#" className="footer-social-link">Instagram</a>
            </div>
          </div>

          <div>
            <div className="footer-column-title">Services</div>
            <ul className="footer-list">
              <li><Link to="/#website-dev">Website development</Link></li>
              <li><Link to="/#mobile-app">Mobile apps</Link></li>
              <li><Link to="/#digital-marketing">Digital marketing</Link></li>
              <li><Link to="/#iot-hardware">IoT & hardware</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-column-title">Company</div>
            <ul className="footer-list">
              <li><Link to="/about">About bitYantra</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/#">Customer stories</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-column-title">Work with us</div>
            <ul className="footer-list">
              <li><Link to="/#">Book a discovery call</Link></li>
              <li><Link to="/#">Request a proposal</Link></li>
              <li><Link to="/#">View project samples</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © <span>{currentYear}</span> bitYantra Private Limited. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/#">Privacy</Link>
            <Link to="/#">Terms</Link>
            <Link to="/#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}