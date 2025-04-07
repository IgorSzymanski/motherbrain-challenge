import { ComponentProps } from 'react'
import { cn } from '../utils/class'

export const Button = ({ className, ...props }: ComponentProps<'button'>) => {
    return (
      <button
        className={cn('cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', "bg-primary text-primary-foreground shadow hover:bg-primary/50", "h-9 px-4 py-2", className)}
        {...props}
      />
    )
  }
