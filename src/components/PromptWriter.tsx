import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const placeholderPrompts = [
  'Describe your idea... (e.g., "Build a SaaS landing page with user auth")',
  'What do you want to create today?',
  'Type a prompt like "Generate a chatbot for customer support"',
  'How can AI help you build faster?'
];

const PromptWriter: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState<{ prompt: string; response: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(placeholderPrompts[0]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Cycle placeholder text every 4s
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const idx = placeholderPrompts.indexOf(prev);
        return placeholderPrompts[(idx + 1) % placeholderPrompts.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    // Simulate AI response (replace with real API call if needed)
    setTimeout(() => {
      setHistory((h) => [
        { prompt, response: `AI: "${prompt}" (This is a mock response!)` },
        ...h
      ]);
      setPrompt('');
      setLoading(false);
      inputRef.current?.focus();
    }, 1200);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="relative bg-white/5 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-cyan-400/30 animate-fadeIn overflow-hidden"
      >
        {/* Neon Glow Effect */}
        <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 animate-pulseGlow" style={{ boxShadow: '0 0 40px 8px #06b6d455' }} />
        <div className="flex items-center mb-6 relative z-10">
          <Sparkles className="h-7 w-7 text-cyan-400 mr-3 animate-pop" />
          <h2 className="text-2xl font-extrabold text-white drop-shadow">Prompt Writer</h2>
        </div>
        <div className="relative flex items-center z-10">
          <input
            ref={inputRef}
            type="text"
            className="w-full px-6 py-5 rounded-xl border border-cyan-400/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 bg-white/10 text-white text-lg transition-all duration-200 shadow-lg placeholder:text-white/60 backdrop-blur-md"
            placeholder={placeholder}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
            disabled={loading}
            autoFocus
          />
          <motion.button
            whileHover={{ scale: 1.18, boxShadow: '0 0 16px 4px #06b6d4' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={loading || !prompt.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-cyan-500/80 hover:bg-cyan-400/90 active:bg-cyan-600 rounded-full shadow-xl border-2 border-cyan-400/60 focus:outline-none focus:ring-4 focus:ring-cyan-400/40 transition-all duration-200 disabled:opacity-50 z-20"
            aria-label="Send prompt"
          >
            {loading ? (
              <svg className="animate-spin h-7 w-7" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="4" fill="none" /></svg>
            ) : (
              <Send className="h-7 w-7" />
            )}
          </motion.button>
        </div>
        <AnimatePresence>
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 space-y-4 z-10"
            >
              {history.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/10 border border-cyan-400/20 rounded-lg p-4 shadow-md backdrop-blur-md"
                >
                  <div className="font-semibold text-white mb-1">{item.prompt}</div>
                  <div className="text-cyan-400 text-sm animate-fadeIn">{item.response}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PromptWriter; 