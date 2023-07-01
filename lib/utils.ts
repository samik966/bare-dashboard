import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function extractInitials(name?: string | null) {
	if (!name) return ''
	const words = name.split(' ')
	const firstInitial = words[0] ? words[0].charAt(0) : ''
	const lastInitial = words.length > 1 ? words[words.length - 1].charAt(0) : ''
	return firstInitial + lastInitial
}

