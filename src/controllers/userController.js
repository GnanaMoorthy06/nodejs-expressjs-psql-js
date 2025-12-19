import * as bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userService from '../service/userService.js';
import { responseHandler } from "../commonFunction/responsehandler.js";
import errHandler from '../middleware/errHandler.js';

//@desc POST register new user
//@route POST /api/user/register
//@access public 
const registerUserController = async (req, res) => {


    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400);
            throw new Error("All fields are mandatory!");
        }

        // Check if user already exists
        const isUserExist = await userService.getUserByEmail(email);
        if (isUserExist) {
            res.status(400);
            throw new Error("User already exists!");
        }

        const hashedPassword = await bycrypt.hash(password, 10);
        const data = await userService.registerUserService(name, email, hashedPassword);
        responseHandler(res, 201, `User registered successfully`, data);
    } catch (error) {
        errHandler(error);
    }
};



//@desc POST login user
//@route POST /api/user/login
//@access public 
const loginUserController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            throw new Error("All fields are mandatory!");
        }
        const isUserExist = await userService.getUserByEmail(email);
        if (!isUserExist) {
            res.status(400);
            throw new Error("User does not exist!");
        }
        console.log(isUserExist, password);

        if (isUserExist && await bycrypt.compare(password, isUserExist.password)) {

            const token = jwt.sign({ email: isUserExist.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            responseHandler(res, 200, `User logged in successfully`, token);
        } else {
            res.status(401);
            throw new Error("Invalid credentials!");
        }

    } catch (error) {
        errHandler(error, req, res);
    }
};

//@desc GET current user info
1//@route GET /api/user/current
//@access private 
const getCurrentUser = async (req, res) => {
    try {
        const email = req.user.email;
        const data = await userService.getUserByEmail(email);

        responseHandler(res, 200, `Current user fetched successfully`, data);
    } catch (error) {
        errHandler(error, req, res);
    }
};
export { registerUserController, loginUserController, getCurrentUser };