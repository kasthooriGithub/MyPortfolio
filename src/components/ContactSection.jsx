import React, { useState } from 'react';

const contactInfo = [
  { icon: 'bi-envelope', label: 'Email', value: 'test@gmail.com', href: 'mailto:test@gmail.com' },
  { icon: 'bi-github', label: 'GitHub', value: 'github.com/test', href: 'https://github.com/test' },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 display-md-4 fw-bold">
            Get In <span className="hero-gradient-text">Touch</span>
          </h2>
          <p className="opacity-75 mt-2 px-lg-5 mx-auto" style={{ maxWidth: '600px' }}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column gap-3">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="card-glass p-3 border-0 shadow-sm">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="icon-box bg-dark text-primary shadow-sm"
                      style={{ width: '50px', height: '50px', minWidth: '50px' }}
                    >
                      <i className={`bi ${info.icon} fs-4`}></i>
                    </div>
                    <div className="info-text overflow-hidden">
                      <small className="d-block opacity-50 mb-1">{info.label}</small>
                      <a
                        href={info.href}
                        className="text-light text-decoration-none text-truncate d-block fw-medium"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="card-glass p-4 p-md-5 border-0 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 g-md-4">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium opacity-75 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-dark"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-medium opacity-75 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-dark"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-medium opacity-75 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-dark"
                      placeholder="How can I help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-medium opacity-75 mb-2">Message</label>
                    <textarea
                      name="message"
                      className="form-control form-control-dark"
                      style={{ minHeight: '150px' }}
                      placeholder="Share your thoughts..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center text-md-end pt-3">
                    <button type="submit" className="btn btn-primary w-100 w-md-auto px-5 py-3 shadow-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm me-2"></span>
                      ) : (
                        <i className="bi bi-send-fill me-2"></i>
                      )}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1100 }}>
          <div className="bg-glass border border-primary p-3 rounded-4 shadow-lg animate-fade-in">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                <i className="bi bi-check2-circle text-primary fs-5"></i>
              </div>
              <div className="text-light fw-medium">Message sent successfully!</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
