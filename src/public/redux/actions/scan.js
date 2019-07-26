import axios from 'axios';

const url = 'https://ayodolanbackend.herokuapp.com/transaksiByid';
const urlUpdate = 'https://ayodolanbackend.herokuapp.com/updateStatusOrder';

export const getScan = (idTransc) => {
	return {
        type: 'SCANNER',
        payload: axios.get(`${url}?idTransaksi=${idTransc}`)
    }
}

export const updateScan = (idTransc) => {
	return {
        type: 'UPDATE_SCANNER',
        payload: axios.patch(`${urlUpdate}?idTransaksi=${idTransc}`, {
        	order_status: 1
        })
    }
}