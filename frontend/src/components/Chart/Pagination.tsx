import {
  ArrowLeft,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightToLine,
} from "lucide-react";
import { Button } from "../Button";

export type PaginationProps = {
  totalCount: number;
  offset: number;
  limit: number;
  onOffsetChange: (offset: number) => void;
};

export function Pagination({
  totalCount,
  offset,
  limit,
  onOffsetChange,
}: PaginationProps) {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalCount / limit);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onOffsetChange(currentPage * limit);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onOffsetChange((currentPage - 2) * limit);
    }
  };
  const handleFirstPage = () => {
    if (currentPage > 1) {
      onOffsetChange(0);
    }
  };
  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onOffsetChange((totalPages - 1) * limit);
    }
  };

  return (
    <div className={"flex flex-row gap-2 items-center justify-center"}>
      <Button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        aria-label="First Page"
        title="First Page"
      >
        <ArrowLeftToLine className={"size-4"} />
      </Button>
      <Button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        title="Previous Page"
      >
        <ArrowLeft className={"size-4"} />
      </Button>
      <span className={"whitespace-nowrap"}>
        {currentPage} of {totalPages}
      </span>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        title="Next Page"
      >
        <ArrowRight className={"size-4"} />
      </Button>
      <Button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        aria-label="Last Page"
        title="Last Page"
      >
        <ArrowRightToLine className={"size-4"} />
      </Button>
    </div>
  );
}
