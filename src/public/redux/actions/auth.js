import axios from 'axios';

const url = '';

export const login = (data) => {
	return {
        type: 'LOGIN',
        payload: axios.post(`${url}/authenticate`, {
            user: data.username,
            password: data.password,
        })
    }
}

export const forgetPassword = (email) => {
    return {
        type: 'FORGET_PASSWORD',
        payload: axios.post(`${url}/forgetpassword`, {
            email: email,
        })
    }
}