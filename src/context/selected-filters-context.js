import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const SelectedFiltersContext = createContext();

const initialState = {
	destinos: [],
	fechaInicio: null,
	fechaFin: null,
	duracion: null,
	precio_min: 0,
	precio_max: null,
	adultos: null,
	ninos: null,
	bebes: null,
	servicios: [],
	tipo_servicio: null,
	tipo_hospedaje: null,
	tipo_habitacion: null,
	alimentacion: null,
	actividades: [],
	perfil_viaje: null,
	idioma: 'ES',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_DESTINATIONS':
			return {
				destinos: [...state.destinos, action.payload],
			};
		case 'SET_DATES_DURATION':
			return {
				fechaInicion: action.payload.fechaInicio,
				fechaFin: action.payload.fechaFin,
				duracion: action.payload.duracion,
			};
		case 'SET_PRICE_RANGE':
			return {
				precio_min: action.payload.precio_min,
				precio_max: action.payload.precio_max,
			};
		case 'ADD_ADULT_COUNT':
			return {
				adultos: action.payload,
			};
		case 'ADD_CHILD_COUNT':
			return {
				ninos: action.payload,
			};
		case 'ADD_BABY_COUNT':
			return {
				bebes: action.payload,
			};
		case 'ADD_SERVICES':
			return {
				servicios: [...state.servicios, action.payload],
			};
		case 'SET_SERVICE_TYPE':
			return {
				tipo_servicio: action.payload,
			};
		case 'SET_HOTEL_TYPE':
			return {
				tipo_hospedaje: action.payload,
			};
		case 'SET_ROOM_TYPE':
			return {
				tipo_habitacion: action.payload,
			};
		case 'SET_FOOD_TYPE':
			return {
				alimentacion: action.payload,
			};
		case 'ADD_ACTIVITIES':
			return {
				actividades: [...state.actividades, action.payload],
			};
		case 'SET_PROFILE_TRIP':
			return {
				perfil_viaje: action.payload,
			};
		case 'SET_LANGUAGE':
			return {
				idioma: action.payload,
			};

		default:
			throw new Error();
	}
};

export const SelectedFiltersProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<SelectedFiltersContext.Provider value={[state, dispatch]}>
			{children}
		</SelectedFiltersContext.Provider>
	);
};

export const useSelectedFiltersContext = () =>
	useContext(SelectedFiltersContext);

SelectedFiltersProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
