import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify captcha");
      return;
    }

    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert("Please verify captcha");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/contact-submission", {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        captcha: token,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
      });
      setCaptchaVerified(false);
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section section-padding fix">
      <div className="container">
        {/* Top Section (Hero) */}
        <div className="section-title text-center mb-5">
          <div className="mb-3">
            <i className="bi bi-chat-quote-fill text-primary display-4"></i>
          </div>
          <h2 className="title">Get in Touch</h2>
          <p
            className="mt-3 fs-5 text-muted"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            We’d love to hear from you. Whether you have a question, need
            support, or want a demo, our team is here to help.
          </p>
        </div>

        <div className="row g-5">
          {/* Left Column – Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-wrapper p-4 p-md-5 bg-light rounded-4">
              <img
                src="/contact-us.jpg"
                alt="Contact"
                className="img-fluid w-100 mb-4 rounded-4"
              />
              <h3 className="h4 mb-4">Contact Information</h3>

              <div className="d-flex flex-column gap-4">
                {/* Support Email */}
                <div className="d-flex align-items-start">
                  <div className="icon me-3 text-primary fs-4">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1">Support Email</h5>
                    <a
                      href="mailto:support@markops.io"
                      className="text-decoration-none text-body"
                    >
                      support@markops.io
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="d-flex align-items-start">
                  <div className="icon me-3 text-primary fs-4">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1">Phone Number</h5>
                    <a
                      href="tel:+15550123456"
                      className="text-decoration-none text-body"
                    >
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="d-flex align-items-start">
                  <div className="icon me-3 text-primary fs-4">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1">Working Hours</h5>
                    <p className="mb-0 text-muted">Mon–Fri, 9AM–6PM EST</p>
                  </div>
                </div>

                <hr className="my-2" />

                {/* FAQ Link */}
                <div>
                  <p className="mb-0">
                    Need quick help?{" "}
                    <Link
                      to="/faq"
                      className="text-primary fw-medium text-decoration-none"
                    >
                      Visit our FAQ page.
                    </Link>
                  </p>
                </div>

                {/* Social Icons */}
                <div className="mt-auto pt-3">
                  <h5 className="h6 fw-bold mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a
                      href="#"
                      className="btn btn-outline-dark text-dark rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline-dark text-dark rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                      aria-label="Twitter"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-wrapper p-4 p-md-5 bg-white rounded-4 border shadow-sm">
              {submitted ? (
                <div className="text-center py-5">
                  <div className="mb-3">
                    <i className="bi bi-check-circle-fill text-success display-1"></i>
                  </div>
                  <h3 className="h3 mb-3">Thank you!</h3>
                  <p className="lead text-muted">We will contact you soon.</p>
                  <button
                    className="btn btn-outline-primary mt-3"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-medium">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Company */}
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label fw-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fw-medium">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label fw-medium">
                        Subject <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-medium">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Write your message..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* CAPTCHA Placeholder */}
                    <div className="col-12">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={() => setCaptchaVerified(true)}
                        onExpired={() => setCaptchaVerified(false)}
                      />
                    </div>

                    {/* Submit Button & Note */}
                    <div className="col-12 mt-4">
                      <p className="text-muted small mb-2">
                        <i className="bi bi-clock me-1"></i> We’ll reply within
                        one business day.
                      </p>
                      <button
                        type="submit"
                        className="theme-btn w-100 justify-content-center"
                        disabled={!captchaVerified || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-5 pt-4">
          <div
            className="map-wrapper rounded-4 overflow-hidden shadow-sm"
            style={{ height: "450px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149507.90839115126!2d73.72107993955404!3d19.99110533832709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1770016832293!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MarkOps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
