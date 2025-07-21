import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0f172a',
        'primary-blue': '#0ea5e9',
        'accent-orange': '#f59e0b',
        'neutral-charcoal': '#334155',
        'background-light': '#f8fafc',
        primary: {
          navy: '#0f172a',
          blue: '#0ea5e9',
        },
        accent: {
          orange: '#f59e0b',
        },
        neutral: {
          charcoal: '#334155',
        }
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'source-sans': ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        'accent': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config