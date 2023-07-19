import db from '../db/index.js';
import { config } from 'dotenv'
import userService from '../services/usersService.js';
import { getUserId } from '../helpers/urlEndpoints.js';
config();

const service = new userService;

export default class userController {
    getData (req, res) {
        const { method, url } = req;
        const userId = getUserId(url)
        if ((url === '/api/users' || url === '/api/users/') && method === 'GET' && !userId) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(service.getUsers())
        } else if (url.startsWith('/api/users') && method === 'GET' && userId) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(service.getUser(userId))
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end('invalid url')
        }
    }
    getUsers (req, res) {
        const { method, url } = req;
        if (url === '/api/users' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(service.getUsers())
        }
    }
    getUser (req, res) {
        const { method, url } = req;
        if (url.startsWith('/api/users/') && method === 'GET') {
            let urlLength = url.length;
            const id = url.slice(11)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(service.getUser(id))
        }
    }
}

// export default function userController (url, method, id) {
//     const getUsers = () => {
//         return JSON.stringify(db)
//     }
    
//     const getUser = (id) => {
//         console.log('this', id)
//         let result = db.find((user) => {return user.id == id})
//         console.log(result)
//         if (result) return result
//         return `no user with id ${id}`
//     }

//     return {getUsers, getUser}
// }