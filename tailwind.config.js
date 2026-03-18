/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        primary: "#FFFFFF",
        accent: "#22C55E",
        secondary: "#999999",
        card: "rgba(255, 255, 255, 0.05)",
        darkCard: "#020202",
      },
      fontFamily: {
        display: ["Antonio", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 30s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333333%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-33.333333%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
}
