import db from '../db/index.js';

export function isUniqueUsername(username) {
    return !db.some(user => user.username === username);
}