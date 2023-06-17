import '@/assets/styles/globals.css'
import AuthProvider from '@/components/AuthProvider'
export const metadata = {
	title: 'Home',
	description: 'Home Page'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
}

