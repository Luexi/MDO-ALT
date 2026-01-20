/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'uagro-red': '#c53030',
				'uagro-red-dark': '#9b2c2c',
				'corporate-black': '#0d0d0d',
				'corporate-dark': '#1a1a1a',
				'corporate-gray-100': '#f5f5f5',
				'corporate-gray-200': '#e5e5e5',
				'corporate-gray-300': '#cccccc',
				'corporate-gray-600': '#666666',
				'corporate-gray-800': '#333333',
				'corporate-gray-900': '#1f1f1f',
			},
			fontFamily: {
				display: ['"Playfair Display"', 'serif'],
				body: ['"Source Sans Pro"', 'sans-serif'],
			},
			borderRadius: {
				'none': '0',
				'sm': '0',
				'DEFAULT': '0',
				'md': '0',
				'lg': '0',
				'xl': '0',
				'2xl': '0',
				'3xl': '0',
				'full': '0',
			},
			container: {
				center: true,
				padding: '2rem',
			},
		},
	},
	plugins: [],
};
