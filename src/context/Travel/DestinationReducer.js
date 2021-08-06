import { SAVE_DESTINATIONS } from '../types';

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SAVE_DESTINATIONS:
      return {
        ...state,
        filteredDestinations: payload,
      };

    default:
      return state;
  }
};
