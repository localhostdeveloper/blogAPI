import { registerUser } from "../services/userService.js";
import { createUserSchema } from "../schemas/userSchema.js";

// register for user registration 

export const register = async (req, res)=>{

// validate request body

    
    try{
        const createdUser = await registerUser(req.body)   
        return res.status(201).json({"message": "User created successfully", "User": createdUser})
    }
    catch(err){
           return  res.status(500).json({error: err.message})
    }

}