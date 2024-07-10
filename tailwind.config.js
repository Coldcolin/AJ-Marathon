/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: { max: "480px" },
      smPh: { max: "351px" },
    },
  },
  plugins: [],
};
