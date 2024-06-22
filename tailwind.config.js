/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#316127",
        secondary: "#74A435",
        accent: "#FF8A00",
        "lite-grey": "#F1F8F3",
        "main-base-color": "#F1F8F3",
        "wp-bg-color": "#487908",
      },
    },
  },
  plugins: [require("daisyui")],
};
