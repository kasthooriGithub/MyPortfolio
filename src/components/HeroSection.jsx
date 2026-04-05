import React from 'react';

const HeroSection = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden py-5 mt-lg-0">
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <div className="mb-4 animate-fade-in">
              <span className="badge-glass px-3 py-2 mb-3">
                <i className="bi bi-rocket-takeoff me-2"></i> Available for Projects
              </span>
            </div>
            
            <h1 className="display-3 display-md-2 display-lg-1 fw-bold mb-3 tracking-tight">
              Hi, I'm <span className="hero-gradient-text glow-text">JK</span>
            </h1>
            
            <h2 className="h4 h2-md display-6-lg fw-bold mb-4 opacity-75">
              Junior Web Developer 
            </h2>
            
            <p className="lead mx-auto mb-5 opacity-75 px-lg-5" style={{ maxWidth: '800px' }}>
              Crafting beautiful, functional web experiences with modern technologies. 
              Specializing in <span className="text-primary fw-semibold">React</span> and 
              <span className="text-primary fw-semibold"> UI/UX Design</span>.
            </p>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 px-2 px-sm-0">
              <a 
                href="#projects" 
                className="btn btn-primary btn-lg px-lg-5 py-3 shadow-lg" 
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                <i className="bi bi-folder2-open me-2"></i> View Projects
              </a>
              <a 
                href="/Kasthoori_CV.pdf" 
                className="btn btn-outline-secondary btn-lg px-lg-5 py-3 shadow-sm" 
                download
              >
                <i className="bi bi-download me-2"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
