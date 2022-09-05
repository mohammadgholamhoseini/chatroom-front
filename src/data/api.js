import axios from "axios";
import {getToken} from "./localStorage";


const baseApiUrl = "http://localhost:8081"
export function post(url, creds) {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.post(baseApiUrl + url, creds, {
            headers: {
                Authorization: getToken()
            }
        }
    );

}
export function formDataPost(url,creds) {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.post(baseApiUrl + url, creds, {
            headers: {
                Authorization: getToken(),
                'Content-Type': "multipart/form-data"
            }
        }
    );
}
export function get(url, creds) {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.get(baseApiUrl + url, {
            params: creds,
            headers: {
                Authorization: getToken()
            }
        }
    );
}

export function fileGet(url) {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.get(baseApiUrl + url, {
            headers: {

                Authorization: getToken()
            },
            responseType: 'arraybuffer'
        }
    );
}

export function Delete(url) {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.delete(baseApiUrl + url, {
            headers: {
                Authorization: getToken()
            }
        }
    );
}

// --------------------------------------------Register----------------------------------------------
export function registerUserApi(user) {
    return post('/register', {
        username:user.username,
        email:user.email,
        password:user.password,
    })
}
// --------------------------------------------Login----------------------------------------------
export function loginUserApi(user) {
    return get('/login', {
        username:user.username,
        password:user.password,
    })
}