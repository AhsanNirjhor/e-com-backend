import { createOrder, getAllOrders, getOrderByUserId, getOrderById } from "../datastores/order.datastore";

export const createOrderController = async(req, res) => {
    const{userId, address, contact, discount, deliveryFee,orderItems} = req.body;
    if(!orderItems, !userId, !address, !deliveryFee, !contact){
        return res.status(400).null;
    }
    const order = await createOrder(userId, address, contact, discount, deliveryFee, orderItems)
    return res.status(201).json(order);
}

export const getAllOrdersController= async(req, res) => {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
}

export const getOrderByIdController = async(req, res) => {
    const id = parseInt(req.params.id);
    const order =await getOrderById(id);
    return res.status(200).json(order);
}

export const getOrderByUserIdController = async(req, res) => {
    const userId = req.params.userId;
    const order = await getOrderByUserId(userId);
    return res.status(200).json(order);
}