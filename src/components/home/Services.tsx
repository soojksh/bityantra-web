import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./services.css";

type SectionId = "website-dev" | "mobile-app" | "digital-marketing" | "iot-hardware";

type DetailGroup = {
  title: string;
  items: string[];
};

type BulletDetail = {
  label: string;
  groups: DetailGroup[];
};

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
  bulletDetails: Record<string, BulletDetail>;
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
        themeClass: "service-panel--web",
        lottieSrc: "https://lottie.host/6d9cf6b2-6e7e-4a76-9181-01f011246e66/NxND8wBa4n.lottie",
        bullets: ["Business Websites", "E-Commerce", "Portfolio & Branding", "Custom Solutions"],
        bulletDetails: {},
      },
      {
        id: "mobile-app",
        nav: "Mobile Apps",
        title: "Mobile Application",
        subtitle: "Android and iOS apps that users love",
        panelTitle: "Mobile App Development",
        panelDesc: "High-quality apps with smooth UX — native feel, cross-platform efficiency.",
        themeClass: "service-panel--mobile",
        lottieSrc: "https://lottie.host/c6197d2d-7193-4c89-be1d-e03d78841ecf/fXG84uaSde.lottie",
        bullets: ["Android & iOS", "UI/UX & Performance", "Backend & APIs", "Maintenance & Scaling"],
        bulletDetails: {},
      },
      {
        id: "digital-marketing",
        nav: "Digital Marketing",
        title: "Digital Marketing",
        subtitle: "Data-driven strategies that grow your business",
        panelTitle: "Digital Marketing",
        panelDesc: "Performance-focused campaigns that grow reach, trust, and conversions.",
        themeClass: "service-panel--marketing",
        lottieSrc: "https://lottie.host/a2080ac5-3769-4173-a99e-4bac03a1155d/M1Fut7K438.lottie",
        bullets: ["SEO 360", "Ads / Boosting", "Content Creation", "Social Media Management"],
        bulletDetails: {},
      },
      {
        id: "iot-hardware",
        nav: "IoT & Hardware",
        title: "IoT & Hardware",
        subtitle: "Smart devices and embedded systems for the connected world",
        panelTitle: "IoT & Hardware",
        panelDesc: "From prototypes to production-ready devices with cloud connectivity.",
        themeClass: "service-panel--iot",
        lottieSrc: "https://lottie.host/f6dbb92d-222a-465e-9a22-02ec53cdf4e0/6NIHf8RCWE.lottie",
        bullets: ["Smart Machines", "Trackers & GPS", "IoT Systems", "Customization"],
        bulletDetails: {},
      },
    ],
    []
  );

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

        <div className="products-content">
          {services.map((svc, index) => {
            const alternateClass = index % 2 === 1 ? "service-panel--reverse" : "";

            return (
              <div key={svc.id} id={svc.id} className="product-display">
                <h2>{svc.title}</h2>
                <p>{svc.subtitle}</p>

                <div className={`service-panel ${svc.themeClass} ${alternateClass}`}>
                  <div className="service-panel-visual" aria-hidden="true">
                    <DotLottieReact className="service-lottie" src={svc.lottieSrc} autoplay loop />
                  </div>

                  <div className="service-panel-text">
                    <h3>{svc.panelTitle}</h3>
                    <p>{svc.panelDesc}</p>

                    <ul className="service-bullets" aria-label={`${svc.panelTitle} bullet points`}>
                      {svc.bullets.map((label) => (
                        <li key={label} className="service-bullet-item">
                          <Check size={16} className="bullet-icon" aria-hidden="true" />
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="panel-orb orb-1" aria-hidden="true" />
                  <span className="panel-orb orb-2" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}