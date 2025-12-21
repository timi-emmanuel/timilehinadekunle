/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a', // Dark mode background - lighter slate for better readability
        darkSecondary: '#1e293b', // Dark mode secondary - better contrast
        grayDark: '#1e293b', // Dark mode card/Section BG - matches secondary
        grayDarkHover: '#334155', // Dark mode card hover state - lighter for visibility
        primary: {
          DEFAULT: '#d97706', // Golden amber
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          DEFAULT: '#f59e0b', // Golden accent
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        white: '#ffffff',
        text: '#1e293b', // Light mode text (default)
        textDark: '#f1f5f9', // Dark mode text - light for readability
        light: '#64748b', // Light mode light text (default)
        lightDark: '#cbd5e1', // Dark mode light text - lighter gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Modern default
        display: ['Poppins', 'sans-serif'], // For headings
        lora: ['Lora', 'serif'], // For special accents
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.06em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(217, 119, 6, 0.5), 0 0 10px rgba(217, 119, 6, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.8), 0 0 30px rgba(217, 119, 6, 0.5)' },
        },
      },
      screens: {
        '2xl': '1270px',
      },
    },
  },
  plugins: [],
}

