import db from '../db/index.js';
import { isUniqueUsername } from '../helpers/db.js';
import User from '../models/User.js';

export default class userService {
    static getUsers () {
        return JSON.stringify(db)
    }
    static getUser (id) {
        const user = db.find((user) => {return user.id === id})
        return user ? JSON.stringify(user) : 'no user'
    }
    static postUser (username, age, hobbies) {
        const user = new User(username, age, hobbies)
        const id = user.getId()
        if (!username) {
            throw new Error('username is required');
        }
        if (!isUniqueUsername(username)) {
            throw new Error('username is already used');
        }
        db.push(user)
        const createdUser = this.getUser(id)
        return createdUser ? createdUser : new Error('unsuccess')
    }
}