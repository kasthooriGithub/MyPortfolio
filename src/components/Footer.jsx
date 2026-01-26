function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center">
      <div className="container">
        <div className="mb-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4 me-4"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4 me-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:developer@email.com"
            className="text-white fs-4"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>

        <p className="text-white-50 mb-0 small">
          © {year} · Built with React & Bootstrap · <span style={{ color: "var(--neon-purple)" }}>Kasthoori</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
