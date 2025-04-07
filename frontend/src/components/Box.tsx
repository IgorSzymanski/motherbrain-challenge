import { cn } from '../utils/class'

export type BoxProps = {
  className?: string
  children: React.ReactNode
}

export const Box = ({ className, children, ...props }: BoxProps) => {
  return <div className={cn('flex flex-col gap-1 bg-gray-50 rounded-lg hover:bg-gray-100 p-5 hover:shadow-xl transition-all', className)} {...props}>
    {children}
  </div>
}
