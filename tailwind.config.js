/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#e2e3ee",
        background: "#0b0c13",
        primary: "#afb1cf",
        secondary: "#1d1e30",
        accent: "#7072a9",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
