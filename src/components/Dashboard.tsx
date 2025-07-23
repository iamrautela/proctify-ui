import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  Link,
  Wand2,
  Edit,
  Github,
  Figma,
  ArrowRight,
  Zap,
  Brain,
  Rocket,
  Globe,
  MessageSquare,
  Smartphone,
  Database,
  Shield,
  Palette,
  Star,
  Users,
  TrendingUp,
  Code
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [prompt, setPrompt] = useState('');

  const handlePromptSubmit = () => {
    if (prompt.trim()) {
      navigate(`/builder?prompt=${encodeURIComponent(prompt)}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    navigate(`/builder?prompt=${encodeURIComponent(suggestion)}`);
  };

  const suggestions = [
    'Create a financial app',
    'Design a directory website', 
    'Build a project management app',
    'Make a landing page',
    'Generate a CRM',
    'Build a mobile app'
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Generation',
      description: 'Advanced neural networks create production-ready code from your ideas',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy your applications in under 60 seconds with our optimized pipeline',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Automatic edge deployment with CDN optimization worldwide',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { label: 'Projects Created', value: '50K+', icon: Rocket },
    { label: 'Active Users', value: '12K+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: TrendingUp },
    { label: 'Code Quality', value: 'A+', icon: Star }
  ];

  const projectTypes = [
    { name: 'Web Apps', icon: Globe, count: '15K+', color: 'bg-blue-500' },
    { name: 'Mobile Apps', icon: Smartphone, count: '8K+', color: 'bg-green-500' },
    { name: 'AI Chatbots', icon: MessageSquare, count: '12K+', color: 'bg-purple-500' },
    { name: 'APIs', icon: Database, count: '20K+', color: 'bg-orange-500' },
    { name: 'Landing Pages', icon: Palette, count: '25K+', color: 'bg-pink-500' },
    { name: 'Auth Systems', icon: Shield, count: '18K+', color: 'bg-indigo-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Community</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            </nav>

            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center space-x-3">
                  <span className="text-white/80">Welcome, {user.name}</span>
                  <motion.button
                    onClick={signOut}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/80 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-white/10"
                  >
                    Sign Out
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              What do you want to build?
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12">
              Transform your ideas into production-ready applications with the power of AI
            </p>
          </motion.div>

          {/* Main Prompt Input */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handlePromptSubmit();
                  }
                }}
                placeholder="Describe your vision... (e.g., 'Build a modern e-commerce platform with AI recommendations')"
                className="w-full h-32 px-6 py-4 bg-transparent text-white placeholder-white/60 resize-none focus:outline-none text-lg"
                style={{ fontSize: '16px' }}
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 px-4">
                  <button className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                    <Link className="w-5 h-5" />
                  </button>
                  <button className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                    <Wand2 className="w-5 h-5" />
                  </button>
                  <button className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
                
                <motion.button
                  onClick={handlePromptSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center space-x-2 mr-2"
                >
                  <span>Generate</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Import Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-white/60 mb-6">or import from</p>
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-sm">
                <Figma className="w-5 h-5 text-purple-400" />
                <span className="text-white">Figma</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-sm">
                <Github className="w-5 h-5 text-white" />
                <span className="text-white">GitHub</span>
              </button>
            </div>
          </motion.div>

          {/* Suggestion Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-sm hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
              >
                {suggestion}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the next generation of development tools with intelligent code generation,
              automated deployment, and seamless integrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Anything You Imagine
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From simple landing pages to complex enterprise applications,
              our AI can generate any type of project you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                <p className="text-white/60 text-sm">{type.count} created</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Code className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using ProctifyAI to build
              the next generation of applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('textarea')?.focus()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-purple-500/25 flex items-center space-x-3 mx-auto"
            >
              <Rocket className="h-6 w-6" />
              <span>Start Building Now</span>
              <ArrowRight className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ProctifyAI
            </span>
          </div>
          <p className="text-white/60 mb-6">
            The AI-native platform for builders who want to launch faster and build smarter.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Support</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;