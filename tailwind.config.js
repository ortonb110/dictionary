/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultDark: "#050505",
        lightDark: "#1F1F1F",
        darkGray: "#2D2D2D",
        defaultGray: "#3A3A3A",
        lightGray: "#757575",
        veryLightGray: "#E9E9E9",
        offWhite: "#F4F4F4",
        lightPurple: "#A445ED",
        lightOrange: "#FF5252",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
        lora: ["'Lora', serif"],
        inconsolata: ["'Inconsolata', monospace"],
      },
    },
  },
  plugins: [],
};
