import asyncHandler from "express-async-handler";
import { getAllUsersService , getUsersbyIdService , createUserService ,
            updateUserService , deleteUserByIdService
 } from "../service/contactService.js";
import { responseHandler } from "../commonFunction/responsehandler.js";

//@desc Get all contacts
//@route GET /api/getContacts
//@access public 
const getAllContactscontroller =asyncHandler( async (req, res) => {
    console.log("Get all contacts controller called");
    
    const data = await getAllUsersService();    
    console.log('Data from service:', data);
    
    responseHandler(res, 200, `data fetched successfully`, data);
})


//@desc Get contact by ID
//@route GET /api/getContact/:id
//@access public
const getContactByIdcontroller =asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` });
})

//@desc Create new contact
//@route POST /api/createContact
//@access public
const createContactcontroller =asyncHandler( async (req, res) => {
    console.log(`Request Body: `, req.body);
    const {name, email, phone} =  req.body;

    if(!name || !email || !phone) {
         res.status(400)
         throw new Error("All fields are mandatory!");
    }
    
    res.status(200).json({ message: `New contact created` });
})

//@desc Update contact by ID
//@route PUT /api/updateContact/:id
//@access public
const updateContactcontroller =asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Contact updated in ${req.params.id}` });
} )

//@desc Delete contact by ID
//@route DELETE /api/deleteContact/:id
//@access public
const deleteContactcontroller =asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Contact delete in ${req.params.id}` });
} )

export {
    getAllContactscontroller as getAllContacts,
    getContactByIdcontroller as getContactById,
    createContactcontroller as createContact,
    updateContactcontroller as updateContact,
    deleteContactcontroller as deleteContact
};