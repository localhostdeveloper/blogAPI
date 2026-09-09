import User from "../database/model/userModel.js";



// find user ID;

export const findUserById = async (id)=>{
    // find user by Primary Key
    return await User.findByPk(id)
};


// find User by username;
export const findUserByUsername = async (username)=>{
    return await User.findOne({where: {username: username}})
};


// find user by email

export const findUserByEmail = async (email)=>{

    return User.findOne({where: {email: email}})
}


// create new user

export const createUser = async (data)=>{

    return await User.create(data)
}