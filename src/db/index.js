import User from "../models/User";

let db = [{id: '111', username: 'fgfgfgfg', hobbies: ['hh', 'hfdg']}];

const user = new User('brygmos', 25, ['biking', 'hiking']);
db.push(user)

// console.log(db);

export default db