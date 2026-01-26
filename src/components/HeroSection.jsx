import Button from "./ui/Button";
import Badge from "./ui/Badge";

function HeroSection() {
  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center text-center position-relative"
      style={{ paddingTop: "120px" }}
    >
      <div className="container">
        <Badge text="Available for opportunities" />

        <h1 className="display-3 fw-bold mt-3 mb-3 text-white">
          Hi, I'm <span className="hero-gradient-text">Developer</span>
        </h1>

        <p className="h3 mb-4">
          <span className="text-info glow-text">Junior Web Developer</span>{" "}
          <span className="text-muted">&</span>{" "}
          <span className="text-primary glow-text" style={{ color: "var(--neon-purple)" }}>UI/UX Designer</span>
        </p>

        <p className="text-white-50 mx-auto mt-4 fs-5" style={{ maxWidth: "600px" }}>
          Crafting beautiful, functional web experiences with modern technologies.
          Passionate about clean code and intuitive design.
        </p>

        <div className="mt-4 mb-4 animate-bounce">
          <span className="small d-block mb-2" style={{ color: "var(--neon-cyan)", fontWeight: "500" }}>Scroll Down</span>
          <button
            className="btn btn-link text-decoration-none"
            style={{ color: "var(--neon-cyan)" }}
            onClick={() => handleScroll("#about")}
          >
            <i className="bi bi-arrow-down fs-4"></i>
          </button>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <Button onClick={() => handleScroll("#projects")}>
            <i className="bi bi-folder2-open me-2"></i> View Projects
          </Button>

          <Button variant="outline" href="/cv.pdf">
            <i className="bi bi-download me-2"></i> Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
