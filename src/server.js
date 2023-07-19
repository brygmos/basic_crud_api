import { createServer } from 'node:http';
import userController from "./controllers/userController.js"

export default function startServer () {
    const server = createServer((req, res) => {
    const { method, url } = req;
    if (url.startsWith('/api/users')) {
        userController.getData(req, res) 
    }
    else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end('invalid urlll')
    }
})

server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));
}