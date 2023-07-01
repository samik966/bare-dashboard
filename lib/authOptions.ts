import {
	checkUserExsit,
	getRoleById,
	getRoleByName,
	verifyPassword
} from '@/app/api/_actions/auth'
import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import CredentialProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleClientProvider from 'next-auth/providers/google'

export const AuthOptions: NextAuthOptions = {
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
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			async profile(profile) {
				if (!profile.role) {
					const role = await getRoleByName('member')
					return {
						roleId: role?.id,
						id: profile.sub,
						name: profile.name,
						email: profile.email,
						image: profile.picture
					}
				}
				return profile
			}
		}),
		CredentialProvider({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				email: { label: 'Email' },
				password: { label: 'Password' }
			},
			async authorize(credentials) {
				if (!credentials) {
					throw new Error('No Credentials')
				}
				const userExist = await checkUserExsit(credentials)

				const { password, ...restUser } = userExist
				if (!password) {
					throw new Error('Invalid Credentials')
				}

				const passwordMatches = verifyPassword(credentials.password, password)
				if (!passwordMatches) {
					throw new Error('Invalid Credentials')
				}

				return restUser
			}
		})
	],
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				let role = user.role
				if (!role && user.roleId) {
					role = await getRoleById(user.roleId)
				}
				token.role = role
			}
			return token
		},
		session({ session, token, user }) {
			console.log(token)
			if (token && session.user) {
				session.user.role = token.role
			}
			return session
		}
	},
	pages: {
		signIn: '/login'
	},
	session: {
		strategy: 'jwt'
	},
	secret: process.env.NEXTAUTH_SECRET
	// debug: process.env.NODE_ENV === 'development'
}

