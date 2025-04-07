import { gql } from 'graphql-tag';

export const typeDefs = gql`
type FundingRound {
    id: String!
    name: String!
    amount: Int!
    createdAt: String!
    organizationId: String!
    organization: Organization!
  }

type Organization {
    id: String!
    name: String!
    description: String!
    fundingRounds(orderBy: FundingRoundsOrderByInput): [FundingRound!]!
  }

input OrganizationOrderByInput {
  name: Sort
  description: Sort
}

input FundingRoundsOrderByInput {
  name: Sort
  amount: Sort
  createdAt: Sort
  organization: OrganizationOrderByInput
}

enum Sort {
  asc
  desc
}

type PaginatedOrganizations {
  items: [Organization!]!
  totalCount: Int!
}

  type Query {
    fundingRounds(offset: Int, limit: Int, orderBy: FundingRoundsOrderByInput): [FundingRound!]
    organizations(offset: Int, limit: Int, orderBy: OrganizationOrderByInput, filter: String): PaginatedOrganizations!
  }
`;
