import { HeartCrackIcon } from 'lucide-react'
import { Box } from '../Box'

export const NoResults = () => {
  return <Box className='flex flex-col items-center justify-center gap-2 p-4 text-center p-10'>
    <HeartCrackIcon className={'size-10 text-pink-600'} />
    <span className={'text-gray-500 text-lg'}>No results found</span>
  </Box>
}
