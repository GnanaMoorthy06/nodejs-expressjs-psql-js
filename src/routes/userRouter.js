import * as express from 'express';
const router = express.Router();
import * as userController from '../controllers/userController.js'; 
import verifyToken from '../middleware/verifyToken.js';

router.route('/register').post(userController.registerUserController);
router.route('/login').post(userController.loginUserController);
router.route('/current').get(verifyToken, userController.getCurrentUser);

export default router;