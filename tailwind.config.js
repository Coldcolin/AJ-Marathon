/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poor-story': ["Poor Story", "cursive"]
      }
    },
    screens: {
      sm: "640px",
      phone: { max: "480px" },
      smPh: { max: "351px" },
    },
  },
  plugins: [],
};
