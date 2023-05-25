/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        very_dark_magenta: 'hsl(300, 43%, 22%)',
        soft_pink: 'hsl(333, 80%, 67%)',
        dark_grayish_magenta: 'hsl(303, 10%, 53%)',
        light_grayish_magenta: 'hsl(300, 24%, 96%)',
        review_bg: 'hsl(300, 10%, 89%)',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

