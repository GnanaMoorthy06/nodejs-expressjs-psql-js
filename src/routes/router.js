import Express from 'express';
const router = Express.Router();
import * as contactController  from '../controllers/contactController.js';

router.route('/').get(contactController.getAllContacts).post(contactController.createContact);
router.route('/:id').get(contactController.getContactById).put(contactController.updateContact).delete(contactController.deleteContact);

export default router;