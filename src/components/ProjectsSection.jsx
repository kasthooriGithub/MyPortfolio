const projects = [
  {
    title: "MarketFlow",
    description: "Digital marketing SaaS marketplace",
    type: "Web",
    github: "#",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description: "Flutter-based expense tracking app",
    type: "Mobile",
    github: "#",
    live: "#",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            Featured <span className="text-primary" style={{ color: "var(--neon-blue)" }}>Projects</span>
          </h2>
        </div>

        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 mb-4" key={project.title}>
              <div className="card-glass h-100 p-3">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-white mb-2">{project.title}</h5>
                  <p className="text-white-50 mb-3">{project.description}</p>
                  <span className="badge-glass mb-4 d-inline-block">
                    {project.type}
                  </span>
                  <div className="mt-2">
                    <a href={project.live} className="btn btn-sm btn-primary me-2">
                      <i className="bi bi-globe me-1"></i> Live Demo
                    </a>
                    <a href={project.github} className="btn btn-sm btn-outline-secondary">
                      <i className="bi bi-github me-1"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
