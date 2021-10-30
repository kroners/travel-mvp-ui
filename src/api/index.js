import axios from 'axios';

export const TRAVEL_API = 'http://localhost:8000';

export const TRAVEL_BASE_PATH = `${TRAVEL_API}/api/v1`;

export const getDestinations = async (destino) => {
	try {
		const destinationList = await axios.get(
			`${TRAVEL_BASE_PATH}/destinations/`,
			{ params: destino }
		);

		return destinationList.data;
	} catch (error) {
		console.log(error);
	}
	return [];
};

export const getPrograms = async (filtros) => {
	try {
		const destinationList = await axios.get(`${TRAVEL_BASE_PATH}/programs/`, {
			params: filtros,
		});

		return destinationList.data;
	} catch (error) {
		console.log(error);
	}
	return [];
};

// export const sendDestinations = async () => {
// 	const res = await axios.post(
// 		'http://127.0.0.1:8000/api/v1/prueba_POST/',
// 		state.saveDestinations
// 	);

// 	if (res.data) {
// 		dispatch({
// 			type: POST_RESPONSE,
// 			payload: res.data,
// 		});
// 	}
// 	return res;
// };
