const dotenv = require('dotenv')
dotenv.config();

// import { createServer } from 'node:http';
const app = require('node:http');
// import db from './db/index';
// import userController from "./controllers/userController"
const { v4: uuidv4 } = require('uuid');

class User {
    constructor(username, age, hobbies){
        this.id = uuidv4(),
        this.username = username,
        this.age = age,
        this.hobbies = hobbies
    }
}

let db = [{id: '111', username: 'fgfgfgfg', hobbies: ['hh', 'hfdg']}];

const user = new User('brygmos', 25, ['biking', 'hiking']);
db.push(user)

function userController (url, method, id) {
    const getUsers = () => {
        return JSON.stringify(db)
    }
    
    const getUser = (id) => {
        // console.log('this', id)
        let result = db.find((user) => {return user.id == id})
        // console.log(result)
        if (result) return JSON.stringify(result)
        return `no user with id ${id}`
    }

    return {getUsers, getUser}
}

const server = app.createServer((req, res) => {
    const { method, url } = req;
    let {getUsers, getUser} = userController(url, method);
    if (url === '/api/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(getUsers())
    } else if (url.startsWith('/api/users/') && method === 'GET') {
        let urlLength = url.length;
        const id = url.slice(11)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(getUser(id))
    } else {
    	res.statusCode=404;
        res.writeHead(404, { 'Content-Type': 'text/plain' });
      	res.end('Invalid URL');  
   }
})

server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));