module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
