/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "cement-dark": "#1f2937",
        "cement-grey": "#64748b", 
        "cement-red": "#dc2626",
      },
      boxShadow: {
        product: "0 4px 15px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
      },
      keyframes: {
        "truck-drive": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "truck-drive": "truck-drive 6s linear infinite",
      },
    },
  },
  plugins: [],
}
