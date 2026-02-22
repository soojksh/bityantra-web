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
    </>
  );
}