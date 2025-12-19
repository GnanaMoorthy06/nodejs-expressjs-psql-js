import {DB} from '../db/config.js';
import * as models from './userModel.js';

export const registerUserService = async (name, email, hashedPassword) => {
    // try {
        const result = await DB.query(models.registerModel, [name, email, hashedPassword]);
        console.log("result", result.rows);
        return result.rows;
    // } catch (error) {
    //     next(error);   
    // }
    // Logic to register a new user in the database
    
};

export const loginUserService = async (email, password) => {
    // Logic to authenticate user
    const result = await DB.query(models.loginModel, [email, password]);
    if (result.rows.length === 0) {
        throw new Error('Invalid email or password');
    }   
    return result.rows[0];
};

export const getCurrentUserService = async (userId) => {
    // Logic to get current user info
    const result = await DB.query(models.getCurrentUserModel, [userId]);
    if (result.rows.length === 0) {
        throw new Error('User not found');
    }
    return result.rows[0];
};


export const getUserByEmail = async (email) => {
    const result = await DB.query(models.getUserByEmailModel, [email]);
    
    return result.rows[0];
}