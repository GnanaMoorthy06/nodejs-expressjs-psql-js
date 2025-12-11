import express from 'express';
import dotenv from 'dotenv/config'; 
import router from './routes/router.js';

const app = express();

// router setup would go here
app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('\x1b[31m%s\x1b[0m',`Server running on port ${PORT}`);
});
