import { z } from "zod";

export const registrationSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters long!"),
    email: z.string().email("Invalid email address!"),
    password: z.string().min(8, "Password must be at least 8 characters long!") 
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email address!"),
    password: z.string().min(8, "Password must be at least 8 characters long!") 
});