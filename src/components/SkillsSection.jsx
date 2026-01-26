const skills = [
  {
    category: "Frontend",
    icon: "bi-code-slash",
    color: "#00f0ff", // Neon Cyan
    items: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript ES6+", "Vite"],
  },
  {
    category: "Backend",
    icon: "bi-database",
    color: "#7000ff", // Neon Purple
    items: ["Supabase", "Firebase", "Node.js", "PHP", "MySQL", "PostgreSQL"],
  },
  {
    category: "Mobile",
    icon: "bi-phone",
    color: "#e0e6ed", // White/Light
    items: ["Flutter", "React Native", "Responsive Design", "PWA", "Mobile-First"],
  },
  {
    category: "Tools & Other",
    icon: "bi-wrench",
    color: "#0066ff", // Neon Blue
    items: ["Git/GitHub", "Figma", "VS Code", "Postman", "Java", "AI Tools"],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">
            My <span style={{ color: "var(--neon-blue)" }}>Skills</span>
          </h2>
          <p className="text-white-50 lead">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="mx-auto mt-3" style={{ height: "4px", width: "60px", background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))", borderRadius: "2px" }}></div>
        </div>

        <div className="row g-4">
          {skills.map((skillGroup) => (
            <div className="col-md-6 col-lg-3" key={skillGroup.category}>
              <div className="card-glass h-100 p-4" style={{ borderRadius: "20px", background: "rgba(10, 10, 25, 0.6)" }}>
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: `rgba(${parseInt(skillGroup.color.slice(1, 3), 16)}, ${parseInt(skillGroup.color.slice(3, 5), 16)}, ${parseInt(skillGroup.color.slice(5, 7), 16)}, 0.15)`,
                      color: skillGroup.color
                    }}
                  >
                    <i className={`bi ${skillGroup.icon} fs-4`}></i>
                  </div>
                  <h5 className="fw-bold text-white mb-0">{skillGroup.category}</h5>
                </div>

                <ul className="list-unstyled mb-0">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="d-flex align-items-center mb-2 text-white-50" style={{ fontWeight: "500" }}>
                      <span
                        className="rounded-circle me-3"
                        style={{ width: "6px", height: "6px", backgroundColor: skillGroup.color }}
                      ></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
