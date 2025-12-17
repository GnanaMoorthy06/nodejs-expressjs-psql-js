import express from 'express';
import dotenv from 'dotenv/config'; 
import router from './routes/router.js';
import errHandler from './middleware/errHandler.js';
import { DB } from './db/config.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// router setup would go here
app.use('/api/contact/', router);

// middleware for error handling would go here
app.use(errHandler);

const PORT = process.env.PORT || 5000;

//connect db
DB.connect().then(()=>{
    console.log('\x1b[31m%s\x1b[0m',`Database connected successfully`);
    //start server
    app.listen(PORT , ()=>{
    console.log('\x1b[31m%s\x1b[0m', `server running in PORT http://localhost:${PORT}`)
})
}).catch((err)=>{
    console.log('\x1b[31m%s\x1b[0m','Err while connecting to Database',err);
    
})