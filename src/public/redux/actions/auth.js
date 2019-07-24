import axios from 'axios';

const url = 'https://ayodolanbackend.herokuapp.com/guide';

export const login = (data) => {
	return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, {
            email: data.email,
            password: data.password,
        })
    }
}

export const forgotPassword = (email) => {
    return {
        type: 'FORGOT_PASSWORD',
        payload: axios.post(`${url}/mailer`, {
            email: email,
        })
    }
}

export const newPassword = (data) => {
    return {
        type: 'NEW_PASSWORD',
        payload: axios.post(`${url}/change/${data.id}`, {
            password: data.password,
            newPassword: data.confPassword,
        })
    }
}