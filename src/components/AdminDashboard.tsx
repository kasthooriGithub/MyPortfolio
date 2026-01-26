import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LogOut, 
  ArrowLeft,
  RefreshCw,
  Inbox,
  FolderOpen,
  MessageSquare,
  Calendar,
  Plus
} from 'lucide-react';
import ProjectForm, { Project } from './admin/ProjectForm';
import ProjectList from './admin/ProjectList';
import MessageList, { ContactSubmission } from './admin/MessageList';
import MessageDetails from './admin/MessageDetails';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [savingProject, setSavingProject] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchSubmissions = async () => {
    setLoadingMessages(true);
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching messages",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setSubmissions(data || []);
    }
    setLoadingMessages(false);
  };

  const fetchProjects = async () => {
    setLoadingProjects(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching projects",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProjects(data || []);
    }
    setLoadingProjects(false);
  };

  useEffect(() => {
    fetchSubmissions();
    fetchProjects();
  }, []);

  const handleDeleteSubmission = async (id: string) => {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error deleting message",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Message deleted",
        description: "The message has been removed.",
      });
      setSubmissions(submissions.filter(s => s.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const handleMarkAsRead = async (id: string) => {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status: 'read' })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setSubmissions(submissions.map(s => 
        s.id === id ? { ...s, status: 'read' } : s
      ));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status: 'read' });
      }
    }
  };

  const handleSelectSubmission = async (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    if (submission.status === 'new') {
      await handleMarkAsRead(submission.id);
    }
  };

  const handleSaveProject = async (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
    setSavingProject(true);
    
    if (editingProject) {
      const { error } = await supabase
        .from('projects')
        .update(data)
        .eq('id', editingProject.id);

      if (error) {
        toast({
          title: "Error updating project",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Project updated",
          description: "The project has been updated successfully.",
        });
        await fetchProjects();
        setEditingProject(null);
        setShowProjectForm(false);
      }
    } else {
      const { error } = await supabase
        .from('projects')
        .insert([data]);

      if (error) {
        toast({
          title: "Error adding project",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Project added",
          description: "The project has been added successfully.",
        });
        await fetchProjects();
        setShowProjectForm(false);
      }
    }
    
    setSavingProject(false);
  };

  const handleDeleteProject = async (id: string) => {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error deleting project",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Project deleted",
        description: "The project has been removed.",
      });
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setShowProjectForm(true);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const newMessagesCount = submissions.filter(s => s.status === 'new').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{projects.length}</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Inbox className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{submissions.length}</p>
                <p className="text-sm text-muted-foreground">Total Messages</p>
              </div>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{newMessagesCount}</p>
                <p className="text-sm text-muted-foreground">New Messages</p>
              </div>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {submissions.filter(s => 
                    new Date(s.created_at).toDateString() === new Date().toDateString()
                  ).length}
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="bg-card/50 border border-border">
            <TabsTrigger value="projects" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FolderOpen className="w-4 h-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Inbox className="w-4 h-4 mr-2" />
              Messages
              {newMessagesCount > 0 && (
                <span className="ml-2 bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                  {newMessagesCount}
                </span>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Manage Projects</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={fetchProjects} disabled={loadingProjects}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${loadingProjects ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => { setEditingProject(null); setShowProjectForm(true); }}
                  disabled={showProjectForm}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className={`${showProjectForm ? 'lg:col-span-2' : 'lg:col-span-3'} bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden`}>
                <ProjectList
                  projects={projects}
                  loading={loadingProjects}
                  onEdit={handleEditProject}
                  onDelete={handleDeleteProject}
                />
              </div>

              {showProjectForm && (
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <ProjectForm
                    project={editingProject}
                    onSubmit={handleSaveProject}
                    onCancel={() => { setShowProjectForm(false); setEditingProject(null); }}
                    loading={savingProject}
                  />
                </div>
              )}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Contact Messages</h2>
              <Button variant="outline" size="sm" onClick={fetchSubmissions} disabled={loadingMessages}>
                <RefreshCw className={`w-4 h-4 mr-2 ${loadingMessages ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                <MessageList
                  submissions={submissions}
                  loading={loadingMessages}
                  selectedId={selectedSubmission?.id || null}
                  onSelect={handleSelectSubmission}
                  onDelete={handleDeleteSubmission}
                />
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <MessageDetails
                  submission={selectedSubmission}
                  onMarkAsRead={handleMarkAsRead}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
