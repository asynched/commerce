/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          default: '#fff159',
        },
      },
    },
  },
  plugins: [],
}
