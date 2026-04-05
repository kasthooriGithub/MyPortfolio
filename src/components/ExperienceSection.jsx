import React from 'react';

const experiences = [
  {
    company: 'Woocurs Technologies',
    role: 'Software Developer Intern',
    period: 'Aug 2025 - Feb 2026',
    description: 'Developing and maintaining responsive web applications using React, Bootstrap, and Firebase. Focused on performance optimization and writing clean, scalable code.',
  },
  {
    company: 'Bank of Ceylon – Thirunelvely',
    role: 'Banking Trainee',
    period: 'Feb 2023 - Aug 2023',
    description: 'Developed communication, teamwork, and professional workplace behavior in a high-stakes environment.',
  },
  {
    company: 'Academic Project',
    role: 'Full Stack Developer',
    period: '2021 - Present',
    description: 'Developed an online furniture platform using HTML, CSS, JavaScript, and PHP. Designed responsive user interfaces and implemented core features like product listing and navigation.',
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-5 bg-glass">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 display-md-4 fw-bold">
            My <span className="hero-gradient-text">Experience</span>
          </h2>
          <p className="opacity-75 mt-2 px-lg-5 mx-auto" style={{ maxWidth: '700px' }}>
            My professional journey in the world of technology and design.
          </p>
        </div>

        <div className="row g-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="card-glass p-4 h-100 border-0 shadow-sm d-flex flex-column">
                <div className="mb-3">
                  <span className="badge-glass px-3 py-1 text-primary">{exp.period}</span>
                </div>
                <h5 className="fw-bold mb-1">{exp.role}</h5>
                <p className="text-primary small fw-medium mb-3">{exp.company}</p>
                <p className="opacity-75 small mb-0 lh-base flex-grow-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
