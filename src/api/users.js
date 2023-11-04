import axios from "./axios";

export const getUsersRequest = async () => axios.get("/users");

export const getUserRequest = async (id) => axios.get(`/users/${id}`);

export const updateUserRequest = async (user) => axios.put(`/users/${user._id}`, user);

export const deleteUserRequest = async (id) => axios.delete(`/users/${id}`);