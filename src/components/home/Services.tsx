import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./services.css";

type SectionId = "website-dev" | "mobile-app" | "digital-marketing" | "iot-hardware";

type ServiceConfig = {
  id: SectionId;
  nav: string;
  title: string;
  subtitle: string;
  panelTitle: string;
  panelDesc: string;
  bullets: string[];
  themeClass: string;
  lottieSrc: string;
};

export default function Services() {
  const [activeProduct, setActiveProduct] = useState<SectionId>("website-dev");

  const services = useMemo<ServiceConfig[]>(
    () => [
      {
        id: "website-dev",
        nav: "Website Development",
        title: "Website Development",
        subtitle: "Clean, responsive sites that convert visitors into customers",
        panelTitle: "Web Development",
        panelDesc: "Modern UI, fast performance, and scalable architecture — built for growth.",
        bullets: ["Responsive", "SEO-ready", "Secure"],
        themeClass: "service-panel--web",
        lottieSrc:
          "https://lottie.host/de03ccb2-a536-47d7-80e8-08fc8e728402/C7o8cKM5is.lottie",
      },
      {
        id: "mobile-app",
        nav: "Mobile Apps",
        title: "Mobile Application",
        subtitle: "Android and iOS apps that users love",
        panelTitle: "Mobile App Development",
        panelDesc: "High-quality apps with smooth UX — native feel, cross-platform efficiency.",
        bullets: ["React Native", "Flutter", "Native iOS/Android"],
        themeClass: "service-panel--mobile",
        lottieSrc:
          "https://lottie.host/c6197d2d-7193-4c89-be1d-e03d78841ecf/fXG84uaSde.lottie",
      },
      {
        id: "digital-marketing",
        nav: "Digital Marketing",
        title: "Digital Marketing",
        subtitle: "Data-driven strategies that grow your business",
        panelTitle: "Digital Marketing",
        panelDesc: "Performance-focused campaigns that grow reach, trust, and conversions.",
        bullets: ["SEO & Content", "Social Media", "Ads & Retargeting", "Analytics & Reporting"],
        themeClass: "service-panel--marketing",
        lottieSrc:
          "https://lottie.host/a2080ac5-3769-4173-a99e-4bac03a1155d/M1Fut7K438.lottie",
      },
      {
        id: "iot-hardware",
        nav: "IoT & Hardware",
        title: "IoT & Hardware",
        subtitle: "Smart devices and embedded systems for the connected world",
        panelTitle: "IoT & Hardware",
        panelDesc: "From prototypes to production-ready devices with cloud connectivity.",
        bullets: ["Arduino & Raspberry Pi", "Embedded Systems", "Cloud Integration", "Device Prototyping"],
        themeClass: "service-panel--iot",
        // Replace this with your final IoT .lottie link when you provide it
        lottieSrc:
          "https://lottie.host/de03ccb2-a536-47d7-80e8-08fc8e728402/C7o8cKM5is.lottie",
      },
    ],
    []
  );

  // ScrollSpy Logic (kept)
  useEffect(() => {
    const navHeight = 90;

    const handleScroll = () => {
      for (const svc of services) {
        const el = document.getElementById(svc.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        if (rect.top <= navHeight + 130 && rect.bottom >= navHeight + 60) {
          setActiveProduct(svc.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services]);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 90;
    const offset = el.getBoundingClientRect().top + window.scrollY - (navHeight + 18);
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <section className="products-section">
      <div className="products-container">
        {/* Sidebar */}
        <div className="products-sidebar" role="navigation" aria-label="Services navigation">
          {services.map((svc) => (
            <button
              key={svc.id}
              className={`sidebar-item ${activeProduct === svc.id ? "active" : ""}`}
              onClick={() => scrollToSection(svc.id)}
              type="button"
            >
              <h3>{svc.nav}</h3>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="products-content">
          {services.map((svc) => (
            <div key={svc.id} id={svc.id} className="product-display">
              <h2>{svc.title}</h2>
              <p>{svc.subtitle}</p>

              <div className={`service-panel ${svc.themeClass}`}>
                <div className="service-panel-visual" aria-hidden="true">
                  {/* NO BOX/FRAME AROUND LOTTIE */}
                  <DotLottieReact className="service-lottie" src={svc.lottieSrc} autoplay loop />
                </div>

                <div className="service-panel-text">
                  <h3>{svc.panelTitle}</h3>
                  <p>{svc.panelDesc}</p>

                  <div className="service-panel-bullets">
                    {svc.bullets.map((t) => (
                      <div className="service-panel-pill" key={t}>
                        <Check size={16} className="pill-icon" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-panel-note">
                    Clean delivery, clear milestones, and performance-first implementation.
                  </div>
                </div>

                {/* Soft background ornament (same for all panels) */}
                <span className="panel-orb orb-1" aria-hidden="true" />
                <span className="panel-orb orb-2" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}