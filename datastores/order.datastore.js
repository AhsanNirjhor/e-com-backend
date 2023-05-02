import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async(userId,address,contact,discount,deliveryFee,orderItems) => {
    await prisma.$connect();
    const order = await prisma.order.create({
        data : {
            userId,
            address,
            contact,
            discount,
            deliveryFee,
        },
    });
    for(let i =0;i<orderItems.length;i++){
        const orderitem = await prisma.orderItem.create({
            data: {
                quantity:orderItems[i].quantity,
                price:orderItems[i].price,
                orderId:orderItems[i].orderId,
                productId:orderItems[i].productId,

            },
        });
    }
    prisma.$disconnect();
    return order;
};
export const getAllOrders = async () => {
    await prisma.$connect();
    const orders = await prisma.order.findMany();
    prisma.$disconnect();
    return orders;
};
export const getOrderById = async (id) => {
    await prisma.$connect();
    const Order = await prisma.order.findUnique({
      where: {
        id,
      },
    });
    prisma.$disconnect();
    return Order;
  };
  export const getOrderByUserId = async (userId) => {
    await prisma.$connect();
    const Order = await prisma.order.findMany({
      where: {
        userId,
      },
    });
    prisma.$disconnect();
    return Order;
  };