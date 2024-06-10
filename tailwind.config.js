/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#000000',
        'accent': '#ED1C24',
        'gray': '#D9D9D9'
      },
    },
  },
  plugins: [],
}