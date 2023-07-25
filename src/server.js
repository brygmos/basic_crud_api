import { createServer } from 'node:http';
import userController from "./controllers/userController.js"

export default function startServer () {
    const server = createServer((req, res) => {
    const { method, url } = req;

    if (url.startsWith('/api/users')) {
        switch (method) {
            case 'GET': return userController.getData(req, res);
            case 'POST': return userController.postData(req, res);
            case 'PUT': return userController.putData(req, res);
            case 'DELETE': return userController.deleteData(req, res);
            default: break;
        }
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end('invalid url')
    }
})

server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));
}