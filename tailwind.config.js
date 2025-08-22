/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#20232a', // Background
        grayDark: '#161b22', // Card/Section BG
        primary: 'rgb(128, 0, 128)', // Primary Accent#6e29b3
        white: '#ffffff', // Heading Text
        text: '#c9d1d9', // Paragraph Text
        light: '#8b949e', // Light Text Contrast
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default body font
        lora: ['Lora', 'serif'], // Lora for headings or special use
        alt: ['Inter', 'sans-serif'], // Secondary if you want variation
        openSans: ['Open-Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      screens: {
        '2xl': '1270px',
      },
    },
  },
  plugins: [],
}

