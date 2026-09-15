import { registerUser, loginUser } from "../services/userService.js";
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

};


export const logUserIn = async (req, res) =>{

    try{
        // call the service to authenticate the use and issue a token
        
        const {user, token} = await loginUser(req.body);
        console.log(req.body)
        return res.status(200).json({"message": "login successfull", user, token});
    }catch(err){
        if (err.message === "Invalid email or password"){
            return res.status(401).json({error: err.message})
        }
        console.error(err);
        return res.status(500).json({error: err.message})
    }

}



