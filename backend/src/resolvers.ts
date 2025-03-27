import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    fundingRounds: async () => {
      const fundingRounds = await prisma.fundingRound.findMany({
        take: 20,
      });

      return fundingRounds;
    },
  },
};
