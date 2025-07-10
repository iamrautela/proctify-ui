import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Globe, 
  MessageSquare, 
  Smartphone, 
  Settings, 
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Eye,
  Download,
  Trash2,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Star,
  Code,
  Palette,
  Database,
  Shield,
  Layers,
  GitBranch
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProjects } from '../contexts/ProjectContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { projects } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const projectTypes = [
    { 
      id: 'website', 
      name: 'Next.js Website', 
      icon: Globe, 
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Full-stack web applications with SSR',
      features: ['SEO Optimized', 'Responsive Design', 'API Routes']
    },
    { 
      id: 'chatbot', 
      name: 'AI Chatbot', 
      icon: MessageSquare, 
      gradient: 'from-green-500 to-emerald-500',
      description: 'Intelligent conversational AI agents',
      features: ['NLP Processing', 'Custom Actions', 'Multi-platform']
    },
    { 
      id: 'app', 
      name: 'React Native App', 
      icon: Smartphone, 
      gradient: 'from-purple-500 to-pink-500',
      description: 'Cross-platform mobile applications',
      features: ['Native Performance', 'Push Notifications', 'Offline Support']
    },
  ];

  const quickActions = [
    { icon: Code, label: 'Import Code', gradient: 'from-orange-500 to-red-500' },
    { icon: Palette, label: 'Design System', gradient: 'from-pink-500 to-rose-500' },
    { icon: Database, label: 'API Builder', gradient: 'from-indigo-500 to-purple-500' },
    { icon: Shield, label: 'Auth Setup', gradient: 'from-teal-500 to-cyan-500' },
  ];

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: Layers, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Deployed', value: projects.filter(p => p.status === 'deployed').length, icon: Zap, gradient: 'from-green-500 to-emerald-500' },
    { label: 'This Month', value: '12', icon: TrendingUp, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Team Members', value: '1', icon: Users, gradient: 'from-orange-500 to-red-500' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || project.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleCreateProject = (type: string) => {
    navigate(`/builder?type=${type}`);
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ProctifyAI
              </span>
            </motion.div>
            <div className="flex items-center space-x-6">
              <div className="text-white/80 text-sm">
                Welcome back, <span className="font-semibold text-white">{user?.email?.split('@')[0] || 'Builder'}</span>
              </div>
              <motion.button
                onClick={signOut}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Sign Out
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Your AI Workshop</h1>
          <p className="text-white/70 text-lg">Build, deploy, and scale your ideas with intelligent automation</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 text-left"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-3`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-white font-medium text-sm">{action.label}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Create New Project */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Create New Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <motion.button
                key={type.id}
                onClick={() => handleCreateProject(type.id)}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {type.name}
                </h3>
                <p className="text-white/70 mb-4 group-hover:text-white/80 transition-colors">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 group-hover:bg-white/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Start Building</span>
                  <motion.div
                    className="ml-auto"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <Zap className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Your Projects</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-white/60" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                >
                  <option value="all">All Types</option>
                  <option value="website">Websites</option>
                  <option value="chatbot">Chatbots</option>
                  <option value="app">Mobile Apps</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">No Projects Yet</h3>
                  <p className="text-white/70 mb-6">
                    Create your first AI-powered project to get started
                  </p>
                  <motion.button
                    onClick={() => handleCreateProject('website')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    Create Project
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => {
                  const projectType = projectTypes.find(t => t.id === project.type);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                      onClick={() => handleProjectClick(project.id)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${projectType?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${projectType?.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {projectType?.icon && <projectType.icon className="h-6 w-6 text-white" />}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'deployed' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : project.status === 'building'
                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                              : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                          }`}>
                            {project.status}
                          </div>
                          <button 
                            className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 group-hover:text-white/80 transition-colors">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.lastModified}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2 min read</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/70 group-hover:bg-white/20 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/70 group-hover:bg-white/20 transition-colors">
                            +{project.features.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button 
                            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </button>
                          <button 
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Export
                          </button>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;