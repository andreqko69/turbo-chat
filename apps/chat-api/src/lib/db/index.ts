import { prisma } from '@repo/database';

export const intializeDb = async () => {
  await prisma.$connect();
};

export const shutdownDb = async () => {
  await prisma.$disconnect();
};

export default prisma;
