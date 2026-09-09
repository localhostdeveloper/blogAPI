import { registerUser } from "../services/userService.js";
import { createUserSchema } from "../schemas/userSchema.js";

// register for user registration 

export const register = async (req, res)=>{

// validate request body

const result = await createUserSchema.safeParseAsync(req.body)
    console.log("method:", req.method)
    if (!result.success){
        console.log(result.error)
        return res.status(400).json({error: result.error.message})
    }

    try{
        const createdUser = await registerUser(result.data)   
        return res.status(201).json({createdUser})
    }
    catch(err){
           return  res.status(500).json({error: err.message})
    }

}