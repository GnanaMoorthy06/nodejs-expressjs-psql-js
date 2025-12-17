import Express from 'express';
const router = Express.Router();
import { getAllContacts,
        getContactById,
        createContact,
        updateContact,
        deleteContact } from '../controllers/contactController.js';

router.route('/').get(getAllContacts).post(createContact);
router.route('/:id').get(getContactById).put(updateContact).delete(deleteContact);

export default router;