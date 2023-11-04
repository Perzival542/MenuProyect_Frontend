import { z } from "zod";

export const menuImageSchema = z.object({
    title: z
    .string({
        required_error: "Menu image title is required",
    }),
    image: z
    .instanceof(Buffer)
    .refine(value => value.lenght >= 1, {
        message: "Menu image is required",
    }),
});

export const createMenuSchema = z.object({
    menu_name: z
        .string({
            required_error: "Name of the menu is required"
        })
        .min(1),
    menu_state: z
        .enum(["In Stock", "Sold Out"])
        .default("In Stock"),
    menu_price: z
        .number()
        .default(0.0),
    menu_detail: z
        .string({
            required_error: "Menu Description is required"
        })
        .min(1),
    menu_category: z
        .enum(['entrada', 'principal', 'postre', 'bebida']),
    menu_img: menuImageSchema
})