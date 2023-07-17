const { default: db } = require('../db');
import { config } from 'dotenv'
config();

export default function userController (url, method, id) {
    const getUsers = () => {
        return JSON.stringify(db)
    }
    
    const getUser = (id) => {
        console.log('this', id)
        let result = db.find((user) => {return user.id == id})
        console.log(result)
        if (result) return result
        return `no user with id ${id}`
    }

    return {getUsers, getUser}
}