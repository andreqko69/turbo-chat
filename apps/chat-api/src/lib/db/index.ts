import { prisma } from '@repo/database';

export const intializeDb = async () => {
  await prisma.$connect();
  console.log('Database connected!');
};

export const shutdownDb = async () => {
  await prisma.$disconnect();
  console.log('Database disconnected!');
};

export default prisma;
