import { type Metadata } from 'next'
import Link from 'next/link'

import LoginForm from '@/components/auth/LoginForm'
import OAuthLogin from '@/components/auth/OAuthLogin'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Shell } from '@/components/ui/shell'
import { config } from '@/lib/config'
import { AlertCircle } from 'lucide-react'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
	title: 'Sign In',
	description: 'Sign in to your account'
}

interface LoginPageProps {
	searchParams: { [key: string]: string | string[] | undefined }
}

export default function LoginPage({ searchParams }: LoginPageProps) {
	if (!config.pages.login) {
		redirect('/')
	}
	return (
		<Shell layout='auth'>
			{searchParams?.message && (
				<Alert variant='destructive'>
					<AlertCircle className='h-4 w-4' />
					<AlertDescription>{searchParams.message}</AlertDescription>
				</Alert>
			)}
			<Card>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-2xl'>Log in</CardTitle>
					{config.auth.google && (
						<CardDescription>
							Choose your preferred login in method
						</CardDescription>
					)}
				</CardHeader>
				<CardContent className='grid gap-4'>
					{config.auth.google && (
						<>
							<OAuthLogin />
							<div className='relative'>
								<div className='absolute inset-0 flex items-center'>
									<span className='w-full border-t' />
								</div>
								<div className='relative flex justify-center text-xs uppercase'>
									<span className='bg-background px-2 text-muted-foreground'>
										Or continue with
									</span>
								</div>
							</div>
						</>
					)}
					<LoginForm />
				</CardContent>
				<CardFooter className='flex flex-wrap items-center space-x-2'>
					{config.pages.register && (
						<div className='flex-1 text-sm text-muted-foreground'>
							Don&apos;t have an account?{' '}
							<Link
								aria-label='Register'
								href='/register'
								className='text-primary underline-offset-4 transition-colors hover:underline'
							>
								Register
							</Link>
						</div>
					)}
					<Link
						aria-label='Reset password'
						href='/signin/reset-password'
						className='text-sm text-primary text-right underline-offset-4 transition-colors hover:underline'
					>
						Reset password
					</Link>
				</CardFooter>
			</Card>
		</Shell>
	)
}

