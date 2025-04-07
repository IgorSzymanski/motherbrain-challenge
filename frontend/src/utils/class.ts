import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge, mergeConfigs } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  return extendTailwindMerge((config) =>
    mergeConfigs(config, {
      extend: {
        classGroups: {
          theme: [(value: string): boolean => value.startsWith("theme-")],
        },
      },
    }),
  )(clsx(...inputs));
};
