/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0A0D0B",
        panel: "#121613",
        "panel-2": "#161B17",
        border: "#26302A",
        text: "#E5E8E3",
        muted: "#7C8780",
        "muted-2": "#4F5850",
        accent: {
          DEFAULT: "#F2B84B",
          hover: "#FFC968",
        },
        live: "#4ADE80",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
