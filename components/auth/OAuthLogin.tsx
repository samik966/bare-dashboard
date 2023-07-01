'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { Icons } from '../ui/icons'

function OAuthLogin() {
	const handleGoogleLogin = async () => {
		const signInResponse = await signIn('google')
	}
	return (
		<div className='grid gap-2'>
			<Button
				aria-label={`Sign in with Google`}
				variant='outline'
				className='w-full bg-background sm:w-auto'
				onClick={handleGoogleLogin}
			>
				<Icons.google className='h-4 w-4 mt-[1.5px] mr-2' />
				Login With Google
			</Button>
		</div>
	)
}

export default OAuthLogin

