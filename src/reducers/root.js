import {
  FETCH_REVIEWS,
  SET_REVIEWS,
  SET_PAGINATION,
  SET_REVIEW_TYPE,
} from '../actions/types';

const initialState = {
  reviews: [],
  isLoading: false,
  reviewType: 0,
  reviewTypes: {
    0: 'Все',
    1: 'Положительные',
    2: 'Отрицательные',
  },
  pagination: {
    PageNumber: 0,
    PageSize: 25,
    HasNextPage: true,
  },
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        isLoading: true,
      };

    case SET_REVIEWS:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          ...payload,
        ],
        isLoading: false,
      };

    case SET_REVIEW_TYPE:
      return {
        ...state,
        reviewType: payload,
        pagination: payload === state.reviewType
          ? state.pagination
          : initialState.pagination,
        reviews: payload === state.reviewType
          ? state.reviews
          : initialState.reviews,
      };

    case SET_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...payload,
        },
      };

    default:
      return state;
  }
}

export default rootReducer;
