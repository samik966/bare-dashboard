import { config } from '@/lib/config'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Member Dashboard',
	description: 'Dashboard page'
}

export default function MemberLayout({
	children
}: {
	children: React.ReactNode
}) {
	if (!config.pages.member) {
		redirect('/')
	}
	return <div>{children}</div>
}

