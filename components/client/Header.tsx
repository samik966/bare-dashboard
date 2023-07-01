'use client'

import Link from 'next/link'

import Signout from '@/components/auth/Signout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icons } from '@/components/ui/icons'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { config } from '@/lib/config'
import { extractInitials } from '@/lib/utils'
import { User } from 'next-auth'

interface HeaderProps {
	user?: User
}
export default function Header(props: HeaderProps) {
	const { user } = props
	return (
		<NavigationMenu className='border-b justify-between max-w-full p-2'>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<Icons.wallet />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink active className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{user ? (
					<>
						<Avatar>
							<AvatarImage src={user.image ?? undefined} alt='@shadcn' />
							<AvatarFallback>{extractInitials(user.name)}</AvatarFallback>
						</Avatar>
						<Signout />
					</>
				) : (
					<>
						{config.pages.login && (
							<NavigationMenuItem>
								<Link href='/login' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Login
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						)}
						{config.pages.register && (
							<NavigationMenuItem>
								<Link href='/register' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Register
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						)}
					</>
				)}
				<ThemeToggle />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

