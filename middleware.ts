import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export const config = { matcher: ['/admin', '/member'] }

const unauthorizedRedirect = (url: string) => {
	return NextResponse.redirect(new URL('/login?message=Not Authenticated', url))
}

export default withAuth(
	async function middleware(req) {
		const {
			nextUrl: { pathname },
			nextauth: { token },
			url
		} = req

		if (pathname.startsWith('/admin')) {
			if (!token?.role?.roleName || token.role.roleName !== 'admin') {
				return unauthorizedRedirect(url)
			}
		} else if (pathname.startsWith('/member')) {
			if (!token?.role?.roleName || token.role.roleName !== 'member') {
				return unauthorizedRedirect(url)
			}
		}
	},
	{
		callbacks: {
			authorized({ token, req }) {
				return !!token
			}
		}
	}
)

