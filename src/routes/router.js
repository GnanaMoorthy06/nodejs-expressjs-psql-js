import Express from 'express';
const router = Express.Router();

router.route('/api/getContacts').get((req, res) => {
    res.status(200).json({ message: `Get all contacts` });
});

router.route('/api/getContact/:id').get((req, res) => {
    res.status(200).json({ message: `Get all contact ${req.params.id}` });
});

router.route('/api/createContact').post((req, res) => {
    res.status(200).json({ message: `New contact created` });
});

router.route('/api/updateContact/:id').put((req, res) => {
    res.status(200).json({ message: `Contact updated in ${req.params.id}` });
});

router.route('/api/deleteContact/:id').delete((req, res) => {
    res.status(200).json({ message: `Contact delete in ${req.params.id}` });
});

export default router;