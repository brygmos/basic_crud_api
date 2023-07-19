import { config } from 'dotenv'
config();
import { createServer } from 'node:http';
import db from './db/index.js';
import userController from "./controllers/userController.js"
import {v4 as uuidv4} from 'uuid'
import User from './models/User.js';
import startServer from './server.js';

startServer()