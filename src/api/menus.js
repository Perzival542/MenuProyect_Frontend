import axios from "./axios";

export const getMenusRequest = async () => axios.get("/menus");

export const createMenuRequest = async (menu) => axios.post("/menus", menu);

export const updateMenuRequest = async (menu) => axios.put(`/menus/${menu._id}`, menu);

export const deleteMenuRequest = async (menu) => axios.delete(`/menus/${menu._id}`);

export const getMenuRequest = async (menu) => axios.get(`/menus/${menu._id}`);