import { Chart } from "./Chart/Chart";
import { Input } from "./Input";
import { SortSelect } from "./Chart/SortSelect";
import { Box } from "./Box";
import { Pagination } from "./Chart/Pagination";
import { useChart } from "./Chart/useChart";
import { Loader } from "./Loader";
import { Title } from "./Title";

export function FundingRoundChart() {
  const {
    chartData,
    loading,
    error,
    search,
    setSearch,
    offset,
    setOffset,
    limit,
    setSort,
    sort,
    totalCount,
  } = useChart();

  if (error) return <p>Error!</p>;

  return (
    <div className={"font-display p-5 flex flex-col gap-5"}>
      <Title className={"text-2xl"}>Funding Round Chart</Title>
      <Box className={"flex min-sm:flex-row gap-2 min-sm:items-center"}>
        <Input
          placeholder="Search…"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setOffset(0);
          }}
        />
        <SortSelect value={sort} onValueChange={setSort} />
      </Box>
      <Loader isLoading={loading} className={"flex flex-col gap-5"}>
        <Pagination
          totalCount={totalCount}
          offset={offset}
          limit={limit}
          onOffsetChange={setOffset}
        />
        <Chart data={chartData} />
        <Pagination
          totalCount={totalCount}
          offset={offset}
          limit={limit}
          onOffsetChange={setOffset}
        />
      </Loader>
    </div>
  );
}
