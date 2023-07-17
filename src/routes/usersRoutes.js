// import { getUsers, getUser } from '../controllers/userController'

export const usersRoutes = [
    {
        endpoint: '/api/users',
        method: 'GET',
        controller: getUsers
    },
    {
        endpoint: '/api/users',
        method: 'GET',
        controller: getUser
    }
]