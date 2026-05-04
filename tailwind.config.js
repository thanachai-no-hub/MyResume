const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'text-primary': 'var(--text-primary, #3C3C3C)',
      },
    },
  },
  plugins: [],
};
