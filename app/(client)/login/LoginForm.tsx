'use client'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginFormType, loginFormSchema } from './login.schema'
type Props = {}

const LoginForm = (props: Props) => {
	const form = useForm<LoginFormType>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})
	const [isLoading, setIsLoading] = useState(false)

	function onSubmit(values: LoginFormType) {
		console.log(values)
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='email@example.com' {...field} />
							</FormControl>
							<FormDescription>
								{form.getFieldState('email').isDirty}
							</FormDescription>
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
								<Input placeholder='********' {...field} />
							</FormControl>
							<FormDescription>{}</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isLoading}>
					{isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
					Sign In with Email
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm

