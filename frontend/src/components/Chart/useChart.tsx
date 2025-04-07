import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { Sort } from "../../__generated__/graphql";
import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__";
import { ChartData } from "./Chart";
import { SortValue as SortValue } from "./SortSelect";

const ORGANIZATION_QUERY = gql(/* GraphQL */ `
  query OrganizationQuery(
    $offset: Int
    $limit: Int
    $orderBy: OrganizationOrderByInput
    $fundingRoundOrderBy: FundingRoundsOrderByInput
    $filter: String
  ) {
    organizations(
      offset: $offset
      limit: $limit
      orderBy: $orderBy
      filter: $filter
    ) {
      items {
        id
        name
        description
        fundingRounds(orderBy: $fundingRoundOrderBy) {
          id
          name
          amount
          createdAt
        }
      }
      totalCount
    }
  }
`);

export const useChart = () => {
  const [limit] = useState(20);
  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search, 2000);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState<SortValue>({});
  const { data, loading, error } = useQuery(ORGANIZATION_QUERY, {
    variables: {
      offset,
      limit,
      filter,
      orderBy: sort,
      fundingRoundOrderBy: { createdAt: Sort.Asc },
    },
  });

  const organizations = useMemo(
    () =>
      (data?.organizations.items ?? []).map((element) => ({
        ...element,
        fundingRounds: element.fundingRounds.map((fundingRound) => ({
          ...fundingRound,
          createdAt: new Date(Number(fundingRound.createdAt)),
        })),
      })),
    [data],
  );

  const totalCount = useMemo(() => data?.organizations.totalCount ?? 0, [data]);

  const chartData = useMemo(
    () =>
      organizations.map((organization): ChartData => {
        return {
          id: organization.id,
          label: organization.name,
          details: organization.description,
          values:
            organization.fundingRounds.map((round) => ({
              id: round.id,
              label: round.name,
              value: round.amount,
              createdAt: round.createdAt,
            })) ?? [],
        };
      }),
    [organizations],
  );

  return {
    chartData,
    loading,
    error,
    search,
    setSearch,
    sort,
    setSort,
    offset,
    setOffset,
    limit,
    totalCount,
  };
};
