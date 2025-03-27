import { gql, useQuery } from "@apollo/client";

const FUNDING_ROUND_QUERY = gql`
  fragment FundingRoundFragment on FundingRound {
    id
    name
    amount
    createdAt
  }

  query {
    fundingRounds {
      ...FundingRoundFragment
    }
  }
`;

export default function FundingRoundTable() {
  const { data, loading, error } = useQuery(FUNDING_ROUND_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <table cellSpacing={8}>
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Amount</th>
          <th align="left">Created at</th>
        </tr>
      </thead>

      <tbody>
        {data.fundingRounds.map((fundingRound) => (
          <tr key={fundingRound.id}>
            <td style={{ verticalAlign: "top" }}>{fundingRound.name}</td>
            <td style={{ verticalAlign: "top" }}>{fundingRound.amount} EUR</td>
            <td style={{ verticalAlign: "top" }}>
              {new Date(Number(fundingRound.createdAt)).getFullYear()}-
              {new Date(Number(fundingRound.createdAt)).getMonth()}-
              {new Date(Number(fundingRound.createdAt)).getDate()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
