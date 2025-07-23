import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  CreditCard, 
  Database, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  Bot, 
  Mail, 
  Search, 
  Users, 
  Settings, 
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PromptWriter from './PromptWriter';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const projectCards = [
    {
      id: 'auth',
      title: 'Authentication System',
      description: 'Complete user authentication with login, signup, and password reset',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['JWT Tokens', 'OAuth Integration', 'Password Reset', 'Email Verification'],
      complexity: 'Medium',
      estimatedTime: '2-3 hours'
    },
    {
      id: 'payment',
      title: 'Payment Gateway',
      description: 'Secure payment processing with Stripe integration',
      icon: CreditCard,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Stripe Integration', 'Subscription Billing', 'Invoice Generation', 'Webhook Handling'],
      complexity: 'High',
      estimatedTime: '4-6 hours'
    },
    {
      id: 'database',
      title: 'Database Setup',
      description: 'Complete database schema with CRUD operations',
      icon: Database,
      gradient: 'from-purple-500 to-pink-500',
      features: ['PostgreSQL/MongoDB', 'Data Models', 'API Endpoints', 'Data Validation'],
      complexity: 'Medium',
      estimatedTime: '3-4 hours'
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent chatbot with natural language processing',
      icon: MessageSquare,
      gradient: 'from-orange-500 to-red-500',
      features: ['OpenAI Integration', 'Context Memory', 'Custom Actions', 'Multi-language'],
      complexity: 'High',
      estimatedTime: '5-7 hours'
    },
    {
      id: 'landing',
      title: 'Landing Page',
      description: 'Modern, responsive landing page with SEO optimization',
      icon: Globe,
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Analytics'],
      complexity: 'Low',
      estimatedTime: '1-2 hours'
    },
    {
      id: 'mobile',
      title: 'Mobile App',
      description: 'Cross-platform mobile application with React Native',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
      features: ['Cross-platform', 'Push Notifications', 'Offline Support', 'App Store Ready'],
      complexity: 'High',
      estimatedTime: '6-8 hours'
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      description: 'Automated workflows and business process automation',
      icon: Bot,
      gradient: 'from-teal-500 to-cyan-500',
      features: ['Task Automation', 'Email Triggers', 'API Integrations', 'Scheduling'],
      complexity: 'Medium',
      estimatedTime: '3-5 hours'
    },
    {
      id: 'email',
      title: 'Email System',
      description: 'Complete email marketing and transactional email system',
      icon: Mail,
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Email Templates', 'Campaign Management', 'Analytics', 'Automation'],
      complexity: 'Medium',
      estimatedTime: '2-4 hours'
    },
    {
      id: 'search',
      title: 'Search Engine',
      description: 'Advanced search functionality with filters and indexing',
      icon: Search,
      gradient: 'from-gray-500 to-slate-500',
      features: ['Full-text Search', 'Filters', 'Auto-complete', 'Search Analytics'],
      complexity: 'High',
      estimatedTime: '4-6 hours'
    },
    {
      id: 'crm',
      title: 'CRM System',
      description: 'Customer relationship management with lead tracking',
      icon: Users,
      gradient: 'from-violet-500 to-purple-500',
      features: ['Lead Management', 'Contact Database', 'Sales Pipeline', 'Reporting'],
      complexity: 'High',
      estimatedTime: '6-10 hours'
    },
    {
      id: 'admin',
      title: 'Admin Dashboard',
      description: 'Complete admin panel with user management and analytics',
      icon: Settings,
      gradient: 'from-slate-500 to-gray-500',
      features: ['User Management', 'Analytics', 'Content Management', 'System Settings'],
      complexity: 'High',
      estimatedTime: '5-8 hours'
    },
    {
      id: 'api',
      title: 'REST API',
      description: 'Scalable REST API with documentation and testing',
      icon: Zap,
      gradient: 'from-amber-500 to-yellow-500',
      features: ['RESTful Endpoints', 'API Documentation', 'Rate Limiting', 'Testing Suite'],
      complexity: 'Medium',
      estimatedTime: '3-5 hours'
    }
  ];

  const handleCardClick = (projectId: string) => {
    navigate(`/builder?type=${projectId}`);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'High': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
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
                className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10 border border-white/20"
              >
                Sign Out
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Prompt Writer */}
        <PromptWriter />

        {/* Project Cards Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 60 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Project Type</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Select from our pre-built templates or describe your custom project in the prompt above
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projectCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => handleCardClick(card.id)}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(card.complexity)}`}>
                      {card.complexity}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 group-hover:text-white/80 transition-colors line-clamp-2">
                    {card.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {card.features.slice(0, 2).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/70 group-hover:bg-white/20 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                    {card.features.length > 2 && (
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/70 group-hover:bg-white/20 transition-colors">
                        +{card.features.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-white/60 text-xs">
                      Est. {card.estimatedTime}
                    </div>
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium mr-2">Build</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;