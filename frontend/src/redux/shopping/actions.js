import * as actionTypes from './types';

export const addToCart = (itemID) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: itemID,
		},
	};
};
