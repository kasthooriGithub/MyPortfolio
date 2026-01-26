function AboutSection() {
  return (
    <section id="about" className="py-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            About <span className="text-primary" style={{ color: "var(--neon-purple)" }}>Me</span>
          </h2>
          <hr className="w-25 mx-auto" style={{ borderColor: "var(--neon-cyan)", opacity: 1 }} />
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <div className="card-glass p-5 text-center">
              <h3 className="fw-bold mb-3">
                <i className="bi bi-code-slash text-info display-4 d-block mb-3"></i>
                Developer
              </h3>
              <p className="text-white-50">
                Passionate about clean code, modern UI design, and building scalable web applications.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold mb-3 text-white">
              Passionate Developer & Designer
            </h4>
            <p className="text-white-50 fs-5">
              I’m a Junior Web Developer and UI/UX Designer who enjoys building
              user-friendly and visually appealing applications.
            </p>
            <p className="text-white-50 fs-5">
              I work with React, Flutter, Firebase, and Supabase and believe in
              continuous learning and improving my skills.
            </p>
            <div className="mt-4">
              <span className="badge-glass me-2">React</span>
              <span className="badge-glass me-2">Flutter</span>
              <span className="badge-glass">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
