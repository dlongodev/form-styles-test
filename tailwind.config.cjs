/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	theme: {
		extend: {
			colors: {
				primary: {
					25: '#FCFAFF',
					50: '#F8F5FD',
					100: '#DED2F2',
					200: '#B9A7DF',
					300: '#9689CB',
					400: '#726DB4',
					500: '#5D5BA0',
					600: '#4B4A88',
					700: '#3D3D73',
					800: '#242445',
					900: '#1A1A32'
				},
				neutral: {
					25: '#F9FAFB',
					50: '#F2F5F7',
					100: '#E6ECEF',
					200: '#D6E0E5',
					300: '#C7D4DC',
					400: '#B1C3CE',
					500: '#829EB0',
					600: '#547487',
					700: '#415968',
					800: '#293842',
					900: '#1D282F'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif']
			}
		}
	}
};

module.exports = config;
