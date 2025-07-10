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
    <div className="min-h-screen bg-[#0a0c1b] text-white relative overflow-x-hidden">
      {/* Neon Glow Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulseGlow" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulseGlow" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl animate-pulseGlow" />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_2px_24px_rgba(99,102,241,0.4)]"
        >
          Build <span className="text-cyan-400">AI Apps</span> <br /> at the Speed of Thought
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-2xl text-white/80 mb-10"
        >
          The next-gen platform for creating, deploying, and scaling AI-powered products. Experience the future of development with glassy UI, neon accents, and smooth animations.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: '0 0 24px 4px #06b6d4' }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGetStarted}
          className="px-8 py-4 rounded-xl font-bold text-lg bg-cyan-500/80 hover:bg-cyan-400 text-white shadow-lg border border-cyan-400/40 backdrop-blur-md transition-all duration-200"
        >
          Get Started
        </motion.button>
      </section>
      {/* Features Section (template) */}
      <section className="relative z-10 max-w-5xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {innovativeFeatures.slice(0,3).map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.7 }}
            className="bg-white/5 border border-cyan-400/30 rounded-2xl p-8 shadow-xl backdrop-blur-lg flex flex-col items-center text-center hover:border-cyan-400/80 hover:shadow-cyan-400/20 transition-all duration-300 group"
          >
            <feature.icon className="h-10 w-10 text-cyan-400 mb-4 drop-shadow-[0_2px_12px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-bold mb-2 text-white drop-shadow">{feature.title}</h3>
            <p className="text-white/70 mb-2">{feature.description}</p>
            <span className="text-cyan-400/80 text-xs uppercase tracking-wider">{feature.demo}</span>
          </motion.div>
        ))}
      </section>

      {/* Building Blocks Section */}
      <section className="relative z-10 max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buildingBlocks.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-lg flex flex-col items-center text-center hover:border-white/20 hover:shadow-white/10 transition-all duration-300"
          >
            <div className={`${block.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
              <block.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{block.title}</h3>
            <p className="text-white/70">{block.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-lg flex flex-col items-center text-center hover:border-white/20 hover:shadow-white/10 transition-all duration-300"
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
                className="w-16 h-16 rounded-full mr-4 border-2 border-white/20"
              />
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-white/60 text-sm">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-2xl`}></div>
          </motion.div>
        ))}
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
            className={`relative bg-white/5 border rounded-2xl p-8 transition-all duration-300 ${
              plan.popular 
                ? 'border-cyan-400 shadow-2xl shadow-cyan-400/25 scale-105' 
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-400/25'
                  : 'border-2 border-white/20 text-white hover:bg-white/10'
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto py-16 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl"
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
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm"
            />
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-400/25"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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
      </footer>
    </div>
  );
};

export default LandingPage;