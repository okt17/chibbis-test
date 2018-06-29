import { FETCH_REVIEWS } from '../actions/types';

const initialState = {
  reviews: [],
  isLoading: false,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}

export default rootReducer;
