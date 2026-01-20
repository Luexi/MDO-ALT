/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'uagro-navy': '#1a365d',
				'uagro-red': '#c53030',
				'uagro-red-dark': '#9b2c2c',
'gray-50': '#f7fafc',
				'gray-100': '#edf2f7',
				'gray-200': '#e2e8f0',
				'gray-300': '#cbd5e0',
				'gray-400': '#a0aec0',
				'gray-500': '#718096',
				'gray-600': '#4a5568',
				'gray-700': '#2d3748',
				'gray-800': '#1a202c',
				'gray-900': '#171923',
			},
			fontFamily: {
				display: ['"Plus Jakarta Sans"', 'sans-serif'],
				body: ['Manrope', 'sans-serif'],
			},
			borderRadius: {
				'pill': '9999px',
				'DEFAULT': '0.5rem',
			},
			backgroundImage: {
				'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(26, 54, 93, 0.3) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(197, 48, 48, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(237, 242, 247, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(26, 54, 93, 0.1) 0px, transparent 50%)',
			},
		},
	},
	plugins: [],
};
