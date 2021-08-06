import { GET_DESTINATIONS, SAVE_DESTINATIONS } from '../types';

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

    default:
      return state;
  }
};
