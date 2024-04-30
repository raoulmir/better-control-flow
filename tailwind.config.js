module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-+/
    }
  ],
  plugins: [],
}