/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.php", "index.php"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        title: ["Kanit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

