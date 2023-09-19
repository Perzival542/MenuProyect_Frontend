import { z } from "zod";
//import User  from "../models/user.model.js";
//import Menu  from "../models/menu.model.js";

export const createOrderSchema = z.object({
    userId: z
        .string({
            required_error: "User Id is required"
        }),
    date: z
        .date()
        .default(() => new Date()),
    menuId: z
        .string({
            required_error: "Menu Id is required"
        }),
    order_status: z
    .enum(["Ready", "Cooking", "On hold"])
    .default("On hold"),
});