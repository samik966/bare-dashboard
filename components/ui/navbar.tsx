import { ReactNode } from 'react'
interface NavbarProps {
	children?: ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
	return <nav className='min-h-[60px] flex px-4 border-b'>{children}</nav>
}

export default Navbar

