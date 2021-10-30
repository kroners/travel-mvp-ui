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

export const getAllPrograms = async () => {
	try {
		// const destinationList = await axios.get(`${TRAVEL_BASE_PATH}/programs/`);
		const destinationList = {
			data: [
				{
					id: 1,
					codigo: '001',
					titulo: 'Viaje a uenos Aires',
					descripcion: 'Todo pagado a Buenos Aires',
					duracion: {
						dias: 3,
						noches: 2,
					},
					fechas: {
						fechaInicio: new Date(),
						fechaFin: new Date(),
					},
					idioma: 'Ingles',
					opciones: '',
				},
				{
					id: 1,
					codigo: '001',
					titulo: 'Viaje a uenos Aires',
					descripcion: 'Todo pagado a Buenos Aires',
					duracion: {
						dias: 3,
						noches: 2,
					},
					fechas: {
						fechaInicio: new Date(),
						fechaFin: new Date(),
					},
					idioma: 'Ingles',
					opciones: '',
				},
				{
					id: 1,
					codigo: '001',
					titulo: 'Viaje a uenos Aires',
					descripcion: 'Todo pagado a Buenos Aires',
					duracion: {
						dias: 3,
						noches: 2,
					},
					fechas: {
						fechaInicio: new Date(),
						fechaFin: new Date(),
					},
					idioma: 'Ingles',
					opciones: '',
				},
			],
		};

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
