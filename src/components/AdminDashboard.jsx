import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import ProjectForm from './admin/ProjectForm';
import ProjectList from './admin/ProjectList';
import MessageList from './admin/MessageList';
import MessageDetails from './admin/MessageDetails';

const AdminDashboard = () => {
    const [submissions] = useState([]);
    const [projects] = useState([]);
    const [loadingMessages] = useState(false);
    const [loadingProjects] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [editingProject, setEditingProject] = useState(null);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const { signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch logic removed (database interactions disabled)
    }, []);

    const handleDeleteSubmission = (id) => {
        alert("Database interactions are disabled.");
    };

    const handleSelectSubmission = (submission) => {
        setSelectedSubmission(submission);
    };

    const handleSaveProject = (data) => {
        alert("Database interactions are disabled.");
    };

    const handleDeleteProject = (id) => {
        alert("Database interactions are disabled.");
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        setShowProjectForm(true);
    };

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    return (
        <div className="container py-4 py-md-5 mt-4 mt-md-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 mb-md-5 gap-3">
                <div>
                    <h1 className="h3 h2-md fw-bold hero-gradient-text mb-1">Admin Dashboard</h1>
                    <p className="text-muted small mb-0">Manage your portfolio projects and messages.</p>
                </div>
                <div className="d-flex gap-2 gap-md-3 w-100 w-md-auto">
                    <Link to="/" className="btn btn-outline-secondary btn-sm flex-fill flex-md-grow-0">
                        <i className="bi bi-house me-2"></i> View Site
                    </Link>
                    <button className="btn btn-outline-danger btn-sm flex-fill flex-md-grow-0" onClick={handleSignOut}>
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                </div>
            </div>

            <div className="overflow-auto pb-2 mb-4">
                <ul className="nav nav-pills card-glass p-1 d-inline-flex border-0 text-nowrap" id="adminTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active py-2 px-3 px-md-4 small" id="messages-tab" data-bs-toggle="pill" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="true">
                            <i className="bi bi-envelope me-2"></i> Messages
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link py-2 px-3 px-md-4 small" id="projects-tab" data-bs-toggle="pill" data-bs-target="#projects" type="button" role="tab" aria-controls="projects" aria-selected="false">
                            <i className="bi bi-folder me-2"></i> Projects
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="adminTabsContent">
                <div className="tab-pane fade show active" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                    <div className="row g-4">
                        <div className="col-12 col-lg-4">
                            <h4 className="h6 fw-bold mb-3 d-flex justify-content-between align-items-center">
                                Inbox
                                <button className="btn btn-sm text-primary p-0" onClick={() => { }}>
                                    <i className="bi bi-arrow-clockwise"></i>
                                </button>
                            </h4>
                            <MessageList
                                submissions={submissions}
                                onSelect={handleSelectSubmission}
                                selectedId={selectedSubmission?.id}
                                loading={loadingMessages}
                                onDelete={handleDeleteSubmission}
                            />
                        </div>
                        <div className="col-12 col-lg-8">
                            <MessageDetails
                                submission={selectedSubmission}
                                onDelete={handleDeleteSubmission}
                                onBack={() => setSelectedSubmission(null)}
                            />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="projects" role="tabpanel" aria-labelledby="projects-tab">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-4 gap-3">
                        <h4 className="h6 fw-bold mb-0">Project Gallery</h4>
                        <button className="btn btn-primary btn-sm" onClick={() => { setEditingProject(null); setShowProjectForm(true); }}>
                            <i className="bi bi-plus-lg me-1"></i> Add Project
                        </button>
                    </div>
                    {showProjectForm ? (
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <ProjectForm
                                    project={editingProject}
                                    onSubmit={handleSaveProject}
                                    onCancel={() => setShowProjectForm(false)}
                                    loading={false}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive-sm">
                            <ProjectList
                                projects={projects}
                                onEdit={handleEditProject}
                                onDelete={handleDeleteProject}
                                loading={loadingProjects}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
