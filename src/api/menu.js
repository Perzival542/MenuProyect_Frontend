import axios from "./axios";

export const getMenusRequest = async () => axios.get("/menus");

export const createMenuRequest = async (menu) => axios.post("/menus", menu);

export const updateMenuRequest = async (menu) => axios.put(`/menus/${menu._id}`, menu);

export const deleteMenuRequest = async (id) => axios.delete(`/menus/${id}`);

export const getMenuRequest = async (id) => axios.get(`/menus/${id}`);