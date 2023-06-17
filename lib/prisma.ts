import { Prisma, PrismaClient } from '@prisma/client'

/* eslint-disable no-var */
declare global {
	var prisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}
	prisma = global.prisma
}

export { Prisma, prisma }

