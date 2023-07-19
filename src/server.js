import { createServer } from 'node:http';
import userController from "./controllers/userController.js"
import { usersRoutes } from './routes/usersRoutes.js';

export default function startServer () {
    const server = createServer((req, res) => {
    const { method, url } = req;
    const controller = new userController

    // const route = usersRoutes.find((route) => {return route.endpoint === url})
    const route = usersRoutes.find((route) => {return url.startsWith(route.endpoint)})
    if (url.startsWith('/api/users')) {
        controller.getData(req, res) 
    }
    else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end('invalid url')
    }

//     if (url.startsWith('/api/users/') && method === 'GET') {
//         let urlLength = url.length;
//         const id = url.slice(11)
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(getUser(id))
//     } else {
//     	res.statusCode=404;
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//       	res.end('Invalid URL');  
//    }


//     if (url === '/api/users' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(getUsers())
//     }
//     if (url.startsWith('/api/users/') && method === 'GET') {
//         let urlLength = url.length;
//         const id = url.slice(11)
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(getUser(id))
//     } else {
//     	res.statusCode=404;
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//       	res.end('Invalid URL');  
//    }
})

server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));
}