export const metadata = {
	title: 'Dashboard',
	description: 'Dashboard page'
}

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<h1>Dashboard Layout</h1>
				{children}
			</body>
		</html>
	)
}

