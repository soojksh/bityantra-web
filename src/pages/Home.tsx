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
      <section className="hero-section">
  <div className="hero-inner">
    <div className="hero-left">
      <div
        style={{
          display: "inline-block",
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1d9bf0",
          background:
            "linear-gradient(135deg, rgba(29, 155, 240, 0.15), rgba(29, 155, 240, 0.05))",
          padding: "6px 14px",
          borderRadius: "999px",
          marginBottom: "16px",
          border: "1px solid rgba(29, 155, 240, 0.2)",
        }}
      >
        ✨ Digital Innovation Partner
      </div>

      <h1 className="hero-title">
        Build reliable products with{" "}
        <span style={{ position: "relative", display: "inline-block" }}>
          <img
            src="/image/logo.png"
            alt="bitYantra"
            style={{
              height: "42px",
              width: "auto",
              verticalAlign: "middle",
              marginLeft: "4px",
              filter: "drop-shadow(0 2px 8px rgba(29, 155, 240, 0.3))",
            }}
          />
        </span>
      </h1>

      <p className="hero-subtitle" style={{ maxWidth: "480px", lineHeight: "1.7" }}>
        Web, mobile and IoT experiences crafted with precision. From concept to deployment,
        we transform your ideas into powerful digital solutions that drive real business results.
      </p>

      <div className="hero-buttons" style={{ marginBottom: "24px" }}>
        <button
          className="hero-btn hero-btn-dark"
          style={{
            boxShadow: "0 4px 14px rgba(29, 155, 240, 0.4)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Start a project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <button
          className="hero-btn hero-btn-outline"
          style={{
            background: "transparent",
            border: "1px solid var(--color-border-strong)",
            color: "var(--color-text-main)",
          }}
        >
          View our work
        </button>
      </div>

      {/* Stats Section */}
      <div
        className="hero-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          maxWidth: "460px",
          marginTop: "28px",
        }}
      >
        {[
          { number: "100+", label: "Projects", icon: "🚀" },
          { number: "24/7", label: "Support", icon: "💬" },
          { number: "50+", label: "Clients", icon: "⭐" },
        ].map((stat, i) => (
          <div
            key={i}
            className="hero-stat-card"
            style={{
              padding: "14px 12px",
              borderRadius: "12px",
              textAlign: "center",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ fontSize: "20px", marginBottom: "4px" }}>{stat.icon}</div>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#1d9bf0", marginBottom: "2px" }}>
              {stat.number}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="hero-right">
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "400px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "24px",
          padding: "28px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 25px 70px rgba(102, 126, 234, 0.35)",
        }}
      >
        {/* Animated Background Circles */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
            animation: "rotate 20s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
            animation: "rotate 25s linear infinite reverse",
          }}
        />

        {/* Tech Stack Floating Cards */}
        {[
          { icon: "⚛️", label: "React", top: "20px", right: "20px", delay: "0s" },
          { icon: "📱", label: "Mobile", top: "120px", left: "15px", delay: "0.4s" },
          { icon: "🔧", label: "IoT", bottom: "80px", right: "25px", delay: "0.8s" },
          { icon: "⚡", label: "Fast", bottom: "30px", left: "30px", delay: "1.2s" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              ...(Object.fromEntries(
                Object.entries(item).filter(([key]) => ["top", "bottom", "left", "right"].includes(key))
              ) as any),
              background: "rgba(255,255,255,0.95)",
              borderRadius: "12px",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              animation: `float 3s ease-in-out infinite ${item.delay}`,
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "20px" }}>{item.icon}</span>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#1e293b" }}>{item.label}</span>
          </div>
        ))}

        {/* Central Dashboard Mockup */}
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "320px",
            height: "220px",
            background: "white",
            borderRadius: "16px",
            padding: "18px",
            boxShadow: "0 15px 50px rgba(0,0,0,0.25)",
            zIndex: 3,
          }}
        >
          <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div
                style={{
                  height: "12px",
                  width: "120px",
                  background: "linear-gradient(90deg, #e0f2ff, #dbeafe)",
                  borderRadius: "4px",
                }}
              />
              <div style={{ height: "24px", width: "24px", background: "#667eea", borderRadius: "6px" }} />
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              {[60, 80, 50, 90, 70].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: "linear-gradient(180deg, #667eea, #764ba2)",
                    borderRadius: "4px 4px 0 0",
                    height: `${h}px`,
                    alignSelf: "flex-end",
                    opacity: 0.85,
                    animation: `slideUp 0.6s ease-out ${i * 0.1}s backwards`,
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              <div
                style={{
                  flex: 1,
                  height: "45px",
                  background: "linear-gradient(135deg, #e0f2ff, #dbeafe)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                📊
              </div>
              <div
                style={{
                  flex: 1,
                  height: "45px",
                  background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                🎯
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
          @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes slideUp { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); transform-origin: bottom; } }
        `}</style>
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
              
              <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {/* Feature Card 1 */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Globe size={26} color="white" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Responsive Design</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                    Pixel-perfect designs that work seamlessly across all devices
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#1d9bf0" /> Mobile-first approach
                    </li>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#1d9bf0" /> Fast loading times
                    </li>
                  </ul>
                </div>

                {/* Feature Card 2 */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Zap size={26} color="white" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Performance</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                    Blazing fast websites optimized for search engines
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#1d9bf0" /> SEO optimized
                    </li>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#1d9bf0" /> Core Web Vitals
                    </li>
                  </ul>
                </div>

                {/* Feature Card 3 */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Shield size={26} color="white" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Security First</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                    Enterprise-grade security for your peace of mind
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#1d9bf0" /> SSL encryption
                    </li>
                    <li style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#1d9bf0" /> Regular updates
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visual Gallery */}
              <div style={{ 
                marginTop: '32px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                    Modern Web Experiences
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px' }}>
                    From landing pages to complex web applications
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    {[1, 2, 3].map((i) => (
                      <div key={i} style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '16px',
                        height: '140px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                      }}>
                        <div style={{ width: '100%', height: '20px', background: '#f1f5f9', borderRadius: '6px', marginBottom: '8px' }}></div>
                        <div style={{ width: '70%', height: '16px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px' }}></div>
                        <div style={{ width: '100%', height: '60px', background: '#e0f2ff', borderRadius: '8px' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  filter: 'blur(40px)'
                }}></div>
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

              {/* Features Grid */}
              <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {[
                  { icon: Smartphone, title: 'Push Notifications', desc: 'Engage users with timely updates' },
                  { icon: Layers, title: 'Offline Support', desc: 'Work seamlessly without internet' },
                  { icon: Shield, title: 'Secure Storage', desc: 'Encrypted data protection' },
                  { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed' }
                ].map((feature, i) => (
                  <div key={i} style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid var(--color-border-subtle)'
                  }}>
                    <feature.icon size={24} color="#f5576c" style={{ marginBottom: '12px' }} />
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{feature.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                  </div>
                ))}
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

      {/* CASE STUDIES / TESTIMONIALS SECTION */}
      <section style={{ 
        width: 'min(96vw, 1320px)', 
        margin: '60px auto 40px',
        padding: '0 10px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-primary-dark)',
            background: 'var(--color-primary-soft)',
            padding: '6px 16px',
            borderRadius: '999px',
            marginBottom: '12px'
          }}>
            Success Stories
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>
            Trusted by Leading Brands
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            See how we've helped businesses transform their digital presence
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Testimonial Card 1 */}
          <div style={{
            background: 'white',
            borderRadius: '18px',
            padding: '28px',
            border: '1px solid var(--color-border-subtle)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent)',
              filter: 'blur(20px)'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              
              <p style={{ fontSize: '14px', color: 'var(--color-text-main)', marginBottom: '20px', lineHeight: '1.6' }}>
                "bitYantra transformed our outdated website into a modern, high-performing platform. 
                Our conversion rate increased by 200% in just 3 months!"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  JD
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>John Doe</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>CEO, TechStart Inc</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div style={{
            background: 'white',
            borderRadius: '18px',
            padding: '28px',
            border: '1px solid var(--color-border-subtle)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(240, 147, 251, 0.15), transparent)',
              filter: 'blur(20px)'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              
              <p style={{ fontSize: '14px', color: 'var(--color-text-main)', marginBottom: '20px', lineHeight: '1.6' }}>
                "The mobile app they built exceeded all our expectations. The user experience is 
                flawless and our customers love it. Highly recommended!"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  SM
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Sarah Miller</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Product Manager, FitLife</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div style={{
            background: 'white',
            borderRadius: '18px',
            padding: '28px',
            border: '1px solid var(--color-border-subtle)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(29, 155, 240, 0.15), transparent)',
              filter: 'blur(20px)'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              
              <p style={{ fontSize: '14px', color: 'var(--color-text-main)', marginBottom: '20px', lineHeight: '1.6' }}>
                "Their IoT solution revolutionized our manufacturing process. Real-time monitoring 
                has improved efficiency by 40%. Outstanding work!"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  RK
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Raj Kumar</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>CTO, SmartFactory</div>
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