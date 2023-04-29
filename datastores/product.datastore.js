import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async(name, price, discount, pictureUrl,description, categoryId)=>{
    await prisma.$connect();
    const product = await prisma.product.create({
        data: {
            name,
            price,
            discount,
            pictureUrl,
            description,
            categoryId,
        },
    });
    prisma.$disconnect();
    return product;
};
export const getAllProducts = async () => {
    await prisma.$connect();
    const products = await prisma.product.findMany();
    prisma.$disconnect();
    return products;
};
export const getProductById = async (id) => {
    await prisma.$connect();
    const Product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    prisma.$disconnect();
    return Product;
  };

export const getProductsByCategoryId = async(id) => {
    await prisma.$connect();
    const Products = await prisma.product.findMany({
        where: {
            categoryId : id,
        },
    });
    prisma.$disconnect();
    return Products;
};