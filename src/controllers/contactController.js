import * as contactService from "../service/contactService.js";
import { responseHandler } from "../commonFunction/responsehandler.js";
import errHandler from "../middleware/errHandler.js";

//@desc Get all contacts
//@route GET /api/getContacts
//@access private 
const getAllContactscontroller = async (req, res) => {

    try {
        const created_by = req.user.email;
        const data = await contactService.getAllUsersService(created_by);
        data.length === 0 ? responseHandler(res, 200, `No data found`, data) : responseHandler(res, 200, `data fetched successfully`, data);
    } catch (error) {
        next(error);
    }
};


//@desc Get contact by ID
//@route GET /api/getContact/:id
//@access private
const getContactByIdcontroller = async (req, res) => {

    try {
        const data = await contactService.getUsersbyIdService(req.params.id);
        if (data.length === 0) {
            res.status(404)
            throw new Error(`NO data found in ${req.params.id}`);
        }
        responseHandler(res, 200, `data fetched successfully`, data);
    } catch (error) {
        next(error);
    }
};

//@desc Create new contact
//@route POST /api/createContact
//@access private
const createContactcontroller = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const created_by = req.user.email;
        if (!name || !email || !phone) {
            res.status(400)
            throw new Error("All fields are mandatory!");
        }
        const data = await contactService.createUserService(name, email, phone, created_by);
        responseHandler(res, 201, `New contact created`, data)
    } catch (error) {
        next(error);
    }

};

//@desc Update contact by ID
//@route PUT /api/updateContact/:id
//@access private
const updateContactcontroller = async (req, res) => {
    try {
        console.log('inside update controller');
        
        const { name, email } = req.body;
        const created_by = req.user.email;
        if (!name || !email) {
            res.status(400)
            throw new Error("All fields are mandatory!");
        }
        const validUser = await contactService.getUsersbyIdService(req.params.id);

        if (validUser[0].created_by !== created_by) {
            res.status(403)
            throw new Error("You are not authorized to update this contact");
        }
        const data = await contactService.updateUserService(req.params.id, name, email);
        responseHandler(res, 200, `Contact updated in ${req.params.id}`, data);
    } catch (error) {
        errHandler(error, req, res);}

};

//@desc Delete contact by ID
//@route DELETE /api/deleteContact/:id
//@access private
const deleteContactcontroller = async (req, res) => {

    try {
        const created_by = req.user.email;
        const validUser = await contactService.getUsersbyIdService(req.params.id);

        if (validUser[0].created_by !== created_by) {
            res.status(403)
            throw new Error("You are not authorized to delete this contact");
        }
        const data = await contactService.deleteUserByIdService(req.params.id);
        responseHandler(res, 200, `Contact deleted in ${req.params.id}`, data);
    } catch (error) {
        next(error);
    }
};

export {
    getAllContactscontroller as getAllContacts,
    getContactByIdcontroller as getContactById,
    createContactcontroller as createContact,
    updateContactcontroller as updateContact,
    deleteContactcontroller as deleteContact
};