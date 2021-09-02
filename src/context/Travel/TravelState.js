import React, { useReducer } from 'react';
import TravelReducer from './TravelReducer';
import TravelContext from './TravelContext';
import { TRAVEL_API } from '../../api/index';
import axios from 'axios';
import { GET_DESTINATIONS, POST_RESPONSE } from '../types';

const TravelState = (props) => {
  const initialState = {
    destinations: [],
    saveDestinations: {},
    postResponse: {},
    idioma: '',
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

  const sendDestinations = async () => {
    const res = await axios.post(
      'http://127.0.0.1:8000/api/v1/prueba_POST/',
      state.saveDestinations,
    );

    if (res.data) {
      dispatch({
        type: POST_RESPONSE,
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
        postResponse: state.postResponse,
        getDestinations,
        sendDestinations,
        state,
        dispatch,
      }}>
      {props.children}
    </TravelContext.Provider>
  );
};

export default TravelState;
