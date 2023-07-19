import {v4 as uuidv4} from 'uuid'

export default class User {
    constructor(username, age = null, hobbies = null){
        this.id = uuidv4(),
        this.username = username,
        this.age = age,
        this.hobbies = hobbies
    }
}