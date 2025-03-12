/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Times New Roman"', 'Times', 'serif'],
        'sans': ['"Times New Roman"', 'Times', 'serif'] // Override sans to use Times New Roman
      },
      colors: {
        'hopesera-blue': '#2a5caa',
        'hopesera-light-blue': '#63a7e6',
        'hopesera-pink': '#f37d8f',
        'hopesera-light-pink': '#fcd3d9',
        'hopesera-gold': '#e5b36a',
        'hopesera-cream': '#fdf6ee',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSoft 2s infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'flow': 'flow 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(0, 0, 0, 0.07)',
        'glow': '0 0 15px rgba(99, 167, 230, 0.5)',
        'pink-glow': '0 0 15px rgba(243, 125, 143, 0.5)',
        'gold-glow': '0 0 15px rgba(229, 179, 106, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  safelist: [
    'animate-slide-up',
    'animate-fade-in',
    'animate-bounce-subtle',
    'shimmer-effect',
    'bg-flow',
    'fade-in-sequence',
  ],
}