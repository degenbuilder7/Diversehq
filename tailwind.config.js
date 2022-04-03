module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradientpink': '#ED30CD',
        'blurple': '#5865F2',
        'lightblack': '#1c1c1c'
      },
      backgroundImage: {
        'hero-pattern': "url('/workspace/Diversehq/diversehq/pages/image/shubham-dhage-26PeYRqpBh8-unsplash.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
