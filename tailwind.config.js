module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './views/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'small' : '375px',
    },
  },
  plugins: [require("daisyui")],
}
