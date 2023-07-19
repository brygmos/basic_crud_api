import db from '../db/index.js';
import { config } from 'dotenv'
config();

export default class userService {
    getUsers (req, res) {
        // const { method, url } = req;
        // if (url === '/api/users' && method === 'GET') {
        //     res.writeHead(200, { 'Content-Type': 'application/json' });
        //     res.end(JSON.stringify(db))
        // }
        // return 'null'
        return JSON.stringify(db)
    }
    getUser (id) {
        const user = db.find((user) => {return user.id === id})
        return user ? JSON.stringify(user) : 'no user'
        // const { method, url } = req;
        // if (url.startsWith('/api/users/') && method === 'GET') {
        //     let urlLength = url.length;
        //     const id = url.slice(11)
        //     res.writeHead(200, { 'Content-Type': 'application/json' });
        //     res.end(getUser(id))
        // }
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