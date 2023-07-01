import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import Navbar from '@/components/ui/navbar'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Link from 'next/link'

const AuthHeader = () => {
	return (
		<Navbar>
			<div className='flex flex-1 items-center justify-between'>
				<Button variant='link' className='p-0' asChild>
					<Link href='/'>
						<Icons.chevronLeft className='h-4 w-4 mt-[1.5px] mr-1' />
						Home
					</Link>
				</Button>
				<ThemeToggle />
			</div>
		</Navbar>
	)
}

export default AuthHeader

