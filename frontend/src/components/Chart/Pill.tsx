import { useMemo } from "react";
import { cn } from "../../utils/class";
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "../Tooltip";

export type PillProps = {
  id: string;
  children?: React.ReactNode;
  maxValue: number;
  className?: string;
  themeClass?: string;
  value: number;
};

export const Pill = ({
  id,
  className,
  themeClass,
  children,
  value,
  maxValue,
}: PillProps) => {
  const percentage = useMemo(() => (value / maxValue) * 100, [value, maxValue]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            key={id}
            className={cn(
              "bg-theme h-6 hover:z-10 w-(--_width) rounded-sm relative starting:w-0 transition-all cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              themeClass,
              className,
            )}
            style={{ "--_width": `max(${percentage}%, 2px)` }}
          ></button>
        </TooltipTrigger>
        <TooltipContent
          className={cn("rounded-lg p-3 flex flex-col", className)}
          themeClass={themeClass}
        >
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
