import { ComponentProps } from 'react'
import { Box } from './Box'

export type LoaderProps = {
  isLoading: boolean
}

export const Loader = ({ isLoading, className, children, ...props }: LoaderProps & ComponentProps<'div'>) => {
  return (
    <div className={className} {...props}>
      {isLoading ? (
        <Box className="flex items-center justify-center h-50">
          <div className="loader">Loading…</div>
        </Box>
      ) : (
        children
      )}
    </div>
  )
}
