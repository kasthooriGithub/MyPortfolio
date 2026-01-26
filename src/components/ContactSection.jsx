import { useState } from "react";

const contactInfo = [
  {
    iconClass: "bi bi-envelope",
    label: "Email",
    value: "developer@email.com",
    href: "mailto:developer@email.com",
    bg: "rgba(0, 240, 255, 0.10)",
    color: "var(--neon-cyan)",
  },
  {
    iconClass: "bi bi-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/developer",
    href: "https://linkedin.com",
    bg: "rgba(0, 102, 255, 0.10)",
    color: "var(--neon-blue)",
  },
  {
    iconClass: "bi bi-github",
    label: "GitHub",
    value: "github.com/developer",
    href: "https://github.com",
    bg: "rgba(112, 0, 255, 0.10)",
    color: "var(--neon-purple)",
  },
  {
    iconClass: "bi bi-geo-alt",
    label: "Location",
    value: "Available Worldwide",
    href: null,
    bg: "rgba(255, 255, 255, 0.06)",
    color: "#fff",
  },
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
            Get In <span className="hero-gradient-text">Touch</span>
          </h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: "720px" }}>
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          {/* LEFT – Contact Info */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="fw-bold text-white mb-2">Let's Connect</h3>
              <p className="text-white-50">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                of your vision.
              </p>
            </div>

            <div className="d-flex flex-column gap-3">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="card-glass d-flex align-items-center p-3"
                  style={{ height: "60px" }}   // ✅ SAME HEIGHT
                >
                  {/* Icon */}
                  <div
                    className="icon-box me-3"
                    style={{
                      background: info.bg,
                      color: info.color,
                    }}
                  >
                    <i className={`${info.iconClass}`} />
                  </div>

                  {/* Text */}
                  <div className="info-text">
                    <small>{info.label}</small>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Form */}
          <div className="col-lg-6">
            <div
              className="p-3 p-md-4 rounded-3"
              style={{
                background: "rgba(5, 5, 20, 0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3 className="fw-bold text-white mb-4">Send a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="text-white-50 small">Name</label>
                    <input
                      className="form-control form-control-dark"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="text-white-50 small">Email</label>
                    <input
                      className="form-control form-control-dark"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="text-white-50 small">Subject</label>
                  <input
                    className="form-control form-control-dark"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="text-white-50 small">Message</label>
                  <textarea
                    className="form-control form-control-dark"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 rounded-3"
                >
                  <i className="bi bi-send me-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
