/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				rage: '#A30000',
				sad: '#5603AD',
				weary: '#FF6200',
				happy: '#00A664',
				accent: '#00A6A6',
			},
		},
	},
	plugins: [],
};
