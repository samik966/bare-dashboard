import Header from '@/components/client/Header'
import { getServerSession } from 'next-auth'

export const metadata = {
	title: 'Home',
	description: 'Home Page'
}

export default async function ClientLayout({
	children
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession()
	return (
		<main className='min-h-screen w-screen'>
			<Header user={session?.user} />
			{children}
		</main>
	)
}

