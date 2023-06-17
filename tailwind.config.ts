import type { Config } from 'tailwindcss'
import { shadcnPlugin } from './lib/shadcnPlugin'
// @ts-ignore
import animatePlugin from 'tailwindcss-animate'

const config = {
	content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
	plugins: [animatePlugin, shadcnPlugin]
} satisfies Config

export default config

