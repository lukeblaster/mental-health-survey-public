/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'uninassau': "url('/logo-facul-op-1.png')",
				'grade': 'url("/bg-grade.png")',
				'logo-uninassau': "url('/logo-uninassau.png')",
				'logo-apiext': "url('/logo-apiext.jpg')",
				'logo-grande': "url('/logo-grande.png')"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				// background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				background: '#EFE7DF',
				secondary: '#FCFAEB',
				white: '#ffffff',
				purple: '#F43FC1',
				black: '#000000',
				shadow: '#000',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		},
		fontFamily: {
			'sniglet': ['Sniglet'],
			'lora': ['Lora'],
			'lora-italic': ['LoraItalic'],
			'more-sugar': ['MoreSugar']
		},

	},
	plugins: [require("tailwindcss-animate")],
}

