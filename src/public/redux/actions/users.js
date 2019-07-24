import axios from 'axios';

const url = 'https://ayodolanbackend.herokuapp.com/guide';

export const fetchData = (id) => {
	return {
        type: 'FETCH_DATA',
        payload: axios.get(`${url}/${id}`)
    }
}