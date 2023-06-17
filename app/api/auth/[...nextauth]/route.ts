import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import CredentialProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleClientProvider from 'next-auth/providers/google'

const handler = NextAuth({
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD
				}
			},
			from: process.env.EMAIL_FROM
		}),
		GoogleClientProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		CredentialProvider({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				email: { label: 'Email' },
				password: { label: 'Password' }
			},
			async authorize(credentials) {
				return null
			}
		})
	]
})

export { handler as GET, handler as POST }

