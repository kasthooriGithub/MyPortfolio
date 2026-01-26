import { Code2, Palette, Rocket, Users } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', description: 'Writing maintainable solutions' },
  { icon: Palette, label: 'UI/UX Design', description: 'Creating intuitive interfaces' },
  { icon: Rocket, label: 'Performance', description: 'Optimizing for speed' },
  { icon: Users, label: 'Collaboration', description: 'Team-oriented approach' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-glass border border-border/50 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                  <Code2 className="w-32 h-32 text-primary/50 absolute" />
                </div>
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute bottom-10 left-10 w-16 h-16 rounded-xl bg-purple/20 backdrop-blur-sm border border-purple/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Passionate Developer & Designer
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a Junior Web Developer and UI/UX Designer with a passion for creating 
                beautiful, user-centric digital experiences. My journey in tech started with 
                curiosity and has grown into a deep commitment to crafting efficient, 
                elegant solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With experience in React, Flutter, and backend technologies like Supabase 
                and Firebase, I bring ideas to life through clean code and thoughtful design. 
                I believe in continuous learning and staying updated with the latest 
                technologies and design trends.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <div 
                    key={item.label}
                    className="p-4 rounded-xl bg-glass border border-border/50 hover:border-primary/50 transition-colors group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
