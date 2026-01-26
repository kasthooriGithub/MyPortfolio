const experiences = [
  {
    title: "UI/UX Design Intern",
    company: "Tech Startup",
    period: "2024 - Present",
    description:
      "Designed user interfaces and prototypes for web and mobile applications.",
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Built responsive web applications using React and modern CSS.",
  },
  {
    title: "Backend Experience",
    company: "Personal Projects",
    period: "2023 - Present",
    description:
      "Worked with Firebase for authentication and databases.",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            My <span className="text-primary" style={{ color: "var(--neon-purple)" }}>Experience</span>
          </h2>
          <p className="text-white-50 lead">
            Professional journey and continuous learning
          </p>
        </div>

        <div className="row">
          {experiences.map((exp, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-glass h-100 p-3">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-white">{exp.title}</h5>
                  <h6 className="mb-2" style={{ color: "var(--neon-cyan)" }}>{exp.company}</h6>
                  <small className="text-white-50 d-block mb-3">{exp.period}</small>
                  <p className="text-white-50 mb-0">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
