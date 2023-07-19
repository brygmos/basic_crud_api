import { getUserId, trimEndSlash } from '../helpers/urlEndpoints.js';
import { userRoutes } from '../routes/usersRoutes.js';

export default class userController {
    static getData (req, res) {
        const { method, url } = req;
        const urlTrimmed = trimEndSlash(url)
        const userId = getUserId(url)
        const router = new userRoutes(undefined, userId)
        const route = router.getRoute(userId, method, urlTrimmed)
        route ? (res.writeHead(400, { 'Content-Type': 'application/json' }), res.end(route.service(userId))) 
        : (res.writeHead(400, { 'Content-Type': 'application/json' }), res.end('invalid urrrrrrrl'));
    }
}