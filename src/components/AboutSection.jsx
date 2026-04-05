import React from 'react';

const highlights = [
  { icon: 'bi-code-slash', label: 'Clean Code', description: 'Maintainable solutions' },
  { icon: 'bi-palette', label: 'UI/UX Design', description: 'User-centric interfaces' },
  { icon: 'bi-rocket-takeoff', label: 'Performance', description: 'Optimized speed' },
  { icon: 'bi-people', label: 'Collaboration', description: 'Professional teamwork' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 display-md-4 fw-bold">
            About <span className="hero-gradient-text">Me</span>
          </h2>
          <div className="mx-auto mt-2 rounded" style={{ height: '4px', width: '50px', background: 'var(--neon-cyan)' }}></div>
        </div>

        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="card-glass p-3 p-md-5">
              <div className="row g-3 g-md-4">
                {highlights.map((item, index) => (
                  <div key={index} className="col-6 col-sm-6">
                    <div className="text-center p-2 h-100 d-flex flex-column align-items-center">
                      <div className="icon-box mb-3 bg-dark text-primary" style={{ width: '50px', height: '50px' }}>
                        <i className={`bi ${item.icon} fs-4`}></i>
                      </div>
                      <h6 className="fw-bold mb-1">{item.label}</h6>
                      <p className="small mb-0 opacity-50 d-none d-sm-block">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2 mb-2 mb-lg-0">
            <div className="ps-lg-4">
              <h3 className="h3 h2-md fw-bold mb-4 text-center text-lg-start">
                Passionate Developer & Designer
              </h3>
              <p className="lead mb-4 opacity-75 text-center text-lg-start">
                I'm a Junior Web Developer and UI/UX Designer dedicated to building beautiful, 
                user-centric digital products. My journey combines technical precision with creative flair.
              </p>
              <p className="mb-5 opacity-50 text-center text-lg-start">
                With a toolkit featuring React, Bootstrap, and Firebase, I transform complex 
                problems into elegant, responsive solutions that deliver real value.
              </p>
              
              <div className="row g-3">
                <div className="col-6">
                  <div className="card-glass p-3 text-center border-0">
                    <h4 className="fw-bold text-primary mb-1">5+</h4>
                    <p className="mb-0 opacity-50 small">Projects</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-glass p-3 text-center border-0">
                    <h4 className="fw-bold text-primary mb-1">1+</h4>
                    <p className="mb-0 opacity-50 small">Year Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
