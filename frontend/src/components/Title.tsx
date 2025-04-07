import { ComponentProps } from 'react'
import { cn } from '../utils/class'

export const Title = ({ className, ...props }: ComponentProps<'h2'>) => {
  return (
    <h1 className={cn('!text-4xl font-bold text-gray-900 text-center m-5', className)} {...props} />
  )
}
