import { config } from '@/lib/config'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Admin Dashboard',
	description: 'Admin Dashboard page'
}

export default function AdminLayout({
	children
}: {
	children: React.ReactNode
}) {
	if (config.pages.admin) {
		redirect('/')
	}
	return <div>{children}</div>
}

