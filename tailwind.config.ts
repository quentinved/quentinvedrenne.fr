import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-bg) / <alpha-value>)',
        foreground: 'rgb(var(--color-fg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        cta: 'rgb(var(--color-cta-bg) / <alpha-value>)',
        'cta-foreground': 'rgb(var(--color-cta-fg) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-fg) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-fg-secondary) / <alpha-value>)',
        'background-card': 'rgb(var(--color-surface) / 0.05)',
        'border-subtle': 'rgb(var(--color-surface) / 0.1)',
        'accent-blue': '#2563eb',
        'accent-sky': '#0284c7',
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
