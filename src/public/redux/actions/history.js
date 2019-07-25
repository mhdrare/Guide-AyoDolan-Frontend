import axios from 'axios';

const url = 'https://ayodolanbackend.herokuapp.com/historyGuide';

export const fetchHistory = (id) => {
	return {
        type: 'FETCH_HISTORY',
        payload: axios.get(`${url}/${id}`)
    }
}