import { type Metadata } from 'next'
import Link from 'next/link'

import OAuthLogin from '@/components/auth/OAuthLogin'
import RegisterForm from '@/components/auth/RegisterForm'
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
	title: 'Register',
	description: 'Register a new account'
}

interface RegisterPageProps {
	searchParams: { [key: string]: string | string[] | undefined }
}

export default function RegisterPage({ searchParams }: RegisterPageProps) {
	if (!config.pages.register) {
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
					<CardTitle className='text-2xl'>Register</CardTitle>
					{config.auth.google && (
						<CardDescription>
							Choose your preferred signup method
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
					<RegisterForm />
				</CardContent>
				<CardFooter className='flex flex-wrap items-center justify-center'>
					{config.pages.login && (
						<div className='flex-1 text-sm text-muted-foreground text-center'>
							Already have an account?{' '}
							<Link
								aria-label='Login'
								href='/login'
								className='text-primary underline-offset-4 transition-colors hover:underline'
							>
								Login
							</Link>
						</div>
					)}
				</CardFooter>
			</Card>
		</Shell>
	)
}

