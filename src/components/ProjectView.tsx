import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Eye, 
  Download, 
  Settings, 
  Share2, 
  Globe, 
  Code, 
  Palette,
  Play,
  Pause,
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
  Zap,
  Database,
  Shield,
  Layers,
  GitBranch,
  Cpu,
  Bot,
  Layout,
  Workflow,
  Sparkles,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';

const ProjectView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { projects, getProject } = useProjects();
  const [activeTab, setActiveTab] = useState('preview');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const project = getProject(id || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-white/70 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <motion.button
            onClick={() => navigate('/dashboard')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Back to Dashboard
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(project.url || 'https://your-project.proctify.ai');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = async () => {
    setIsGenerating(true);
    // Simulate regeneration process
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  const tabs = [
    { id: 'preview', name: 'Live Preview', icon: Eye, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'code', name: 'Source Code', icon: Code, gradient: 'from-green-500 to-emerald-500' },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp, gradient: 'from-purple-500 to-pink-500' },
    { id: 'settings', name: 'Settings', icon: Settings, gradient: 'from-orange-500 to-red-500' },
    { id: 'deploy', name: 'Deploy', icon: Globe, gradient: 'from-indigo-500 to-purple-500' },
  ];

  const projectStats = [
    { label: 'Views', value: '2.4K', icon: Eye, change: '+12%' },
    { label: 'Users', value: '847', icon: Users, change: '+8%' },
    { label: 'Uptime', value: '99.9%', icon: Zap, change: '+0.1%' },
    { label: 'Load Time', value: '1.2s', icon: Clock, change: '-0.3s' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => navigate('/dashboard')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
              <div>
                <h1 className="text-xl font-bold text-white">{project.name}</h1>
                <p className="text-sm text-white/70">{project.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`px-4 py-2 rounded-full text-sm font-medium border ${
                project.status === 'deployed' 
                  ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                  : project.status === 'building'
                  ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}>
                {project.status}
              </div>
              <motion.button
                onClick={handleCopyUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="text-sm">{copied ? 'Copied!' : 'Share'}</span>
              </motion.button>
              <motion.button
                onClick={handleRegenerate}
                disabled={isGenerating}
                whileHover={{ scale: isGenerating ? 1 : 1.05 }}
                whileTap={{ scale: isGenerating ? 1 : 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-600/50 disabled:to-pink-600/50 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
                <span className="text-sm">{isGenerating ? 'Regenerating...' : 'Regenerate'}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Eye className="h-6 w-6 mr-3 text-purple-400" />
                    Live Preview
                  </h2>
                  <div className="flex items-center space-x-3">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                    >
                      <Play className="h-4 w-4" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 min-h-[600px] shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 text-center h-full flex flex-col justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mb-8"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r from-${project.color_scheme}-500 to-${project.color_scheme}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <Globe className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Your {project.type} is Live! 🚀
                      </h3>
                      <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        This is a preview of your generated {project.type}. The actual implementation
                        includes all selected features with production-ready code and modern architecture.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r from-${project.color_scheme}-500 to-${project.color_scheme}-600 rounded-lg flex items-center justify-center mb-4`}>
                            <Zap className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-2">{feature}</h4>
                          <p className="text-gray-600 text-sm">
                            Advanced implementation with modern best practices
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Code className="h-6 w-6 mr-3 text-green-400" />
                    Source Code
                  </h2>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 flex items-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Project
                  </motion.button>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-white/60 ml-4 text-sm font-mono">
                      {project.name.toLowerCase().replace(/\s+/g, '-')}/src/App.tsx
                    </span>
                  </div>
                  <pre className="text-green-400 text-sm leading-relaxed">
{`// Generated ${project.type} with Next.js and TypeScript
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const ${project.name.replace(/\s+/g, '')}: NextPage = () => {
  return (
    <>
      <Head>
        <title>${project.name}</title>
        <meta name="description" content="${project.description}" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-${project.color_scheme}-50 to-${project.color_scheme}-100">
        <header className="bg-${project.color_scheme}-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">${project.name}</h1>
            <p className="text-${project.color_scheme}-100 mt-2">${project.description}</p>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${project.features.map(feature => `
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-${project.color_scheme}-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">${feature}</h3>
              <p className="text-gray-600">Advanced ${feature.toLowerCase()} implementation with modern architecture.</p>
            </div>`).join('')}
          </div>
        </main>
        
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 ${project.name}. Built with ProctifyAI.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ${project.name.replace(/\s+/g, '')};`}
                  </pre>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-purple-400" />
                  Performance Metrics
                </h3>
                <div className="bg-gray-900 rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white/70">Analytics dashboard coming soon</p>
                    <p className="text-white/50 text-sm mt-2">Real-time metrics and insights</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Settings className="h-6 w-6 mr-3 text-orange-400" />
                  Project Settings
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">Project Name</label>
                      <input
                        type="text"
                        value={project.name}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-3">Description</label>
                      <textarea
                        value={project.description}
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm resize-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-3">Color Scheme</label>
                      <select
                        value={project.color_scheme}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                      >
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                        <option value="teal">Teal</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-4">Active Features</label>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    Save Changes
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Reset to Default
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'deploy' && (
            <motion.div
              key="deploy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-indigo-400" />
                  Deployment
                </h2>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <Check className="h-6 w-6 text-green-400 mr-3" />
                    <span className="text-green-400 font-semibold text-lg">Successfully Deployed</span>
                  </div>
                  <p className="text-green-300 mb-2">
                    Your project is live at: 
                    <a href={project.url} className="font-mono ml-2 underline hover:text-green-200 transition-colors">
                      {project.url}
                    </a>
                  </p>
                  <p className="text-green-300/80 text-sm">
                    Last deployed: {project.lastModified} • Build time: 47 seconds
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                      Deployment Stats
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-white/70">
                        <span>Status:</span>
                        <span className="text-green-400 font-medium">Active</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Last Deploy:</span>
                        <span className="text-white">{project.lastModified}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Build Time:</span>
                        <span className="text-white">47s</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Bundle Size:</span>
                        <span className="text-white">2.3 MB</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold mb-4 flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-blue-400" />
                      Custom Domain
                    </h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="yourdomain.com"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                      />
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25"
                      >
                        Add Domain
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Redeploy
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Logs
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-red-500/50 text-red-400 px-6 py-3 rounded-xl hover:bg-red-500/10 transition-all duration-300 flex items-center"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Take Offline
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectView;