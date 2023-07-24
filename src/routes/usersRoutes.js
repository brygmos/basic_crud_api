import userService from "../services/usersService.js";
import { getUserId } from '../helpers/urlEndpoints.js';

export class userRoutes {
    constructor(routes, userId) {
        this.userId = userId
        this.routes  = [
            {
            endpoint: '/api/users',
            method: 'GET',
            service: userService.getUsers
            },
            {
                endpoint: '/api/users',
                method: 'POST',
                service: userService.postUser
            },
            {
                endpoint: `/api/users/${userId}`,
                method: 'GET',
                service: userService.getUser
            },
            {
                endpoint: `/api/users/${userId}`,
                method: 'PUT',
                service: userService.putUser
            },
        ]
    }
    getRoute (id, method, url) {
        const userId = getUserId(url)
        let targetRoute = this.routes
        targetRoute = this.routes.find(route => {
            return route.method == method && route.endpoint === url
        })
        return targetRoute ? targetRoute : null
    }
}