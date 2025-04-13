import { PrismaClient } from './generated';

const prisma = new PrismaClient();

export const intializeDb = async () => {
  await prisma.$connect();
};

export const shutdownDb = async () => {
  await prisma.$disconnect();
};

export default prisma;
