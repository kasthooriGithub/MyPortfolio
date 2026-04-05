import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: 'bi-window-sidebar',
    skills: ['React', 'JavaScript', 'Bootstrap 5', 'HTML5 & CSS3'],
  },
  {
    category: 'Backend',
    icon: 'bi-database-gear',
    skills: ['PHP', 'MySQL', 'Firebase'],
  },
  {
    category: 'Design & Tools',
    icon: 'bi-vector-pen',
    skills: ['Figma', 'UI/UX Design', 'Git & GitHub', 'Vite', 'VS Code'],
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-5 bg-glass">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 display-md-4 fw-bold">
            My <span className="hero-gradient-text">Skills</span>
          </h2>
          <p className="opacity-75 mt-2 px-lg-5 mx-auto" style={{ maxWidth: '700px' }}>
            A technical toolkit that empowers me to build modern, high-performance web solutions.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="card-glass p-4 h-100 border-0 shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="icon-box bg-dark text-primary shadow-sm" style={{ width: '45px', height: '45px' }}>
                    <i className={`bi ${group.icon} fs-5`}></i>
                  </div>
                  <h5 className="fw-bold mb-0">{group.category}</h5>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge-glass px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
