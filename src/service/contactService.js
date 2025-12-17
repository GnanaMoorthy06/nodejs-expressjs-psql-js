import { DB } from "../db/config.js";
import * as models from "./contactmodel.js";

export const getAllUsersService = async () => {
        const getAllUsers = await DB.query(models.getAllUsersModel);
        return getAllUsers.rows
}

export const getUsersbyIdService = async (id) => {
        const getUsersbyId = await DB.query(models.getUsersbyIdModel, [id]);
        return getUsersbyId.rows
}

export const createUserService = async (name, email, password) => {
        const createUser = await DB.query(models.createUsersModel, [name, email, password]);
        return createUser.rows
}

export const updateUserService = async (id, name, email) => {
        const updateUsers = await DB.query(models.updateUsersModel, [name, email, id]);
        return updateUsers.rows
}

export const deleteUserByIdService = async (id) => {
        const deleteUserById = await DB.query(models.deleteUserByIdModel, [id]);
        return deleteUserById.rows
}