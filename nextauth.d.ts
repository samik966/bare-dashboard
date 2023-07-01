// nextauth.d.ts
import { Roles } from '@prisma/client'
import { DefaultUser } from 'next-auth'
// Define a role enum

// common interface for JWT and Session
interface IUser extends DefaultUser {
	role?: Roles
	roleId?: string
}
declare module 'next-auth' {
	interface User extends IUser {}
	interface Session {
		user?: User
	}
}
declare module 'next-auth/jwt' {
	interface JWT extends IUser {}
}

