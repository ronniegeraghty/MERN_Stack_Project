import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => (dispatch) => {
	dispatch(setItemsLoading());
	axios.get('/api/items').then((res) =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		})
	);
};

export const addItem = (item) => (dispath) => {
	axios.post('/api/items', item).then((res) =>
		dispath({
			type: ADD_ITEM,
			payload: res.data
		})
	);
};

export const deleteItem = (id) => (dispacth) => {
	axios.delete(`/api/items/${id}`).then((res) =>
		dispacth({
			type: DELETE_ITEM,
			payload: id
		})
	);
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
