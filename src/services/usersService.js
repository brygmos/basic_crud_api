import db from '../db/index.js';
import { isUniqueUsername } from '../helpers/db.js';
import User from '../models/User.js';

export default class userService {
    static getUsers () {
        return JSON.stringify(db)
    }
    static getUser (id) {
        const user = db.find((user) => {return user.id === id})
        return user ? user : 'no user'
        // return user ? JSON.stringify(user) : 'no user'
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
    static putUser (id, username, age, hobbies) {
        const user = this.getUser(id)
        if (!isUniqueUsername(username)) {
            throw new Error('username is already used')
        }
        username && (user.username = username); 
        age && (user.age = age);
        hobbies && (user.hobbies = hobbies);
        if (user == 'no user') {
            throw new Error('no user');
        }
        const createdUser = this.getUser(id)
        return createdUser ? createdUser : new Error('unsuccess')
    }
    static deleteUser (id) {
        let user = this.getUser(id)
        if (user == 'no user') {
            throw new Error('no user with such ID');
        }
        const index = db.findIndex((user) => {return user.id === id})
        if (index !== -1) {
            db.splice(index, 1);
        }
        user = this.getUser(id)
        return user == 'no user' ? `user with id ${id} removed successfully` : new Error('unsuccess')
    }
}