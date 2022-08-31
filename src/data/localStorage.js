export function saveToken(token) {
    return localStorage.setItem("token", "Bearer " + token);
}

export function saveUserName(data) {
    return localStorage.setItem("username", data);
}

export function savePassword(data) {
    return localStorage.setItem("password", data);
}

export function removeToken() {
    return localStorage.removeItem("token");
}

export function getToken() {
    return localStorage.getItem("token")
}

export function getUserName() {
    return localStorage.getItem("username")
}

export function getPassword() {
    return localStorage.getItem("password")
}
export function setPermissions(permissions) {
    return localStorage.setItem("permissions",permissions)
}
export function getPermissions() {
    return localStorage.getItem("permissions")
}

