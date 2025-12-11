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



















**/