import { useEffect, useState } from 'react';

export default function Home() {
  const [activeProduct, setActiveProduct] = useState('website-dev');

  // ScrollSpy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['website-dev', 'mobile-app', 'digital-marketing', 'iot-hardware'];
      const navHeight = 90; // Approx nav height
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
            setActiveProduct(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 90;
      const offset = element.getBoundingClientRect().top + window.scrollY - (navHeight + 20);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container" style={{ padding: '0 0 20px' }}>
      
      {/* HERO SECTION - Copy styles from index.html .hero-section */}
      <section className="hero-section">
        <div className="hero-inner">
           <div className="hero-left">
              <h1 className="hero-title">Build reliable products with <span>bitYantra</span>.</h1>
              <p className="hero-subtitle">Web, mobile and IoT experiences.</p>
              <div className="hero-buttons">
                <button className="hero-btn hero-btn-dark">Start a project</button>
              </div>
           </div>
           {/* Visual Element from HTML */}
           <div className="hero-right">
              <img src="/image/logo.png" alt="Hero Visual" style={{maxWidth: '300px'}} />
           </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="products-section">
         <div className="products-container">
            {/* Sidebar */}
            <div className="products-sidebar">
               <div 
                 className={`sidebar-item ${activeProduct === 'website-dev' ? 'active' : ''}`}
                 onClick={() => scrollToSection('website-dev')}
               >
                 <h3>Website Development</h3>
               </div>
               <div 
                 className={`sidebar-item ${activeProduct === 'mobile-app' ? 'active' : ''}`}
                 onClick={() => scrollToSection('mobile-app')}
               >
                 <h3>Mobile Apps</h3>
               </div>
               {/* Add other sidebar items... */}
            </div>

            {/* Content */}
            <div className="products-content">
               <div id="website-dev" className="product-display">
                  <h2>Website Development</h2>
                  <p>Clean, responsive sites...</p>
                  {/* ... Add the visual galleries from HTML ... */}
               </div>

               <div id="mobile-app" className="product-display">
                  <h2>Mobile Application</h2>
                  <p>Android and iOS apps...</p>
               </div>
               {/* Add other content sections... */}
            </div>
         </div>
      </section>

      {/* Add Case Studies and Testimonials sections here following the same pattern */}
    </div>
  );
}