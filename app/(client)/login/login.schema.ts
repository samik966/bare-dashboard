'use client'
import * as z from 'zod'

export const loginFormSchema = z.object({
	email: z.string().email('Invalid Email Provided').trim(),
	password: z
		.string()
		.min(8)
		.max(64)
		.trim()
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'Password must contain a capital Letter, a small letter and a special character @$!%*?&#'
		)
})

export type LoginFormType = z.infer<typeof loginFormSchema>

