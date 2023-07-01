import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { Icons } from './icons'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from './tooltip'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false)
		const title = showPassword ? 'Hide password' : 'Show password'
		const togglePasswordVisibility = () => {
			setShowPassword((prev) => !prev)
		}

		return (
			<div className='relative'>
				<input
					type={type === 'password' && showPassword ? 'text' : type}
					className={cn(
						'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className
					)}
					ref={ref}
					{...props}
				/>
				{type === 'password' && (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									type='button'
									variant='ghost'
									size='sm'
									className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
									onClick={togglePasswordVisibility}
									disabled={props.value === '' || props.disabled}
								>
									{showPassword ? (
										<Icons.eye className='h-4 w-4 text-gray-500' />
									) : (
										<Icons.eyeOff className='h-4 w-4 text-gray-500' />
									)}
									<span className='sr-only'>{title}</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>{title}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)}
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }

