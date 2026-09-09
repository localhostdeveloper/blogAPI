import { logInUserSchema, createUserSchema } from "../schemas/userSchema.js";

import { findUserById, findUserByUsername, createUser, findUserByEmail } from "../repositories/userRepositories.js";

import bcrypt from "bcryptjs";

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