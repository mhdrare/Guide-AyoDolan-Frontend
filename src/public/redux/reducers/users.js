import { AsyncStorage } from 'react-native';

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
	isLogin: false
}

export default users = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_DATA_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
                isLogin: false,
			}
		case 'FETCH_DATA_FULFILLED':
			return {
				...state,
				isLoading: false,
				isLogin: true,
				data: action.payload.data.data[0]
			}
		case 'FETCH_DATA_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
                isLogin: false,
			}
		default:
            return state;
    }
}