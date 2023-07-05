/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'Alata': ['Alata', 'sans-serif'],
			'Actor': ['Actor', 'sans-serif'],
		},
		backgroundImage: {
			'pattern': "url('../images/background.svg')",
		},
	},
	plugins: [],
}
