export function isSingleUser(url) {
    const path = url.split('/')
    if (path[1] == 'users' && path[2] == '') return false
    return true
}

export function getUserId(url) {
    const path = url.split('/')
    if (path[2] == 'users' && path[3] && path[3].length > 1) return path[3];
    return null
}