import { TRANSACTION_LOADING, TRANSACTION_LOADED, TRANSACTION_ERROR } from '../_action/type'

const initialState = {
  isLoading: false,
  transaction: null
}

export default function(state = initialState, action) {
	switch (action.type) {
		case TRANSACTION_LOADING:
			return {
				...state,
				isLoading: true
			}
		case TRANSACTION_LOADED:
			return {
				...state,
				isLoading: false,
				transaction: action.payload,
			}
		case TRANSACTION_ERROR:
			return {
				...state,
				isLoading: false,
				transaction: null
			}
		default:
			return state;
	}
}