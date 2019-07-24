import { AsyncStorage } from 'react-native';

const initialState = {
	data: [],
	token: '',
	isLoading: false,
	isError: false,
	isLogin: false
}

export default auth = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
                isLogin: false,
			}
		case 'LOGIN_FULFILLED':
			let users = action.payload.data.data[0].id_guide.toString()
			AsyncStorage.setItem('Token', action.payload.data.token)
			AsyncStorage.setItem('Id', users)
			return {
				...state,
				isLoading: false,
				isLogin: true,
				token: action.payload.data.token,
				data: action.payload.data.data[0]
			}
		case 'LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
                isLogin: false,
			}
		case 'FORGOT_PASSWORD_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false
			}
		case 'FORGOT_PASSWORD_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data
			}
		case 'FORGOT_PASSWORD_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true
			}
		case 'NEW_PASSWORD_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false
			}
		case 'NEW_PASSWORD_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data
			}
		case 'NEW_PASSWORD_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true
			}
		default:
            return state;
	}
}