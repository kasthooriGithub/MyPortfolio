import React, { useState } from 'react';

const staticProjects = [
  {
    id: 1,
    title: 'Modern Portfolio',
    description: 'A responsive and high-performance portfolio website built with React and Bootstrap.',
    project_type: 'Web',
    tech_stack: ['React', 'Bootstrap', 'Custom CSS'],
    github_url: 'https://github.com',
    live_url: 'https://github.com',
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'A web application to track workouts, calories, and progress.',
    project_type: 'Web',
    tech_stack: ['React', 'Firebase', 'Bootstrap', 'Custom CSS'],
    github_url: 'https://github.com/test/test.git',
    live_url: 'https://github.com//test/test.git',
  }
];

const colorMap = {
  'Web': 'text-primary border-primary',
  'Mobile': 'text-info border-info',
  'SaaS': 'text-warning border-warning',
};

const ProjectsSection = () => {
  const [projects] = useState(staticProjects);

  return (
    <section id="projects" className="py-5">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 display-md-4 fw-bold">
            Featured <span className="hero-gradient-text">Projects</span>
          </h2>
          <p className="mt-2 opacity-75 px-lg-5 mx-auto" style={{ maxWidth: '700px' }}>
            Selected works that showcase my technical expertise and problem-solving skills.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-5">
              <div className="card-glass h-100 p-0 overflow-hidden border-0 shadow-lg">
                <div className="p-4 p-md-5 d-flex flex-column h-100">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className={`badge border ${colorMap[project.project_type] || 'text-light border-light'} px-3 py-2`} style={{ fontSize: '0.75rem' }}>
                      {project.project_type}
                    </span>
                    <div className="d-flex gap-4">
                      <a href={project.github_url} className="hover-primary fs-4 text-light" target="_blank" rel="noreferrer" title="View Source Code">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href={project.live_url} className="hover-primary fs-4 text-light" target="_blank" rel="noreferrer" title="Live Preview">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                  
                  <h4 className="fw-bold mb-3">{project.title}</h4>
                  <p className="opacity-75 mb-4 flex-grow-1 lh-base">{project.description}</p>
                  
                  <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-25 mt-auto">
                    {project.tech_stack.map((tech, idx) => (
                      <span key={idx} className="small py-1 px-3 border border-secondary rounded-pill opacity-50" style={{ fontSize: '0.7rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
