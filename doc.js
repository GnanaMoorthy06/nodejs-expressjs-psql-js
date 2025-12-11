/* 


welcome to the back end dev club. here you can learn the nodejs....

frame work : express js
database   : postgreSQL
language   : JavaScript


Topics 
--------------------------------------------

Note : you can see the code in related branch

1. Node/express setup
2. Express server
3. Express router
4. Error handling / async handler
5. Express middleware
6. postgreSQL setup
7. CRUD api
8. Authentication
9. register/login api
10. controller / DB operation
11. password hashing / comparing
12. sign / verify jwt 
13. protected route
14. user authorization
15. api testing 
16. email
17. document / img upload
18

project concept : contact manager app

api action          :    HTTP method           :      api endpoint
---------------------------------------------------------------------------
get all contact     :    GET                   :      /api/contacts 
get  contact        :    GET                   :      /api/contacts/:id
create contact      :    POST                  :      /api/contacts
update contact      :    PUT                   :      /api/contacts/:id
delete contact      :    DELETE                :      /api/contacts/:id

Node/express setup
------------------

install nodejs
download vscode
create folder => open vscode
open terminal enter : npm init -y 
now you can see the package.json file in this folder
then create .gitignore file => /node_modules .env
then create index.js file => console.log("hello world")
go to terminal : npm install express
go to terminal : npm install -D nodemon
now you can see the package-lock.json and node_modules file in this folder
open package.json file => add "start" : "node index.js" and "dev" : "nodemon index.js" inside the script
go to terminal : npm run dev
now you can see the hello world in terminal

Express server
----------------
go to terminal : npm install dotenv
create .env file => PORT=5000
go to index.js file and write the code below

code start of index.js file --------------------

import express from 'express';

import dotenv from 'dotenv/config';

const app = express();

app.get('/api/check', (req, res) => {
    res.status(200).json({ message: "API is running..." });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('\x1b[31m%s\x1b[0m',`Server running on port ${PORT}`);
});

code end of index.js file --------------------

go to terminal : npm run dev
now you can see the Server running on port ${PORT} message in terminal
open postman software => GET method => http://localhost:5000/api/check => send
you can see the message in postman => { "message": "API is running..." }


Express router
----------------
create a folder in src named routes
create router.js file in routes folder and write the code below

start of router.js file code --------------------

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

end of router.js file code --------------------

go to index.js file and import the router file and use the router middleware

like below

import router from './routes/router.js';

app.use('/', router);

now you can test all the api endpoints in postman

get all contact     :    GET                   :      /api/getContacts
get  contact        :    GET                   :      /api/getContact/:id
create contact      :    POST                  :      /api/createContact
update contact      :    PUT                   :      /api/updateContact/:id
delete contact      :    DELETE                :      /api/deleteContact/:id


**/