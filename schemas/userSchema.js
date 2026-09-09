import * as zod from "zod";



export const createUserSchema = zod.object({
   firstName : zod.string().min(1).trim(),
   lastName:  zod.string().min(1).trim(),
   email: zod.email().trim(),
   password: zod.string().min(6),
   username: zod.string().trim()

})


export const logInUserSchema = zod.object({
    email: zod.email().trim(),
    password: zod.string().trim()
})