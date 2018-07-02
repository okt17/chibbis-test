import {
  FETCH_REVIEWS,
  SET_REVIEWS,
} from '../actions/types';

const initialState = {
  isLoading: false,
  pagination: {
    PageNumber: 0,
    PageSize: 25,
    HasNextPage: true,
  },
  reviews: [],
  reviewTypes: [
    {
      key: 1,
      alias: 'Положительные',
    },
    {
      key: 0,
      alias: 'Все',
    },
    {
      key: 2,
      alias: 'Отрицательные',
    },
  ],
  selectedReviewType: 0,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        isLoading: true,
      };

    case SET_REVIEWS: {
      const {
        reviews,
        reviewType = state.selectedReviewType,
        pagination,
      } = payload;

      // при переключении reviewType пагинация и уже загруженные отзывы обнуляются
      return {
        ...state,
        isLoading: false,
        reviews: reviewType === state.selectedReviewType
          ? [
            ...state.reviews,
            ...reviews,
          ]
          : reviews,
        selectedReviewType: reviewType,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
