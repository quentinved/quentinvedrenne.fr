import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'background-card': 'rgba(255, 255, 255, 0.05)',
        'border-subtle': 'rgba(255, 255, 255, 0.1)',
        'accent-blue': '#2563eb',
        'accent-sky': '#0284c7',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a1a1aa',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #2563eb, #0284c7)',
      },
    },
  },
  plugins: [],
};

export default config;
