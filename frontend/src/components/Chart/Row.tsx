import { cn } from "../../utils/class";
import { formatDate } from "../../utils/date";
import { sum } from "../../utils/math";
import { formatEuroMoney } from "../../utils/money";
import { Box } from "../Box";
import { Pill } from "./Pill";

export type RowProps = {
  id: string;
  label: string;
  details?: string;
  values: {
    createdAt: Date;
    value: number;
    id: string;
    label: string;
  }[];
  themeClass?: string;
  className?: string;
  maxValue: number;
};

export const Row = ({
  label,
  values,
  themeClass,
  className,
  maxValue,
}: RowProps) => {
  return (
    <Box className={cn(themeClass, className)}>
      <div className={cn("grid min-sm:grid-cols-[repeat(2,auto)] gap-2")}>
        <span
          className={cn(
            'font-semibold text-sm before:content-["⏺︎_"] before:text-theme',
          )}
        >
          {label}
        </span>
        <span className={"text-sm justify-self-end-safe"}>
          <span className={"text-xs text-gray-600"}>Total:</span> {formatEuroMoney(sum(...values.map((pill) => pill.value)))}
        </span>
      </div>
      <div className={"flex-1 flex gap-1"}>
        {values.map((pill) => (
          <Pill
            key={pill.id}
            {...pill}
            maxValue={maxValue}
            themeClass={themeClass}
          >
            <span className={"text-xs uppercase"}>{pill.label}</span>
            <span className={"text-sm font-bold whitespace-break-spaces"}>
              {formatEuroMoney(pill.value)}
            </span>
            <span className={"text-xs italic"}>
              {formatDate(pill.createdAt)}
            </span>
          </Pill>
        ))}
        <span className={"flex-1 min-w-1 bg-gray-200 rounded-sm h-6"} />
      </div>
    </Box>
  );
};
