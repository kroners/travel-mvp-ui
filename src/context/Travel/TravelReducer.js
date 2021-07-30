import { GET_DESTINATIONS } from '../types';

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_DESTINATIONS:
      return {
        ...state,
        destinations: payload,
      };

    default:
      return state;
  }
};
