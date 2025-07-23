import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Link2, 
  Wand2, 
  Edit3, 
  Github, 
  Figma,
  Send,
  Sparkles,
  MessageSquare,
  Code,
  Globe,
  Settings,
  Download,
  Play,
  Pause,
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProjects } from '../contexts/ProjectContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { createProject } = useProjects();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProject, setGeneratedProject] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const suggestions = [
    'Create a financial app',
    'Design a directory website', 
    'Build a project management app',
    'Make a landing page',
    'Generate a CRM',
    'Build a mobile app'
  ];

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setShowPreview(true);
    
    // Simulate AI generation process
    try {
      const projectData = {
        name: extractProjectName(prompt),
        description: prompt,
        type: 'website',
        features: extractFeatures(prompt),
        style: 'modern',
        color_scheme: 'blue',
        idea: prompt,
        target_audience: 'general users',
        additional_requirements: ''
      };

      // Create the project
      const newProject = await createProject(projectData);
      setGeneratedProject(newProject);
      
    } catch (error) {
      console.error('Error generating project:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const extractProjectName = (prompt: string): string => {
    const words = prompt.split(' ');
    if (words.length > 0) {
      return words.slice(0, 3).join(' ') + ' App';
    }
    return 'My Project';
  };

  const extractFeatures = (prompt: string): string[] => {
    const features = [];
    if (prompt.toLowerCase().includes('auth') || prompt.toLowerCase().includes('login')) {
      features.push('Authentication System');
    }
    if (prompt.toLowerCase().includes('payment') || prompt.toLowerCase().includes('billing')) {
      features.push('Payment Integration');
    }
    if (prompt.toLowerCase().includes('database') || prompt.toLowerCase().includes('data')) {
      features.push('Database Integration');
    }
    if (prompt.toLowerCase().includes('api')) {
      features.push('API Routes');
    }
    if (features.length === 0) {
      features.push('Modern UI', 'Responsive Design', 'SEO Optimization');
    }
    return features;
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handlePromptSubmit();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const tabs = [
    { id: 'preview', name: 'Preview', icon: Globe },
    { id: 'code', name: 'Code', icon: Code },
    { id: 'terminal', name: 'Terminal', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">proctify</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Community</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Enterprise</a>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-1">
                  <span>Resources</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageSquare className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>

              {/* User Menu */}
              {user && (
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <button
                    onClick={signOut}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Sign out
                  </button>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800 bg-[#0a0a0a]"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Community</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Enterprise</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Resources</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex h-[calc(100vh-56px)]">
        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${showPreview ? 'hidden lg:flex' : ''}`}>
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-2xl">
              {/* Main heading */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  What do you want to build?
                </h1>
                <p className="text-gray-400 text-lg">
                  Create stunning apps & websites by chatting with AI.
                </p>
              </div>

              {/* Main input */}
              <div className="relative mb-8">
                <div className="relative bg-gray-900 border border-gray-700 rounded-lg focus-within:border-gray-600 transition-colors">
                  <textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your idea and we'll bring it to life (or /command)"
                    className="w-full bg-transparent text-white placeholder-gray-500 p-4 pr-12 resize-none focus:outline-none min-h-[120px]"
                    disabled={isGenerating}
                  />
                  
                  {/* Input actions */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
                      <Link2 className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
                      <Wand2 className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
                      <Edit3 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Send button */}
                  <button
                    onClick={handlePromptSubmit}
                    disabled={!prompt.trim() || isGenerating}
                    className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-2 rounded-md transition-colors"
                  >
                    {isGenerating ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Import section */}
              <div className="text-center mb-8">
                <p className="text-gray-500 mb-4">or import from</p>
                <div className="flex items-center justify-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700">
                    <Figma className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Figma</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700">
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>

              {/* Suggestions */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors text-sm border border-gray-700 hover:border-gray-600"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '50%', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-l border-gray-800 flex flex-col bg-gray-900"
            >
              {/* Preview Header */}
              <div className="border-b border-gray-800 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">
                    {generatedProject?.name || 'Generating...'}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowPreview(false)}
                      className="lg:hidden text-gray-400 hover:text-white p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white p-1">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white p-1">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <tab.icon className="h-3 w-3" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Content */}
              <div className="flex-1 overflow-hidden">
                {isGenerating ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
                      <p className="text-gray-400">Generating your project...</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full">
                    {activeTab === 'preview' && (
                      <div className="h-full bg-white">
                        <iframe
                          src="data:text/html;charset=utf-8,<html><head><title>Generated Project</title><style>body{font-family:system-ui;margin:0;padding:2rem;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;text-align:center;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;}</style></head><body><h1>🚀 Your Project is Ready!</h1><p>This is a preview of your generated project.</p><div style='background:rgba(255,255,255,0.1);padding:2rem;border-radius:1rem;margin:2rem 0;'><h2>Features Included:</h2><ul style='list-style:none;padding:0;'><li>✅ Modern Design</li><li>✅ Responsive Layout</li><li>✅ SEO Optimized</li><li>✅ Fast Loading</li></ul></div></body></html>"
                          className="w-full h-full border-0"
                          title="Project Preview"
                        />
                      </div>
                    )}

                    {activeTab === 'code' && (
                      <div className="h-full bg-gray-950 p-4 overflow-auto">
                        <div className="font-mono text-sm">
                          <div className="text-green-400 mb-4">// Generated React Component</div>
                          <div className="text-blue-400">import</div>
                          <div className="text-white"> React </div>
                          <div className="text-blue-400">from</div>
                          <div className="text-yellow-400"> 'react'</div>
                          <div className="text-white">;</div>
                          <br />
                          <div className="text-blue-400">export default function</div>
                          <div className="text-yellow-400"> App</div>
                          <div className="text-white">() {</div>
                          <div className="ml-4 text-blue-400">return</div>
                          <div className="text-white"> (</div>
                          <div className="ml-8 text-gray-400">&lt;div className="app"&gt;</div>
                          <div className="ml-12 text-gray-400">&lt;h1&gt;{generatedProject?.name || 'My App'}&lt;/h1&gt;</div>
                          <div className="ml-12 text-gray-400">&lt;p&gt;{generatedProject?.description || 'Generated with ProctifyAI'}&lt;/p&gt;</div>
                          <div className="ml-8 text-gray-400">&lt;/div&gt;</div>
                          <div className="ml-4 text-white">);</div>
                          <div className="text-white">}</div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'terminal' && (
                      <div className="h-full bg-black p-4 font-mono text-sm overflow-auto">
                        <div className="text-green-400">$ npm create react-app {generatedProject?.name?.toLowerCase().replace(/\s+/g, '-') || 'my-app'}</div>
                        <div className="text-gray-400 mt-2">Creating a new React app...</div>
                        <div className="text-gray-400">Installing packages. This might take a couple of minutes.</div>
                        <div className="text-green-400 mt-2">✓ Project created successfully!</div>
                        <div className="text-gray-400 mt-2">$ cd {generatedProject?.name?.toLowerCase().replace(/\s+/g, '-') || 'my-app'}</div>
                        <div className="text-gray-400">$ npm start</div>
                        <div className="text-green-400 mt-2">Development server started on http://localhost:3000</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;