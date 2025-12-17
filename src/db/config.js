import dotenv from 'dotenv/config'
import { Client } from "pg";

const client = new Client({
    host : process.env.PG_HOST,
    port : Number(process.env.PG_PORT),
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    database : process.env.PG_DATABASE
}) 

export {client as DB}