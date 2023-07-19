import User from "../models/User.js";

let db = [{id: '111', username: 'fgfgfgfg', hobbies: ['hh', 'hfdg']}];

const user = new User('brygmos', 25, ['biking', 'hiking']);
db.push(user)

export default db