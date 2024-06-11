const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
