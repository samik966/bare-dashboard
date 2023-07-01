import { prisma } from '@/lib/prisma'
import { LoginInputType } from '@/validations/auth'
import { compare, genSalt, hash } from 'bcrypt'

export const hashPassword = async (password: string) => {
	try {
		const salt = await genSalt(10)
		const hashedPassword = await hash(password, salt)
		return hashedPassword
	} catch (e: unknown) {
		throw new Error('Error trying to hash password')
	}
}

export const verifyPassword = async (
	password: string,
	hashedPassword: string
) => {
	try {
		const isVerified = await compare(password, hashedPassword)
		return isVerified
	} catch (e: unknown) {
		return false
	}
}

export const checkUserExsit = async (credentials: LoginInputType) => {
	const user = await prisma.user.findUnique({
		where: {
			email: credentials.email
		},
		include: {
			role: true
		}
	})
	if (!user) {
		throw new Error('Invalid Credentials')
	}

	return user
}

export const getRoleNames = async () => {
	const roles = await prisma.role.findMany({
		select: {
			roleName: true
		}
	})

	if (!roles) return []
	return roles.map((role) => role.roleName)
}

export const getRoleByName = async (roleName: string) => {
	const role = await prisma.role.findUnique({
		where: {
			roleName
		}
	})
	if (!role) return null
	return role
}

export const getRoleById = async (roleId: string) => {
	const role = await prisma.role.findUnique({
		where: {
			id: roleId
		}
	})
	if (!role) return null
	return role
}

