import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string | null;
  tech_stack: string[] | null;
  project_type: string;
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

interface ProjectFormProps {
  project?: Project | null;
  onSubmit: (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  onCancel: () => void;
  loading: boolean;
}

const ProjectForm = ({ project, onSubmit, onCancel, loading }: ProjectFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [projectType, setProjectType] = useState('Web');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description || '');
      setTechStack(project.tech_stack?.join(', ') || '');
      setProjectType(project.project_type);
      setGithubUrl(project.github_url || '');
      setLiveUrl(project.live_url || '');
      setImageUrl(project.image_url || '');
    }
  }, [project]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const techArray = techStack
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    await onSubmit({
      title,
      description: description || null,
      tech_stack: techArray.length > 0 ? techArray : null,
      project_type: projectType,
      github_url: githubUrl || null,
      live_url: liveUrl || null,
      image_url: imageUrl || null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          {project ? 'Edit Project' : 'Add New Project'}
        </h3>
        <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project description"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="techStack">Tech Stack (comma-separated)</Label>
        <Input
          id="techStack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="React, TypeScript, Tailwind CSS"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select value={projectType} onValueChange={setProjectType}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Web">Web</SelectItem>
            <SelectItem value="Mobile">Mobile</SelectItem>
            <SelectItem value="SaaS">SaaS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="githubUrl">GitHub URL</Label>
        <Input
          id="githubUrl"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          placeholder="https://github.com/..."
          type="url"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="liveUrl">Live URL</Label>
        <Input
          id="liveUrl"
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          placeholder="https://..."
          type="url"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://..."
          type="url"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" disabled={loading || !title.trim()} className="flex-1">
          {loading ? 'Saving...' : project ? 'Update Project' : 'Add Project'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
