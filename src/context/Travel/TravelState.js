import React, { useReducer } from 'react';
import TravelReducer from './TravelReducer';
import TravelContext from './TravelContext';
import { TRAVEL_API } from '../../api/index';
import axios from 'axios';
import { GET_DESTINATIONS } from '../types';

const TravelState = (props) => {
  const initialState = {
    destinations: [],
    saveDestinations: {},
  };

  const postInformation = {
    destination: { nombre: '', ciudad: '', pais: '' },
    users: { adultos: false, niños: false, bebes: false },
    services: { traslados: false, shows: false, excursiones: false },
    tipoServicio: { privadoConGuia: false, privadoSinGuia: false, regular: false },
    tipoHospedaje: { estandar: false, confort: false, lujo: false },
    alimentacion: { soloDesayuno: false, mediaPension: false, pensionCompleta: false },
    tipoHabitacion: { single: false, doble: false, triple: false },
    tipoActividad: { familiar: false, grupal: false, pareja: false },
    perfilViaje: { familiar: false, grupal: false, pareja: false },
    lenguaje: '',
  };

  const [state, dispatch] = useReducer(TravelReducer, initialState);

  const getDestinations = async () => {
    const res = await axios.get(`${TRAVEL_API}/api/v1/destinations/`);

    if (res.data.length > 0) {
      dispatch({
        type: GET_DESTINATIONS,
        payload: res.data,
      });
    }
    return res;
  };

  return (
    <TravelContext.Provider
      value={{
        destinations: state.destinations,
        saveDestinations: state.saveDestinations,
        getDestinations,
        state,
        dispatch,
      }}>
      {props.children}
    </TravelContext.Provider>
  );
};

export default TravelState;
