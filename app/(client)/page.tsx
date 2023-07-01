'use client'
import { useSession } from 'next-auth/react'

const Home = () => {
	const { data: clientSession } = useSession()
	return <div>{JSON.stringify(clientSession, null, 2)}</div>
}

export default Home

