/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f0f0f5",
        background: "#020203",
        primary: "#3d3d57",
        secondary: "#0f0f15",
        accent: "#62638d",
      },
    },
  },
  plugins: [],
};
