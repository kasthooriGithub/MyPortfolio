import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AdminLogin from '@/components/AdminLogin';
import AdminDashboard from '@/components/AdminDashboard';

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Not logged in - show login
  if (!user) {
    return <AdminLogin />;
  }

  // Logged in but not admin - show access denied
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have admin privileges to access this page.
          </p>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // Admin user - show dashboard
  return <AdminDashboard />;
};

export default Admin;
