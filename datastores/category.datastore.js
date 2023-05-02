import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategory = async(name,description,banner) =>{
    await prisma.$connect();
    const category = await prisma.category.create({
        data : {
            name,
            description,
            banner,
        },
    });
    prisma.$disconnect();
    return category;
};
export const getAllCategories = async () => {
    await prisma.$connect();
    const categories = await prisma.category.findMany();
    prisma.$disconnect();
    return categories;
};
export const getCategoryById = async (id) => {
    await prisma.$connect();
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    prisma.$disconnect();
    return category;
  };