/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors: {
        lime: 'hsl(61, 70%, 52%)',
        error: 'hsl(4, 69%, 50%)',
      },
    },
  },
  plugins: [],
}
