import { ArrowDown, Download, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(187_100%_50%/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-primary/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient glow-text">Developer</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-primary font-semibold">Junior Web Developer</span>
            {' & '}
            <span className="text-purple font-semibold">UI/UX Designer</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code and intuitive design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold glow-cyan"
              onClick={() => handleScroll('#projects')}
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="/cv.pdf" download="Developer_CV.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <button 
            onClick={() => handleScroll('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
