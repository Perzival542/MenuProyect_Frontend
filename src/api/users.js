import axios from "./axios";

export const getUsersRequest = async () => axios.get("/users");

export const updateUserRequest = async (user) => axios.put(`/users/${user._id}`, user);

export const deleteUserRequest = async (user) => axios.delete(`/users/${user._id}`);

export const getUserRequest = async (user) => axios.get(`/users/${user._id}`);