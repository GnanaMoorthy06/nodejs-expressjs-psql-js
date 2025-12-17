import { DB } from "../db/config.js";
import { createUsersModel, deleteUserByIdModel, getAllUsersModel, getUsersbyIdModel, updateUsersModel } from "./contactmodel.js";

export const getAllUsersService = async() =>{
    console.log("getAllUsersService called");
    
        const getAllUsers =await DB.query(getAllUsersModel);
        console.log('getAllUsersService - Data from DB:', getAllUsers.rows);
        
        return getAllUsers.rows
}

export const getUsersbyIdService = async(id) =>{
        const getUsersbyId =await DB.query(getUsersbyIdModel,[id]);
        return getUsersbyId.rows[0]
}

export const createUserService = async(name , email , password) =>{
        const createUser =await DB.query(createUsersModel,[name , email , password]);
        return createUser.rows
}

export const updateUserService = async(id ,name , email ) =>{
        const updateUsers =await DB.query(updateUsersModel,[name , email , id]);
        console.log(updateUsers.rows);
        
        return updateUsers.rows[0]
}

export const deleteUserByIdService = async(id) =>{
        const deleteUserById =await DB.query(deleteUserByIdModel,[id]);
        return deleteUserById.rows
}