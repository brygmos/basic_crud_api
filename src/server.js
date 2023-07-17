import { createServer } from 'node:http';
import db from './db/index';
import userController from "./controllers/userController"

export const startServer = () => {
    const server = createServer((req, res) => {
    const { method, url } = req;
    let {getUsers, getUser} = userController(url, method);
    if (url === '/api/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(getUsers())
    }
    if (url.startsWith('/api/users/') && method === 'GET') {
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
}