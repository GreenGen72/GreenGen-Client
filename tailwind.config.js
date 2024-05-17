/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#316127',
        'secondary': '#74A435',
        'lite-grey':'#F1F8F3',
        'main-base-color': '#F1F8F3',
        'wp-bg-color': '#487908',
        'wp-hv-bg-color': '#616127'
      }
    },
  },
  plugins: [require("daisyui")],
};