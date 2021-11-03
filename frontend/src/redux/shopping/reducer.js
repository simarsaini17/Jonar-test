import * as actionTypes from './types';

const initialState = {
	cart: [],
};
const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			// Check if Item is in cart already
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);

			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { qty: 1 }],
			};

		default:
			return state;
	}
};

export default shopReducer;
