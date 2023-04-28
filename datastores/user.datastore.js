import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (name, email, password, address) => {
  await prisma.$connect();
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      address,
    },
  });
  prisma.$disconnect();
  return user;
};

export const getAllUsers = async () => {
  await prisma.$connect();
  const users = await prisma.user.findMany();
  prisma.$disconnect();
  return users;
};

export const getUserById = async (id) => {
  await prisma.$connect();
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  prisma.$disconnect();
  return user;
};
