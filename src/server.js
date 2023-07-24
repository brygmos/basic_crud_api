import { createServer } from 'node:http';
import userController from "./controllers/userController.js"

export default function startServer () {
    const server = createServer((req, res) => {
    const { method, url } = req;
    if (url.startsWith('/api/users') && method == 'GET') {
        userController.getData(req, res) 
    } else if (url.startsWith('/api/users') && method == 'POST') {
        userController.postData(req, res) 
    } else if (url.startsWith('/api/users') && method == 'PUT') {
        userController.putData(req, res) 
    } else if (url.startsWith('/api/users') && method == 'DELETE') {
        userController.deleteData(req, res) 
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end('invalid urlll')
    }
})

server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));
}