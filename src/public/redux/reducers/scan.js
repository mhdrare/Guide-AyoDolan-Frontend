import { AsyncStorage } from 'react-native';

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
}

export default scan = (state = initialState, action) => {
	switch (action.type) {
		case 'SCANNER_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
			}
		case 'SCANNER_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data
			}
		case 'SCANNER_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
			}
		case 'UPDATE_SCANNER_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
			}
		case 'UPDATE_SCANNER_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data
			}
		case 'UPDATE_SCANNER_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
			}
		default:
            return state;
    }
}