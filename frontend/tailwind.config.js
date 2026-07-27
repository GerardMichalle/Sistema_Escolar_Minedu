/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        institucional: {
          950: "#1e1b4b",
          900: "#312e81",
        },
      },
    },
  },
  plugins: [],
};
