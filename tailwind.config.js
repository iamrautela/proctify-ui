/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // indigo-500
        secondary: '#a1a1aa', // zinc-400
        accent: '#fbbf24', // amber-400
        background: '#f8fafc', // slate-50
        surface: '#ffffff',
        muted: '#e5e7eb', // gray-200
        dark: '#18181b', // zinc-900
      },
      backgroundImage: {},
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(99, 102, 241, 0.08)',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pop: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 #2563eb80' },
          '50%': { boxShadow: '0 0 24px 8px #2563eb80' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        pop: 'pop 0.2s cubic-bezier(0.4,0,0.2,1)',
        slideUp: 'slideUp 0.7s cubic-bezier(0.4,0,0.2,1)',
        pulseGlow: 'pulseGlow 2s infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
