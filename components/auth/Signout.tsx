'use client'

import { signOut } from 'next-auth/react'
import { toast } from 'sonner'
import { Button } from '../ui/button'

const Signout = () => {
	const handleSignout = async () => {
		signOut().then(() => toast.success('Lgged out succesfully'))
	}
	return <Button onClick={handleSignout}>Signout</Button>
}

export default Signout

