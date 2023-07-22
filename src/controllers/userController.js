import { getUserId, trimEndSlash } from '../helpers/urlEndpoints.js';
import User from '../models/User.js';
import { userRoutes } from '../routes/usersRoutes.js';
import userService from '../services/usersService.js';

export default class userController {
    static getData (req, res) {
        const { method, url } = req;
        const urlTrimmed = trimEndSlash(url)
        const userId = getUserId(url)
        const router = new userRoutes(undefined, userId)
        const route = router.getRoute(userId, method, urlTrimmed)
        route ? (res.writeHead(200, { 'Content-Type': 'application/json' }), res.end(route.service(userId)))
        : (res.writeHead(400, { 'Content-Type': 'application/json' }), res.end('invalid urrrrrrrl'));
    }
    static postData (req, res) {
        let body = '';

        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', () => {
            try {
              const parsedData = JSON.parse(body);
              const serviceRes = userService.postUser(parsedData.username, parsedData.age, [...parsedData.hobbies] )
              res.statusCode = 201;
              res.setHeader('Content-Type', 'application/json');
              res.end(serviceRes);
            } catch (error) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: error.message }));
            }
        });
        
    }
}