import db from '../db/index.js';

export default class userService {
    static getUsers () {
        return JSON.stringify(db)
    }
    static getUser (id) {
        const user = db.find((user) => {return user.id === id})
        return user ? JSON.stringify(user) : 'no user'
    }
}