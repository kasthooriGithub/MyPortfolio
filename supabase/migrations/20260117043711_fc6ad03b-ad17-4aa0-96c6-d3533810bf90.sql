-- Create function to update timestamps (if not exists)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tech_stack TEXT[],
  project_type TEXT NOT NULL DEFAULT 'Web' CHECK (project_type IN ('Web', 'Mobile', 'SaaS')),
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public can view all projects
CREATE POLICY "Anyone can view projects"
ON public.projects
FOR SELECT
USING (true);

-- Only admins can insert projects
CREATE POLICY "Admins can insert projects"
ON public.projects
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update projects
CREATE POLICY "Admins can update projects"
ON public.projects
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete projects
CREATE POLICY "Admins can delete projects"
ON public.projects
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for projects updated_at
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();