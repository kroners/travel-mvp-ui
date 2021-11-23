import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TravelReducer from './TravelReducer';
import TravelContext from './TravelContext';

const TravelState = (props) => {
	const initialState = {
		destinos: [],
		fecha_inicio: new Date(),
		fecha_fin: new Date(),
		precio_min: 0,
		precio_max: 5000,
		adultos: 0,
		ninos: 0,
		bebes: 0,
		servicios: '',
		tipo_servicio: 1,
		tipo_hospedaje: 1,
		tipo_habitacion: 1,
		alimentacion: 1,
		actividades: '',
		perfil_viaje: 1,
		idioma: '',
	};

	const [state, dispatch] = useReducer(TravelReducer, initialState);

	return (
		<TravelContext.Provider value={[state, dispatch]}>
			{props.children}
		</TravelContext.Provider>
	);
};

TravelState.propTypes = {
	children: PropTypes.node,
};

export default TravelState;
