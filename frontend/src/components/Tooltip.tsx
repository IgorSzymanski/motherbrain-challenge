import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ComponentProps } from 'react'
import { cn } from '../utils/class'

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = TooltipPrimitive.Root

export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipContent = ({
  className,
  sideOffset = 4,
  children,
  themeClass,
  ...properties
}: ComponentProps<typeof TooltipPrimitive.Content> & { themeClass?: string }) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'bg-theme animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden px-3 py-1.5 text-xs text-white shadow',
        themeClass,
        className,
      )}
      {...properties}
    >
      {children}
      <TooltipPrimitive.Arrow className={'fill-theme'} />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
)
