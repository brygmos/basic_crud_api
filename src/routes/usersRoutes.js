import userController from "../controllers/userController.js"

const controller = new userController

export const usersRoutes = [
    {
        endpoint: '/api/users',
        method: 'GET',
        controller: controller.getData
    },
    {
        endpoint: '/api/users/',
        method: 'GET',
        controller: controller.getData
    },
    // {
    //     endpoint: '/api/users/',
    //     method: 'POST',
    //     controller: createUser
    // },
    
]