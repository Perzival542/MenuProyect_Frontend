import axios from "./axios";

export const getOrdersRequest = async () => axios.get("/orders");

export const createOrderRequest = async (order) => axios.post("/orders", order);

export const updateOrderRequest = async (order) => axios.put(`/orders/${order._id}`, order);

export const deleteOrderRequest = async (order) => axios.delete(`/orders/${order._id}`);

export const getOrderRequest = async (order) => axios.get(`/orders/${order._id}`);