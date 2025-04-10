/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        olive: {
          100: "#E9EBE5",
          200: "#D3D8CC",
          300: "#BDC5B3",
          400: "#A7B29A",
          500: "#91A082",
          600: "#7B8D69",
          700: "#5A6B46",
          800: "#4A5A3A",
          900: "#3D4A30",
        },
        beige: {
          100: "#F5F2E9",
          200: "#E8E3D5",
          300: "#DBD4C1",
          400: "#CEC5AD",
          500: "#C1B699",
          600: "#B4A785",
          700: "#A79871",
          800: "#8E805F",
          900: "#756A4F",
        },
      },
    },
  },
  plugins: [],
};
