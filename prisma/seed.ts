import { hashPassword } from '@/app/api/_actions/auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
	await prisma.user.deleteMany()
	await prisma.role.deleteMany()
	await prisma.role.createMany({
		data: [
			{
				roleName: 'admin',
				roleDesc: 'Resource to be accessed by admin users only'
			},
			{
				roleName: 'member',
				roleDesc: 'Resources to be accessed by member users only'
			}
		]
	})

	const [adminRole, memberRole] = await prisma.$transaction([
		prisma.role.findUnique({
			where: {
				roleName: 'admin'
			}
		}),

		prisma.role.findUnique({
			where: {
				roleName: 'member'
			}
		})
	])
	if (adminRole && memberRole) {
		await prisma.user.createMany({
			data: [
				{
					email: 'admin@gmail.com',
					name: 'Admin',
					password: await hashPassword('Admin123**#'),
					roleId: adminRole.id
				},
				{
					email: 'member@gmail.com',
					name: 'Member',
					password: await hashPassword('Member123**#'),
					roleId: memberRole.id
				}
			]
		})
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})

