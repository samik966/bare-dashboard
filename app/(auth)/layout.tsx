import AuthHeader from '@/components/auth/AuthHeader'

export const metadata = {
	title: 'Login',
	description: 'Login Page'
}

export default function AuthLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen flex flex-col'>
			<AuthHeader />
			<div className='flex-1 flex items-center'>{children}</div>
		</div>
	)
}

