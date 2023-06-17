export const metadata = {
	title: 'Home',
	description: 'Home Page'
}

export default function ClientLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}

