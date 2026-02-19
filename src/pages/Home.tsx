import { useEffect, useState } from 'react';
import { Code, Smartphone, TrendingUp, Cpu, Check, Star, ArrowRight, Zap, Shield, Users, Globe, Layers, MessageCircle } from 'lucide-react';

export default function Home() {
  const [activeProduct, setActiveProduct] = useState('website-dev');

  // ScrollSpy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['website-dev', 'mobile-app', 'digital-marketing', 'iot-hardware'];
      const navHeight = 90;
      
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 90;
      const offset = element.getBoundingClientRect().top + window.scrollY - (navHeight + 20);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* HERO SECTION */}
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



      {/* SERVICES SECTION */}
      <section className="products-section">
        <div className="products-container">
          {/* Sidebar */}
          <div className="products-sidebar">
            <button 
              className={`sidebar-item ${activeProduct === 'website-dev' ? 'active' : ''}`}
              onClick={() => scrollToSection('website-dev')}
            >
              <h3>Website Development</h3>
            </button>
            <button 
              className={`sidebar-item ${activeProduct === 'mobile-app' ? 'active' : ''}`}
              onClick={() => scrollToSection('mobile-app')}
            >
              <h3>Mobile Apps</h3>
            </button>
            <button 
              className={`sidebar-item ${activeProduct === 'digital-marketing' ? 'active' : ''}`}
              onClick={() => scrollToSection('digital-marketing')}
            >
              <h3>Digital Marketing</h3>
            </button>
            <button 
              className={`sidebar-item ${activeProduct === 'iot-hardware' ? 'active' : ''}`}
              onClick={() => scrollToSection('iot-hardware')}
            >
              <h3>IoT & Hardware</h3>
            </button>
          </div>

          {/* Content */}
          <div className="products-content">
            {/* Website Development */}
            <div id="website-dev" className="product-display">
  <h2>Website Development</h2>
  <p>Clean, responsive sites that convert visitors into customers</p>

  {/* Like mobile-app, but VISUAL LEFT + TEXT RIGHT */}
  <div className="service-split service-split--web service-split--reverse service-split--webpro">
  {/* Visuals LEFT */}
  <div className="service-split-visual">
    <div className="web-illus">
      {/* Browser window */}
      <div className="web-illus-browser">
        <div className="web-illus-top">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <div className="web-illus-url">bitYantra.dev • Web Platform</div>
          <div className="web-illus-status">Live</div>
        </div>

        <div className="web-illus-body">
          <div className="web-illus-nav">
            <div className="sk sk-logo" />
            <div className="sk sk-link" />
            <div className="sk sk-link" />
            <div className="sk sk-link short" />
            <div className="sk sk-cta" />
          </div>

          <div className="web-illus-hero">
            <div className="sk sk-h1" />
            <div className="sk sk-p" />
            <div className="sk sk-p short" />
            <div className="web-illus-hero-actions">
              <div className="sk sk-btn" />
              <div className="sk sk-btn ghost" />
            </div>
          </div>

        

          <div className="web-illus-footer">
            <div className="sk sk-foot" />
            <div className="sk sk-foot short" />
          </div>
        </div>
      </div>

      {/* Devices layer (responsive) */}
      <div className="web-illus-devices" aria-hidden="true">
        <div className="device phone">
          <div className="device-notch" />
          <div className="device-screen">
            <div className="sk sk-mini" />
            <div className="sk sk-mini" />
            <div className="sk sk-mini tall" />
          </div>
        </div>

        <div className="device tablet">
          <div className="device-screen">
            <div className="sk sk-mini wide" />
            <div className="sk sk-mini wide" />
            <div className="sk sk-mini tall" />
          </div>
        </div>
      </div>

      <div className="web-illus-glow" />
    </div>
  </div>


  <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                    Web Development
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.95)', marginBottom: '20px' }}>
                    Clean UI, fast performance, and scalable architecture — built for growth.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['Responsive', 'SEO-ready', 'Secure'].map((tech) => (
                      <div key={tech} style={{
                        background: 'rgba(255,255,255,0.2)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '500',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <Check size={16} style={{ display: 'inline', marginRight: '8px' }} />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

</div>

</div>


            {/* Mobile Application */}
            <div id="mobile-app" className="product-display">
              <h2>Mobile Application</h2>
              <p>Android and iOS apps that users love</p>
              
              <div style={{ 
                marginTop: '24px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '20px',
                padding: '40px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                    Native & Cross-Platform
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.95)', marginBottom: '20px' }}>
                    Beautiful, performant apps for iOS and Android
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['React Native', 'Flutter', 'Native iOS/Android'].map((tech) => (
                      <div key={tech} style={{
                        background: 'rgba(255,255,255,0.2)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '500',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <Check size={16} style={{ display: 'inline', marginRight: '8px' }} />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{
                    width: '200px',
                    height: '400px',
                    background: 'white',
                    borderRadius: '32px',
                    padding: '12px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    position: 'relative'
                  }}>
                    {/* Phone notch */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100px',
                      height: '20px',
                      background: 'black',
                      borderRadius: '0 0 16px 16px'
                    }}></div>
                    
                    {/* Screen content */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '24px',
                      padding: '32px 16px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      <div style={{ width: '100%', height: '60px', background: 'rgba(255,255,255,0.9)', borderRadius: '12px' }}></div>
                      <div style={{ width: '100%', height: '40px', background: 'rgba(255,255,255,0.8)', borderRadius: '12px' }}></div>
                      <div style={{ width: '100%', height: '40px', background: 'rgba(255,255,255,0.8)', borderRadius: '12px' }}></div>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.7)', borderRadius: '12px' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Digital Marketing */}
            <div id="digital-marketing" className="product-display">
              <h2>Digital Marketing</h2>
              <p>Data-driven strategies that grow your business</p>
              
              <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  borderRadius: '16px',
                  padding: '28px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <TrendingUp size={40} style={{ marginBottom: '16px', opacity: 0.9 }} />
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>SEO Optimization</h3>
                  <p style={{ fontSize: '13px', opacity: 0.95, marginBottom: '16px' }}>
                    Rank higher on search engines and drive organic traffic
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    padding: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '4px' }}>+150%</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Average traffic increase</div>
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    filter: 'blur(30px)'
                  }}></div>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid var(--color-border-subtle)'
                }}>
                  <MessageCircle size={40} color="#fa709a" style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Social Media</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                    Build and engage your community across platforms
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                      <span key={platform} style={{
                        fontSize: '11px',
                        padding: '6px 12px',
                        borderRadius: '999px',
                        background: '#fee140',
                        color: '#0f172a',
                        fontWeight: '500'
                      }}>
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid var(--color-border-subtle)'
                }}>
                  <Users size={40} color="#fa709a" style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Content Strategy</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                    Create compelling content that converts
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} color="#fa709a" /> Blog posts & articles
                    </li>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} color="#fa709a" /> Video marketing
                    </li>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} color="#fa709a" /> Email campaigns
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IoT & Hardware */}
            <div id="iot-hardware" className="product-display">
              <h2>IoT & Hardware</h2>
              <p>Smart devices and embedded systems for the connected world</p>
              
              <div style={{
                marginTop: '24px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                borderRadius: '20px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 300px' }}>
                      <Cpu size={48} color="#1d9bf0" style={{ marginBottom: '16px' }} />
                      <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                        Connected Solutions
                      </h3>
                      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
                        From prototypes to production-ready IoT devices
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {['Arduino & Raspberry Pi', 'ESP32/ESP8266', 'Custom PCB Design', 'Cloud Integration'].map((tech) => (
                          <div key={tech} style={{
                            background: 'rgba(29, 155, 240, 0.1)',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            color: '#1d9bf0',
                            fontSize: '14px',
                            fontWeight: '500',
                            border: '1px solid rgba(29, 155, 240, 0.3)'
                          }}>
                            <Check size={16} style={{ display: 'inline', marginRight: '8px' }} />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* IoT Device Illustration */}
                    <div style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{
                        width: '280px',
                        height: '280px',
                        background: 'rgba(29, 155, 240, 0.1)',
                        borderRadius: '20px',
                        padding: '24px',
                        border: '2px solid rgba(29, 155, 240, 0.3)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {/* Central Device */}
                        <div style={{
                          width: '120px',
                          height: '120px',
                          background: '#1d9bf0',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 40px rgba(29, 155, 240, 0.4)',
                          position: 'relative',
                          zIndex: 2
                        }}>
                          <Cpu size={60} color="white" />
                        </div>

                        {/* Connection Points */}
                        {[
                          { top: '20px', left: '20px', delay: '0s' },
                          { top: '20px', right: '20px', delay: '0.3s' },
                          { bottom: '20px', left: '20px', delay: '0.6s' },
                          { bottom: '20px', right: '20px', delay: '0.9s' }
                        ].map((pos, i) => (
                          <div key={i} style={{
                            position: 'absolute',
                            ...pos,
                            width: '40px',
                            height: '40px',
                            background: 'rgba(29, 155, 240, 0.2)',
                            borderRadius: '50%',
                            border: '2px solid #1d9bf0',
                            animation: `pulse 2s ease-in-out infinite ${pos.delay}`
                          }}>
                            <div style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              background: '#1d9bf0',
                              transform: 'scale(0.5)'
                            }}></div>
                          </div>
                        ))}

                        <style>{`
                          @keyframes pulse {
                            0%, 100% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(1.2); opacity: 0.7; }
                          }
                        `}</style>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Circuit board pattern background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.05,
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, #1d9bf0 10px, #1d9bf0 11px),
                                   repeating-linear-gradient(90deg, transparent, transparent 10px, #1d9bf0 10px, #1d9bf0 11px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>

              {/* IoT Features */}
              <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {[
                  { icon: Globe, title: 'Remote Monitoring', desc: 'Track devices from anywhere' },
                  { icon: Shield, title: 'Secure Communication', desc: 'Encrypted data transmission' },
                  { icon: Zap, title: 'Real-time Data', desc: 'Instant sensor readings' },
                  { icon: Layers, title: 'Scalable Architecture', desc: 'From 1 to 10,000+ devices' }
                ].map((feature, i) => (
                  <div key={i} style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid var(--color-border-subtle)'
                  }}>
                    <feature.icon size={24} color="#1d9bf0" style={{ marginBottom: '12px' }} />
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{feature.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        {/* Main centered heading block */}
        <div className="testimonials-head">
          <div className="testimonials-pill">Success Stories</div>
          <h2 className="testimonials-title">Trusted by Leading Brands</h2>
          <p className="testimonials-subtitle">
            See how we&apos;ve helped businesses transform their digital presence
          </p>
        </div>

        {/* Testimonials container (separate block below heading) */}
        <div className="testimonials-wrap">
          <div className="testimonials-grid">
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="testimonial-glow glow-indigo" />

              <div className="testimonial-body">
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p className="testimonial-quote">
                  "bitYantra transformed our outdated website into a modern, high-performing platform.
                  Our conversion rate increased by 200% in just 3 months!"
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar avatar-indigo">JD</div>
                  <div>
                    <div className="testimonial-name">John Doe</div>
                    <div className="testimonial-role">CEO, TechStart Inc</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="testimonial-glow glow-pink" />

              <div className="testimonial-body">
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p className="testimonial-quote">
                  "The mobile app they built exceeded all our expectations. The user experience is
                  flawless and our customers love it. Highly recommended!"
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar avatar-pink">SM</div>
                  <div>
                    <div className="testimonial-name">Sarah Miller</div>
                    <div className="testimonial-role">Product Manager, FitLife</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="testimonial-glow glow-cyan" />

              <div className="testimonial-body">
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p className="testimonial-quote">
                  "Their IoT solution revolutionized our manufacturing process. Real-time monitoring
                  has improved efficiency by 40%. Outstanding work!"
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar avatar-cyan">RK</div>
                  <div>
                    <div className="testimonial-name">Raj Kumar</div>
                    <div className="testimonial-role">CTO, SmartFactory</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section style={{
        width: 'min(96vw, 1320px)',
        margin: '60px auto 80px',
        padding: '0 10px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '24px',
          padding: '50px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            filter: 'blur(60px)'
          }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
              Ready to Build Something Amazing?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
              Let's discuss your project and create a digital solution that drives results
            </p>
            
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: '600',
                borderRadius: '999px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              }}>
                Get Started Today
                <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
              </button>
              
              <button style={{
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: '600',
                borderRadius: '999px',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}