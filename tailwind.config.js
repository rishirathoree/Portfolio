/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: '1200px',
        md: '700px',
        sm: '300px',  
      }
    },
  },
  plugins: [],
}
