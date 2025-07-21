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
        'primary-navy': '#1e3a8a',
        'primary-blue': '#3b82f6',
        'accent-orange': '#f97316',
        'neutral-charcoal': '#374151',
        primary: {
          navy: '#1e3a8a',
          blue: '#3b82f6',
        },
        accent: {
          orange: '#f97316',
        },
        neutral: {
          charcoal: '#374151',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config