import { config } from "dotenv";
import { findUserById, findUserByUsername, createUser, findUserByEmail } from "../repositories/userRepositories.js";
import jwt from "jsonwebtoken"

import bcrypt from "bcryptjs";
config()
// sanitize new user

const sanitizeUser = (user) =>({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username : user.username,
    email: user.email,
    createdAt : user.createdAt
})


export const registerUser = async ({firstName, lastName, password, username, email})=>{


    // check if the user & username exist in the database 

    const isEmailExist = await findUserByEmail(email);
    const isUserNameExist = await findUserByUsername(username);


    if (isEmailExist){
        throw new Error("Email already Exist");
    }

    if (isUserNameExist){
        throw new Error ("Username Already Exist")
    }

// hash the password
const SALT_ROUND = 10;
const hashedpassword = await bcrypt.hash(password, SALT_ROUND)


    const userNewUser = await createUser({firstName, lastName, email, username, password:hashedpassword})



    // return sanitized value
    return sanitizeUser(userNewUser)

}


// login logic 

export const loginUser = async({email, password}) =>{
 const {JWT_SECRET} = process.env;

    const user = await findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))){
        throw new Error("Invalid email or password")
    }


    const token = jwt.sign(
        {id: user.id, username: user.username,  email: user.email},
        JWT_SECRET,
        {expiresIn: "1d"} )


        return {user: sanitizeUser(user), token}
};


export const logUserOut = async(req, res) =>{




}