/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#1a1a1a',
          800: '#0d0d0d',
          900: '#050505',
          950: '#000000',
        },
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
        },
        coral: {
          500: '#FF6B6B',
          600: '#EE5A52',
        },
        gradient: {
          primary: '#D4885F',
          secondary: '#DD2B00',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D4885F 0%, #DD2B00 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #DD2B00 0%, #D4885F 100%)',
      }
    },
  },
  plugins: [],
};