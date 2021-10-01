import {
	GET_DESTINATIONS,
	SAVE_DESTINATIONS,
	POST_RESPONSE,
	SET_LANGUAGE,
} from '../types';

export default (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_DESTINATIONS:
			return {
				...state,
				destinations: payload,
			};
		case SAVE_DESTINATIONS:
			return {
				...state,
				saveDestinations: payload,
			};
		case POST_RESPONSE:
			return {
				...state,
				postResponse: payload,
			};
		case SET_LANGUAGE:
			return {
				...state,
				idioma: payload,
			};

		default:
			return state;
	}
};
