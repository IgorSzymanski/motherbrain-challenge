import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Sort = 'asc' | 'desc';

type FundingRoundOrderBy = {
  name?: Sort;
  amount?: Sort;
  createdAt?: Sort;
}

type OrganizationOrderBy = {
  name?: Sort;
  description?: Sort;
}

type FundingRoundArguments = {
  offset?: number;
  limit?: number;
  orderBy?: FundingRoundOrderBy & {
    organization?: OrganizationOrderBy
  }
}

type OrganizationArguments = {
  offset?: number;
  limit?: number;
  orderBy?: OrganizationOrderBy
  filter?: string
}

export const resolvers = {
  FundingRound: {
    organization: async (parent: { organizationId: string }) => {
      const organization = await prisma.organization.findUnique({
        where: {
          id: parent.organizationId,
        },
      });

      return organization;
    }
  },
  Organization: {
    fundingRounds: async (parent: { id: string }, { orderBy }: FundingRoundArguments) => {
      const fundingRounds = await prisma.fundingRound.findMany({
        where: {
          organizationId: parent.id,
        },
        orderBy,
      });

      return fundingRounds;
    }
  },
  Query: {
    fundingRounds: async (_parent: unknown, { offset = 0, limit = 20, orderBy }: FundingRoundArguments) => {
      const fundingRounds = await prisma.fundingRound.findMany({
        take: limit,
        skip: offset,
        orderBy,
      });

      return fundingRounds;
    },
    organizations: async (_parent: unknown, { offset = 0, limit = 20, orderBy, filter }: OrganizationArguments) => {

      const where = filter
        ? {
            OR: [
              { name: { contains: filter } },
              { description: { contains: filter } },
              {
                fundingRounds: {
                  some: {
                    name: { contains: filter },
                  },
                },
              },
            ]
          }
        : undefined;

      const organizations = await prisma.organization.findMany({
        take: limit,
        skip: offset,
        orderBy,
        where,
      });

      return {
        items: organizations,
        totalCount: await prisma.organization.count({
          where,
        }),
      }
    }
  },
};
