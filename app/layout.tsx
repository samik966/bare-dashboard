import '@/assets/styles/globals.css'
import { Toaster } from '@/components/ui/Toaster'
import Providers from '@/contexts/Providers'
import { Inter } from 'next/font/google'
export const metadata = {
	title: 'Home',
	description: 'Home Page'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body className={inter.className}>
				<Providers>
					{children}
					<Toaster />
				</Providers>
			</body>
		</html>
	)
}

