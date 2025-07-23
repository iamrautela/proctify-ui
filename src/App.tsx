import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import BuilderFlow from './components/BuilderFlow';
import ProjectView from './components/ProjectView';
import { AuthProvider } from './contexts/AuthContext';
import { ProjectProvider } from './contexts/ProjectContext';

function App() {
  return (
    <BrowserRouter>
    
      <AuthProvider>
        <ProjectProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/builder" element={<BuilderFlow />} />
              <Route path="/project/:id" element={<ProjectView />} />
            </Routes>
          </div>
        </ProjectProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;