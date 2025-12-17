import * as contactService from "../service/contactService.js";
import { responseHandler } from "../commonFunction/responsehandler.js";

//@desc Get all contacts
//@route GET /api/getContacts
//@access public 
const getAllContactscontroller = async (req, res) => {

    try {
        const data = await contactService.getAllUsersService();
        responseHandler(res, 200, `data fetched successfully`, data);
    } catch (error) {
        next(error);
    }
};


//@desc Get contact by ID
//@route GET /api/getContact/:id
//@access public
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
//@access public
const createContactcontroller = async (req, res) => {
try {
     const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory!");
    }
    const data = await contactService.createUserService(name, email, password);
    responseHandler(res, 200, `New contact created`, data)
} catch (error) {
    next(error);
}
   
};

//@desc Update contact by ID
//@route PUT /api/updateContact/:id
//@access public
const updateContactcontroller = async (req, res) => {
   try {
       const { name, email } = req.body;
       if (!name || !email) {
           res.status(400)
           throw new Error("All fields are mandatory!");
       }
       const data = await contactService.updateUserService(req.params.id, name, email);
       responseHandler(res, 200, `Contact updated in ${req.params.id}`, data);
   } catch (error) {
       next(error);
   }

};

//@desc Delete contact by ID
//@route DELETE /api/deleteContact/:id
//@access public
const deleteContactcontroller = async (req, res) => {

    try {
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