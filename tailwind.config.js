module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
