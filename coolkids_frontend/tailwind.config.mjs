import { transform } from "next/dist/build/swc/generated-native";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			keyframes: {
				gnr: {
					"0%": { opacity: 1, transform: "translate3d(0,0,0)" },
					"49%": { opacity: 0, transform: "translate3d(100%,0,0)" },
					"51%": { opacity: 0, transform: "translate3d(-100%,0,0)" },
					"100%": { opacity: 1, transform: "translate3d(0,0,0)" },
				},
			},
			animation: {
				gnr: "gnr 1s ease-in-out 0.25s 1",
			},
		},
	},
	plugins: [],
};
