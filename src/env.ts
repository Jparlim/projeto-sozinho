import z from "zod";

export const confirm = z.object({
    DATABASE_URL: z.string().url()
})

export const env = confirm.parse(process.env)