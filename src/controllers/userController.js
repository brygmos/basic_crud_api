import { getUserId, trimEndSlash } from '../helpers/urlEndpoints.js';
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
        : (res.writeHead(400, { 'Content-Type': 'application/json' }), res.end('no such API method or url'));
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
            res.end(JSON.stringify(serviceRes));
          } catch (error) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: error.message }));
          }
      });
    }

    static putData (req, res) {
      const { method, url } = req;
      const urlTrimmed = trimEndSlash(url)
      const userId = getUserId(urlTrimmed)

      let body = '';
      req.on('data', chunk => {
        body += chunk;
      });

      req.on('end', () => {
          try {
            const parsedData = JSON.parse(body);
            const serviceRes = userService.putUser(userId, parsedData.username, parsedData.age, [...parsedData.hobbies] )
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(serviceRes));
          } catch (error) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: error.message }));
          }
      }); 
    }

    static deleteData (req, res) {
      const { method, url } = req;
      const urlTrimmed = trimEndSlash(url)
      const userId = getUserId(urlTrimmed)
      try {
        const serviceRes = userService.deleteUser(userId)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(serviceRes));
      } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
      }
    }
}