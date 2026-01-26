import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'UI/UX Design Intern',
    company: 'Tech Startup',
    period: '2024 - Present',
    description: 'Designed user interfaces and prototypes for web and mobile applications. Conducted user research and usability testing to improve product experiences.',
    type: 'work',
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Built responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with clients to deliver custom solutions.',
    type: 'work',
  },
  {
    title: 'Supabase/Firebase Experience',
    company: 'Personal Projects',
    period: '2023 - Present',
    description: 'Developed full-stack applications leveraging Supabase and Firebase for authentication, real-time databases, and cloud functions.',
    type: 'work',
  },
  {
    title: 'AI-Assisted Development',
    company: 'Continuous Learning',
    period: '2023 - Present',
    description: 'Integrated AI tools into development workflow for code generation, debugging, and documentation. Explored AI-powered design tools.',
    type: 'learning',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional journey and continuous growth in tech
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple to-primary/30 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform md:-translate-x-1/2 -translate-y-1 glow-cyan" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-8 md:pl-0`}>
                    <div className="p-6 rounded-2xl bg-glass border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          exp.type === 'work' ? 'bg-primary/10' : 'bg-purple/10'
                        }`}>
                          {exp.type === 'work' ? (
                            <Briefcase className="w-5 h-5 text-primary" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-purple" />
                          )}
                        </div>
                      </div>

                      {/* Period */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-sm text-muted-foreground mb-4">
                        {exp.period}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
