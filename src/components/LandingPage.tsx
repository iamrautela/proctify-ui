import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Code, 
  Globe, 
  MessageSquare, 
  Smartphone, 
  Users, 
  Star, 
  Check,
  Play,
  ChevronRight,
  Database,
  Palette,
  Shield,
  Layers,
  GitBranch,
  Cpu,
  Wand2,
  Bot,
  Layout,
  Workflow
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      signIn('demo@proctify.ai');
      navigate('/dashboard');
    }
  };

  const innovativeFeatures = [
    {
      icon: Brain,
      title: 'Neural Code Generation',
      description: 'Advanced AI that understands context, generates production-ready code, and learns from your preferences',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      demo: 'Generate full-stack applications with intelligent architecture decisions'
    },
    {
      icon: Wand2,
      title: 'One-Click MVP Magic',
      description: 'Transform ideas into deployed applications in under 60 seconds with our proprietary AI pipeline',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      demo: 'Watch your concept become reality with real-time generation'
    },
    {
      icon: Bot,
      title: 'Intelligent Agent Builder',
      description: 'Create sophisticated AI agents with custom workflows, integrations, and autonomous capabilities',
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      demo: 'Build chatbots that understand context and take actions'
    },
    {
      icon: Layout,
      title: 'Adaptive Design System',
      description: 'AI-powered design that automatically adjusts to your brand, audience, and industry standards',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      demo: 'Dynamic layouts that evolve with your content'
    },
    {
      icon: Workflow,
      title: 'Smart Integration Hub',
      description: 'Seamlessly connect with 1000+ APIs, databases, and services with intelligent configuration',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      demo: 'Auto-configure complex integrations with zero setup'
    },
    {
      icon: Cpu,
      title: 'Edge-Optimized Deployment',
      description: 'Global edge deployment with automatic scaling, CDN optimization, and performance monitoring',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      demo: 'Lightning-fast global deployment in seconds'
    }
  ];

  const buildingBlocks = [
    {
      icon: Globe,
      title: 'Next.js Websites',
      description: 'Server-side rendered, SEO-optimized websites with modern frameworks',
      color: 'bg-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Conversational AI with natural language understanding and custom actions',
      color: 'bg-green-500'
    },
    {
      icon: Smartphone,
      title: 'React Native Apps',
      description: 'Cross-platform mobile applications with native performance',
      color: 'bg-purple-500'
    },
    {
      icon: Database,
      title: 'Backend APIs',
      description: 'Scalable REST and GraphQL APIs with database integration',
      color: 'bg-orange-500'
    },
    {
      icon: Palette,
      title: 'Design Systems',
      description: 'Consistent UI components with Tailwind CSS and design tokens',
      color: 'bg-pink-500'
    },
    {
      icon: Shield,
      title: 'Auth & Security',
      description: 'Enterprise-grade authentication and security implementations',
      color: 'bg-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Indie Hacker',
      company: 'BuildFast',
      content: 'ProctifyAI helped me launch 3 SaaS products in a month. The AI understands exactly what I want to build and generates production-ready code.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Startup Founder',
      company: 'TechFlow',
      content: 'The chatbot builder is revolutionary. I created an AI assistant that handles 90% of customer inquiries and integrates with our entire stack.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Marcus Johnson',
      role: 'Agency Owner',
      company: 'Digital Craft',
      content: 'We deliver client projects 10x faster now. The quality is incredible - it generates code better than most junior developers.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      gradient: 'from-green-400 to-emerald-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for indie hackers and side projects',
      features: [
        '10 AI-generated projects/month',
        'Basic templates & components',
        'Standard hosting & deployment',
        'Community support',
        'Code export & download'
      ],
      popular: false,
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$79',
      description: 'For growing businesses and teams',
      features: [
        'Unlimited AI projects',
        'Premium templates & advanced AI',
        'Custom domains & SSL',
        'Priority support & onboarding',
        'Advanced integrations',
        'Team collaboration',
        'Analytics & monitoring'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      description: 'For large teams and organizations',
      features: [
        'Everything in Pro',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated support manager',
        'On-premise deployment',
        'Advanced security & compliance',
        'Custom integrations & APIs'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % innovativeFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10"
      >
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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <motion.button 
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">AI-Native MVP Builder</span>
              <ChevronRight className="h-4 w-4 text-purple-400 ml-2" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-white">Build</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Smarter
              </span>
              <br />
              <span className="text-white">Launch</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Faster
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your wildest ideas into production-ready applications with our revolutionary AI platform. 
              Generate websites, chatbots, mobile apps, and complete backends in seconds, not months.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button 
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 shadow-2xl shadow-purple-500/25"
              >
                <Rocket className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Start Building Now
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-white/60 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">60s</div>
                <div className="text-white/60 text-sm">Average Build Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-white/60 text-sm">Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovative Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of development with cutting-edge AI that understands, creates, and deploys
            </p>
          </motion.div>

          {/* Interactive Feature Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {innovativeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    currentFeature === index
                      ? 'bg-white/10 border-white/30 shadow-2xl'
                      : 'bg-white/5 border-white/10 hover:bg-white/8'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70 mb-3">{feature.description}</p>
                      <p className="text-sm text-purple-300 font-medium">{feature.demo}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center"
                  >
                    {(() => {
                      const CurrentIcon = innovativeFeatures[currentFeature].icon;
                      return (
                        <>
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${innovativeFeatures[currentFeature].gradient} flex items-center justify-center`}>
                      <CurrentIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {innovativeFeatures[currentFeature].title}
                    </h3>
                    <p className="text-white/80 mb-6">
                      {innovativeFeatures[currentFeature].demo}
                    </p>
                    <div className="bg-black/20 rounded-xl p-4 font-mono text-sm text-green-400">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-white/60 ml-2">ProctifyAI Terminal</span>
                      </div>
                      <div className="text-left">
                        <div className="text-purple-400">$ proctify generate --type=webapp</div>
                        <div className="text-white/60">✨ Analyzing requirements...</div>
                        <div className="text-white/60">🧠 Generating architecture...</div>
                        <div className="text-green-400">✅ MVP ready in 47 seconds!</div>
                      </div>
                    </div>
                        </>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Building Blocks Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Everything You Need to Build
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`${block.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <block.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{block.title}</h4>
                  <p className="text-white/70">{block.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Loved by Builders Worldwide
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of creators who are building the future with ProctifyAI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white/20"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-2xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-white/80">
              Choose the perfect plan for your building journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/25 scale-105' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-white/60">/month</span>
                  </div>
                  <p className="text-white/70">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25'
                      : 'border-2 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join the AI revolution and transform your ideas into reality in seconds, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
              />
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ProctifyAI
                </span>
              </div>
              <p className="text-white/70 mb-6">
                The AI-native platform for builders who want to launch faster and build smarter.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">gh</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 ProctifyAI. All rights reserved. Built with ❤️ and AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;