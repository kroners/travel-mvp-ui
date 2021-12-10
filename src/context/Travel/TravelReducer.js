import { SAVE_DESTINATIONS, POST_RESPONSE, SET_LANGUAGE } from '../types';

export default (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case SAVE_DESTINATIONS:
			return {
				...state,
				destinos: payload,
			};
		case 'REMOVE_DESTINATION':
			return {
				...state,
				destinos: payload.destinos,
			};
		case 'SAVE_START_DATE':
			return {
				...state,
				fecha_inicio: payload.fechaInicio,
			};
		case 'SAVE_END_DATE':
			return {
				...state,
				fecha_fin: payload.fechaFin,
			};
		case 'SAVE_BUDGET':
			return {
				...state,
				precio_min: payload.precioMin,
				precio_max: payload.precioMax,
			};
		case 'SAVE_CANTIDAD_PERSONAS':
			return {
				...state,
				...payload,
			};
		case 'SAVE_TIPO_SERVICIO':
			return {
				...state,
				tipo_servicio: payload,
			};
		case 'SAVE_SERVICIOS':
			return {
				...state,
				servicios: payload,
			};
		case 'SAVE_ACTIVIDADES':
			return {
				...state,
				actividades: payload,
			};
		case 'SAVE_PERFIL_VIAJE':
			return {
				...state,
				perfil_viaje: payload,
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
