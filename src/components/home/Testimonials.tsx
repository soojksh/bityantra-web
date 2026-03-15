import { Star } from "lucide-react";
import "./testimonials.css";

export default function Testimonials() {
  return (
    <>
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
                  "bitYantra upgraded our business website into a fast, modern platform with clean UI.
                  Within 8 weeks, we saw a major rise in inquiries and more walk-in customers from Google."
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar avatar-indigo">AS</div>
                  <div>
                    <div className="testimonial-name">Anish Shrestha</div>
                    <div className="testimonial-role">Founder, Thamel Traders (Kathmandu)</div>
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
                  "They built our delivery app for Android and iOS with a smooth user experience.
                  Tracking, notifications, and admin features worked perfectly — our orders doubled during peak hours."
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar avatar-pink">PN</div>
                  <div>
                    <div className="testimonial-name">Prakriti Neupane</div>
                    <div className="testimonial-role">Operations Lead, Pokhara Fresh Mart</div>
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
                  "Their IoT monitoring system helped us track temperature and machine status in real time.
                  Downtime reduced significantly, and we now get instant alerts before problems become costly."
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar avatar-cyan">SG</div>
                  <div>
                    <div className="testimonial-name">Suman Gautam</div>
                    <div className="testimonial-role">Plant Manager, Biratnagar Agro Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}