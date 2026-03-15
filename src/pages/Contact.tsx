import "../index.css";
import "./contact.css";
import React, { useState } from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const EMAIL = "thisisooj@gmail.com";
  const PHONE = "9768987902";
  const ADDRESS = "Balkumari, Lalitpur-3, Nepal";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_5ltwlkr",
        "template_jt528n7",
        {
          to_email: "thisisooj@gmail.com",
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        "0te1j9VxTZ5lv9IIu"
      );

      alert("Message sent successfully!");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-shell">
          <div className="contact-hero-inner">
            <div className="contact-hero-left">
              <div className="section-badge">
                <span>Contact</span>
                <svg
                  className="badge-accent"
                  viewBox="0 0 120 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 4C20 1 40 1 60 4C80 7 100 7 120 4"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h1 className="contact-hero-title">Let’s build something great.</h1>
              <p className="contact-hero-subtitle">
                Tell us what you’re working on — we’ll reply with a clear plan and
                next steps.
              </p>
            </div>

            {/* Visual */}
            <div className="contact-hero-right">
              <div className="contact-visual-card">
                <div className="contact-visual-top">
                  <div className="contact-visual-dots" aria-hidden="true">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                </div>

                <div className="contact-visual-body">
                  <div className="msg-row">
                    <div className="msg msg-in">
                      <div className="msg-line w70" />
                      <div className="msg-line w55" />
                    </div>
                  </div>

                  <div className="msg-row right">
                    <div className="msg msg-out">
                      <div className="msg-line w60" />
                      <div className="msg-line w40" />
                    </div>
                  </div>

                  <div className="msg-row">
                    <div className="msg msg-in">
                      <div className="msg-line w65" />
                      <div className="msg-line w50" />
                    </div>
                  </div>

                  <div className="composer">
                    <div className="composer-input">
                      <span className="typing-text">
                        Hi bitYantra, I’d like a quote for...
                      </span>
                    </div>
                  </div>
                </div>

                <div className="contact-visual-glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        <div className="contact-shell">
          <div className="contact-content-inner">
            {/* FORM */}
            <div id="contact-form" className="contact-card">
              <div className="contact-card-head">
                <h2>Send us a message</h2>
                <p>We typically reply within 24–48 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What do you need help with?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSending}>
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            {/* DETAILS */}
            <div id="contact-details" className="contact-card">
              <div className="contact-card-head">
                <h2>Contact details</h2>
              </div>

              <div className="contact-details">
                <div className="detail-row">
                  <span className="detail-emoji" aria-hidden="true">
                    ✉️
                  </span>
                  <div>
                    <div className="label">Email</div>
                    <a className="value link" href={`mailto:${EMAIL}`}>
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-emoji" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <div className="label">Address</div>
                    <div className="value">{ADDRESS}</div>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-emoji" aria-hidden="true">
                    📞
                  </span>
                  <div>
                    <div className="label">Phone</div>
                    <a className="value link" href={`tel:${PHONE}`}>
                      {PHONE}
                    </a>
                  </div>
                </div>

                <div className="social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}