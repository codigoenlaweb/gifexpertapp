module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        'color-primary': '#5333ed',
        'color-secondary': '#907DF0',
      },
    },
  },
  plugins: [],
}
