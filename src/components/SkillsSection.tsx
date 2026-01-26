import { Code, Database, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'primary',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript ES6+', 'Vite'],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'purple',
    skills: ['Supabase', 'Firebase', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: 'cyan',
    skills: ['Flutter', 'React Native', 'Responsive Design', 'PWA', 'Mobile-First'],
  },
  {
    title: 'Tools & Other',
    icon: Wrench,
    color: 'primary',
    skills: ['Git/GitHub', 'Figma', 'VS Code', 'Postman', 'Java', 'AI Tools'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-glass border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 group/skill"
                      style={{ animationDelay: `${(categoryIndex + skillIndex) * 0.05}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary group-hover/skill:scale-125 transition-transform" />
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
