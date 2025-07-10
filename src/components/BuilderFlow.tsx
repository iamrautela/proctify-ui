import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Brain, 
  Palette, 
  Settings,
  Code,
  Wand2,
  Globe,
  MessageSquare,
  Smartphone,
  Zap,
  Layers,
  Database,
  Shield,
  Workflow,
  Bot,
  Layout,
  Cpu,
  GitBranch,
  CheckCircle,
  Circle
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';

const BuilderFlow: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { createProject } = useProjects();
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectData, setProjectData] = useState({
    type: searchParams.get('type') || 'website',
    name: '',
    description: '',
    idea: '',
    target_audience: '',
    features: [],
    style: 'modern',
    color_scheme: 'blue',
    additional_requirements: ''
  });

  const steps = [
    {
      title: 'Project Vision',
      description: 'Tell us about your brilliant idea',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design DNA',
      description: 'Define your visual identity',
      icon: Palette,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Feature Matrix',
      description: 'Select powerful capabilities',
      icon: Settings,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Generation',
      description: 'Watch magic happen in real-time',
      icon: Wand2,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const projectTypes = {
    website: { 
      name: 'Next.js Website', 
      icon: Globe, 
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Full-stack web application with SSR'
    },
    chatbot: { 
      name: 'AI Chatbot', 
      icon: MessageSquare, 
      gradient: 'from-green-500 to-emerald-500',
      description: 'Intelligent conversational agent'
    },
    app: { 
      name: 'React Native App', 
      icon: Smartphone, 
      gradient: 'from-purple-500 to-pink-500',
      description: 'Cross-platform mobile application'
    },
  };

  const featureOptions = {
    website: [
      { name: 'Authentication System', icon: Shield, description: 'Secure user login & registration' },
      { name: 'Database Integration', icon: Database, description: 'PostgreSQL/MongoDB setup' },
      { name: 'API Routes', icon: Workflow, description: 'RESTful API endpoints' },
      { name: 'SEO Optimization', icon: Zap, description: 'Search engine optimization' },
      { name: 'Payment Integration', icon: Code, description: 'Stripe/PayPal checkout' },
      { name: 'Admin Dashboard', icon: Layout, description: 'Content management system' },
      { name: 'Real-time Features', icon: Cpu, description: 'WebSocket connections' },
      { name: 'Email System', icon: Bot, description: 'Automated email workflows' }
    ],
    chatbot: [
      { name: 'Natural Language Processing', icon: Brain, description: 'Advanced NLP capabilities' },
      { name: 'Multi-language Support', icon: Globe, description: 'International conversations' },
      { name: 'Integration APIs', icon: Workflow, description: 'Third-party service connections' },
      { name: 'Analytics Dashboard', icon: Layout, description: 'Conversation insights' },
      { name: 'Custom Workflows', icon: GitBranch, description: 'Automated response flows' },
      { name: 'Voice Support', icon: Cpu, description: 'Speech-to-text integration' },
      { name: 'File Processing', icon: Database, description: 'Document & image handling' },
      { name: 'Live Chat Handoff', icon: MessageSquare, description: 'Human agent transfer' }
    ],
    app: [
      { name: 'User Authentication', icon: Shield, description: 'Secure login system' },
      { name: 'Push Notifications', icon: Zap, description: 'Real-time alerts' },
      { name: 'Offline Support', icon: Database, description: 'Local data storage' },
      { name: 'Social Login', icon: Bot, description: 'OAuth integrations' },
      { name: 'In-app Purchases', icon: Code, description: 'Monetization features' },
      { name: 'Analytics Tracking', icon: Layout, description: 'User behavior insights' },
      { name: 'Cloud Storage', icon: Layers, description: 'File synchronization' },
      { name: 'Real-time Chat', icon: MessageSquare, description: 'Instant messaging' }
    ]
  };

  const designStyles = [
    { name: 'modern', preview: '🎨', description: 'Clean, contemporary design' },
    { name: 'minimalist', preview: '⚪', description: 'Simple, focused aesthetics' },
    { name: 'corporate', preview: '🏢', description: 'Professional business look' },
    { name: 'creative', preview: '🎭', description: 'Artistic and expressive' },
    { name: 'elegant', preview: '💎', description: 'Sophisticated and refined' },
    { name: 'playful', preview: '🎪', description: 'Fun and engaging design' }
  ];

  const colorSchemes = [
    { name: 'blue', gradient: 'from-blue-500 to-blue-600', description: 'Trust & reliability' },
    { name: 'purple', gradient: 'from-purple-500 to-purple-600', description: 'Innovation & creativity' },
    { name: 'green', gradient: 'from-green-500 to-green-600', description: 'Growth & harmony' },
    { name: 'orange', gradient: 'from-orange-500 to-orange-600', description: 'Energy & enthusiasm' },
    { name: 'pink', gradient: 'from-pink-500 to-pink-600', description: 'Warmth & compassion' },
    { name: 'teal', gradient: 'from-teal-500 to-teal-600', description: 'Balance & clarity' },
    { name: 'red', gradient: 'from-red-500 to-red-600', description: 'Passion & power' },
    { name: 'indigo', gradient: 'from-indigo-500 to-indigo-600', description: 'Wisdom & intuition' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGenerate();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    const newProject = await createProject(projectData);
    navigate(`/project/${newProject.id}`);
  };

  const handleFeatureToggle = (feature: string) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const currentProjectType = projectTypes[projectData.type as keyof typeof projectTypes];
  const currentFeatures = featureOptions[projectData.type as keyof typeof featureOptions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10">
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
            <button
              onClick={() => navigate('/dashboard')}
              className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentProjectType.gradient} flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
            <currentProjectType.icon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Create {currentProjectType.name}
          </h1>
          <p className="text-white/70 text-lg">
            {currentProjectType.description} powered by advanced AI
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    index <= currentStep 
                      ? `bg-gradient-to-r ${step.gradient} shadow-lg` 
                      : 'bg-white/10 border border-white/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index < currentStep ? (
                    <CheckCircle className="h-6 w-6 text-white" />
                  ) : index === currentStep ? (
                    <step.icon className="h-6 w-6 text-white" />
                  ) : (
                    <Circle className="h-6 w-6 text-white/60" />
                  )}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                    index < currentStep ? `bg-gradient-to-r ${step.gradient}` : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-white/70">{steps[currentStep].description}</p>
          </div>
        </motion.div>

        {/* Step Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
        >
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">Project Name</label>
                    <input
                      type="text"
                      value={projectData.name}
                      onChange={(e) => setProjectData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="My Awesome Project"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">Brief Description</label>
                    <input
                      type="text"
                      value={projectData.description}
                      onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="A revolutionary platform that..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">Your Vision</label>
                  <textarea
                    value={projectData.idea}
                    onChange={(e) => setProjectData(prev => ({ ...prev, idea: e.target.value }))}
                    placeholder="Describe your idea in detail. What problem does it solve? What makes it unique? How will it change the world?"
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition-all duration-300 resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">Target Audience</label>
                  <input
                    type="text"
                    value={projectData.target_audience}
                    onChange={(e) => setProjectData(prev => ({ ...prev, target_audience: e.target.value }))}
                    placeholder="Entrepreneurs, developers, students, small businesses..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <label className="block text-white font-semibold mb-6 text-lg">Design Style</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {designStyles.map((style) => (
                      <motion.button
                        key={style.name}
                        onClick={() => setProjectData(prev => ({ ...prev, style: style.name }))}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                          projectData.style === style.name
                            ? 'border-purple-500 bg-purple-600/20 shadow-lg shadow-purple-500/25'
                            : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="text-4xl mb-3">{style.preview}</div>
                        <div className="text-white font-medium capitalize mb-1">{style.name}</div>
                        <div className="text-white/60 text-sm">{style.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-6 text-lg">Color Palette</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {colorSchemes.map((scheme) => (
                      <motion.button
                        key={scheme.name}
                        onClick={() => setProjectData(prev => ({ ...prev, color_scheme: scheme.name }))}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          projectData.color_scheme === scheme.name
                            ? 'border-purple-500 bg-purple-600/20 shadow-lg shadow-purple-500/25'
                            : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${scheme.gradient} rounded-lg mx-auto mb-3 shadow-lg`} />
                        <div className="text-white text-sm font-medium capitalize mb-1">{scheme.name}</div>
                        <div className="text-white/60 text-xs">{scheme.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <label className="block text-white font-semibold mb-6 text-lg">Select Features</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentFeatures.map((feature) => (
                      <motion.label
                        key={feature.name}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          projectData.features.includes(feature.name)
                            ? 'border-purple-500 bg-purple-600/20 shadow-lg shadow-purple-500/25'
                            : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={projectData.features.includes(feature.name)}
                          onChange={() => handleFeatureToggle(feature.name)}
                          className="sr-only"
                        />
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${
                          projectData.features.includes(feature.name)
                            ? 'bg-purple-600'
                            : 'bg-white/10'
                        }`}>
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium mb-1">{feature.name}</div>
                          <div className="text-white/60 text-sm">{feature.description}</div>
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ml-2 ${
                          projectData.features.includes(feature.name)
                            ? 'border-purple-500 bg-purple-600'
                            : 'border-white/30'
                        }`}>
                          {projectData.features.includes(feature.name) && (
                            <CheckCircle className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">Additional Requirements</label>
                  <textarea
                    value={projectData.additional_requirements}
                    onChange={(e) => setProjectData(prev => ({ ...prev, additional_requirements: e.target.value }))}
                    placeholder="Any specific requirements, integrations, or customizations you'd like to include?"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition-all duration-300 resize-none"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-8"
              >
                <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
                  <motion.div
                    animate={{ rotate: isGenerating ? 360 : 0 }}
                    transition={{ duration: 2, repeat: isGenerating ? Infinity : 0, ease: "linear" }}
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <Code className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Ready to Generate!</h3>
                  <p className="text-white/80 mb-8 text-lg">
                    Our AI will create your {currentProjectType.name.toLowerCase()} with advanced architecture,
                    modern design, and production-ready code in under 60 seconds.
                  </p>
                  
                  <div className="bg-white/5 rounded-xl p-6 text-left max-w-md mx-auto">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
                      Project Summary
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-white/70">
                        <span>Type:</span>
                        <span className="text-white font-medium">{currentProjectType.name}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Name:</span>
                        <span className="text-white font-medium">{projectData.name}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Style:</span>
                        <span className="text-white font-medium capitalize">{projectData.style}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Features:</span>
                        <span className="text-white font-medium">{projectData.features.length} selected</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Color:</span>
                        <span className="text-white font-medium capitalize">{projectData.color_scheme}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between"
        >
          <motion.button
            onClick={handleBack}
            disabled={currentStep === 0}
            whileHover={{ scale: currentStep === 0 ? 1 : 1.05 }}
            whileTap={{ scale: currentStep === 0 ? 1 : 0.95 }}
            className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'bg-white/5 text-white/40 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20 shadow-lg'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </motion.button>
          
          <motion.button
            onClick={handleNext}
            disabled={(currentStep === 0 && (!projectData.name || !projectData.idea)) || isGenerating}
            whileHover={{ 
              scale: (currentStep === 0 && (!projectData.name || !projectData.idea)) || isGenerating ? 1 : 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: (currentStep === 0 && (!projectData.name || !projectData.idea)) || isGenerating ? 1 : 0.95 }}
            className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              (currentStep === 0 && (!projectData.name || !projectData.idea)) || isGenerating
                ? 'bg-white/5 text-white/40 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white shadow-2xl shadow-purple-500/25'
            }`}
          >
            {currentStep === steps.length - 1 ? (
              <>
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Wand2 className="h-5 w-5" />
                    </motion.div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5 mr-2" />
                    Generate Project
                  </>
                )}
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-5 w-5 ml-2" />
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuilderFlow;