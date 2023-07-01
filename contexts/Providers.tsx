'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeProvider'

interface ProvidersProps {
	children: ReactNode
}
const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<SessionProvider>{children}</SessionProvider>
		</ThemeProvider>
	)
}

export default Providers

