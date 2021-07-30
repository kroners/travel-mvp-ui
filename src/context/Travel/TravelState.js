import React, { useReducer } from 'react';
import TravelReducer from './TravelReducer';
import TravelContext from './TravelContext';
import { TRAVEL_API } from '../../api/index';
import axios from 'axios';

const TravelState = (props) => {
  const initialState = {
    destinations: [],
  };

  const [state, dispatch] = useReducer(TravelReducer, initialState);

  const getDestinations = async () => {
    const res = await axios.get(`${TRAVEL_API}/api/v1/destinations/`);

    if (res.data.length > 0) {
      dispatch({
        type: 'GET_DESTINATIONS',
        payload: res.data,
      });
    }
    return res;
  };

  return (
    <TravelContext.Provider
      value={{
        destinations: state.destinations,
        getDestinations,
      }}>
      {props.children}
    </TravelContext.Provider>
  );
};

export default TravelState;
