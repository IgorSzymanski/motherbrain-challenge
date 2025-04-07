import { ComponentProps } from "react";
import { Box } from "./Box";
import { CircleXIcon } from 'lucide-react'

export type LoaderProps = {
  isLoading: boolean;
  isError?: boolean;
};

export const Loader = ({
  isLoading,
  isError,
  className,
  children,
  ...props
}: LoaderProps & ComponentProps<"div">) => {
  return (
    <div className={className} {...props}>
      {isLoading ? (
        <Box className="flex items-center justify-center h-50">
          <div className="loader">Loading…</div>
        </Box>
      ) : isError ? <Box className="flex flex-col items-center justify-center gap-2 text-center p-10">
          <CircleXIcon className={"size-10 text-rose-600"} />
          <span className={"text-gray-500 text-lg"}>Unexcpected Error</span>
        </Box> : (
        children
      )}
    </div>
  );
};
