// IMPORT MODULES
import { Server } from './server';
import dotenv from 'dotenv';


// INITIALIZATION
const app: Server = new Server();
dotenv.config();


// DATABASE CONNECTION
import db from './database';
db();


// START THE SERVER
app.start();