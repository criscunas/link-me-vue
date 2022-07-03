module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './views/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'small' : '400px',
      'tablet' : '768px',
    },
  },
  plugins: [require("daisyui")],
}
