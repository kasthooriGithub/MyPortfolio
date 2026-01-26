import { Heart, Github, Linkedin, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <a href="#home" className="text-2xl font-bold text-gradient">
                John Smith
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Junior Web Developer & UI/UX Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:developer@email.com"
                className="w-10 h-10 rounded-xl bg-glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in {currentYear}
              </p>
              <Link 
                to="/admin" 
                className="text-sm text-muted-foreground/50 hover:text-primary transition-colors mt-1 inline-flex items-center gap-1"
              >
                <Lock className="w-3 h-3" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
