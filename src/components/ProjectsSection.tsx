import { useState, useEffect } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

interface Project {
  id: string;
  title: string;
  description: string | null;
  tech_stack: string[] | null;
  project_type: string;
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
}

const colorMap: Record<string, string> = {
  'Web': 'primary',
  'Mobile': 'purple',
  'SaaS': 'cyan',
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my work across different technologies and domains
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Empty State */}
          {!loading && projects.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No projects to display yet.</p>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && projects.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const color = colorMap[project.project_type] || 'primary';
                return (
                  <div
                    key={project.id}
                    className="group rounded-2xl bg-glass border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden bg-secondary/50">
                      {project.image_url ? (
                        <img 
                          src={project.image_url} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-br from-${color}/20 to-transparent`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-20 h-20 rounded-full bg-${color}/20 blur-xl group-hover:scale-150 transition-transform duration-500`} />
                            <span className="absolute text-6xl opacity-30">💻</span>
                          </div>
                        </>
                      )}
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.live_url && (
                          <Button size="sm" className="bg-gradient-primary text-primary-foreground" asChild>
                            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.github_url && (
                          <Button size="sm" variant="outline" className="border-primary/50 text-primary" asChild>
                            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {project.project_type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description || 'No description available.'}
                      </p>
                      
                      {/* Tech Stack */}
                      {project.tech_stack && project.tech_stack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tech_stack.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
