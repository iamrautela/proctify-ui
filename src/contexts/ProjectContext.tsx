import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
  status: 'draft' | 'building' | 'deployed';
  lastModified: string;
  features: string[];
  style: string;
  color_scheme: string;
  url?: string;
}

interface ProjectContextType {
  projects: Project[];
  createProject: (data: any) => Promise<Project>;
  getProject: (id: string) => Project | undefined;
  updateProject: (id: string, data: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'My Portfolio Website',
      description: 'A modern portfolio website showcasing my work',
      type: 'website',
      status: 'deployed',
      lastModified: '2 hours ago',
      features: ['Contact Form', 'Blog', 'SEO Optimization'],
      style: 'modern',
      color_scheme: 'blue',
      url: 'https://portfolio.proctify.ai'
    },
    {
      id: '2',
      name: 'Customer Support Bot',
      description: 'AI-powered chatbot for customer inquiries',
      type: 'chatbot',
      status: 'building',
      lastModified: '1 day ago',
      features: ['Natural Language Processing', 'Integration APIs', 'Analytics Dashboard'],
      style: 'corporate',
      color_scheme: 'green',
      url: 'https://chatbot.proctify.ai'
    },
    {
      id: '3',
      name: 'Task Management App',
      description: 'Mobile app for team task management',
      type: 'app',
      status: 'draft',
      lastModified: '3 days ago',
      features: ['User Authentication', 'Push Notifications', 'Real-time Chat'],
      style: 'minimalist',
      color_scheme: 'purple',
      url: 'https://taskapp.proctify.ai'
    }
  ]);

  const createProject = async (data: any): Promise<Project> => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      type: data.type,
      status: 'building',
      lastModified: 'just now',
      features: data.features || [],
      style: data.style || 'modern',
      color_scheme: data.color_scheme || 'blue',
      url: `https://${data.name.toLowerCase().replace(/\s+/g, '-')}.proctify.ai`
    };

    // Simulate AI generation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    newProject.status = 'deployed';
    setProjects(prev => [...prev, newProject]);
    
    return newProject;
  };

  const getProject = (id: string): Project | undefined => {
    return projects.find(project => project.id === id);
  };

  const updateProject = (id: string, data: Partial<Project>) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id 
          ? { ...project, ...data, lastModified: 'just now' }
          : project
      )
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ 
      projects, 
      createProject, 
      getProject, 
      updateProject, 
      deleteProject 
    }}>
      {children}
    </ProjectContext.Provider>
  );
};