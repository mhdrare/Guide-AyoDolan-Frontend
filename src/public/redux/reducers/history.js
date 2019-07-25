import { AsyncStorage } from 'react-native';

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
}

export default history = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_HISTORY_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
			}
		case 'FETCH_HISTORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data
			}
		case 'FETCH_HISTORY_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
			}
		default:
            return state;
    }
}