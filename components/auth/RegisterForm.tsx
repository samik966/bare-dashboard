'use client'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { RegisterInputType, registerSchema } from '@/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface RegisterProps {}

const RegisterForm = (props: RegisterProps) => {
	const form = useForm<RegisterInputType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			name: '',
			password: ''
		}
	})
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const handleSubmit = async (formData: RegisterInputType) => {
		startTransition(async () => {
			const signInResponse = await signIn('credentials', {
				...formData,
				redirect: false
			})
			if (signInResponse?.error) {
				toast.error(signInResponse.error)
			} else {
				router.replace('/')
			}
		})
	}

	return (
		<Form {...form}>
			<form
				method='POST'
				onSubmit={form.handleSubmit(handleSubmit)}
				className='space-y-8'
			>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input type='text' placeholder='John Doe' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='email@example.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type='password' placeholder='********' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className='w-full' disabled={isPending}>
					{isPending && (
						<Icons.spinner
							className='mr-2 h-4 w-4 animate-spin'
							aria-hidden='true'
						/>
					)}
					Register
					<span className='sr-only'>Register</span>
				</Button>
			</form>
		</Form>
	)
}

export default RegisterForm

