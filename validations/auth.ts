'use client'
import * as z from 'zod'

export const loginSchema = z.object({
	email: z.string().nonempty().email('Invalid Email Provided').trim(),
	password: z
		.string()
		.nonempty()
		.min(8)
		.max(64)
		.trim()
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'Password must contain a capital Letter, a small letter and a special character @$!%*?&#'
		)
})

export const registerSchema = z.object({
	name: z
		.string()
		.nonempty()
		.min(3)
		.regex(/^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed.')
		.trim(),
	email: z.string().nonempty().email('Invalid Email Provided').trim(),
	password: z
		.string()
		.nonempty()
		.min(8)
		.max(64)
		.trim()
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'Password must contain a capital Letter, a small letter and a special character @$!%*?&#'
		)
})

export type RegisterInputType = z.infer<typeof registerSchema>
export type LoginInputType = z.infer<typeof loginSchema>

