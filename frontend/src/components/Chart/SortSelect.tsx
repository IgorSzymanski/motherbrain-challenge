import { useMemo } from "react";
import { Sort } from "../../__generated__/graphql";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";

export type SortValue = Record<string, Sort | undefined>;

export type SortSelectProps = {
  onValueChange: (value: SortValue) => void;
  value: SortValue;
};

export function SortSelect(props: SortSelectProps) {
  const value = useMemo(() => {
    return (
      Object.keys(props.value).map((key) => `${key}:${props.value[key]}`)[0] ??
      ""
    );
  }, [props.value]);

  const onValueChange = (value: string) => {
    props.onValueChange({
      name:
        value === "name:asc"
          ? Sort.Asc
          : value === "name:desc"
            ? Sort.Desc
            : undefined,
    });
  };

  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectItem value="none">None</SelectItem> */}
          <SelectItem value="name:asc">Name (Ascending)</SelectItem>
          <SelectItem value="name:desc">Name (Descending)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
