import {
  FETCH_REVIEWS,
  SET_REVIEWS,
} from './types';
import { getReviews } from '../api';

export function setReviews(data) {
  return {
    type: SET_REVIEWS,
    payload: data,
  };
}

export function fetchReviews(reviewType) {
  return (dispatch, getState) => {
    let {
      selectedReviewType,
      // eslint-disable-next-line prefer-const
      pagination: { PageNumber, PageSize },
    } = getState();

    // при переключении типа отзывов начинаем листать с первой страницы
    // иначе листаем на страницу дальше
    const page = (
      reviewType === selectedReviewType
      ||
      reviewType === undefined
    ) ? PageNumber + 1 : 1;

    selectedReviewType = reviewType !== undefined
      ? reviewType
      : selectedReviewType;

    getReviews({
      reviewType: selectedReviewType,
      page,
      pageSize: PageSize,
    })
      .then(res => dispatch(setReviews({
        pagination: res.pagination,
        reviews: res.data,
        reviewType: selectedReviewType,
      })))
      .catch(() => dispatch(setReviews({
        pagination: {
          HasNextPage: false,
        },
        reviews: [],
      })));

    dispatch({
      type: FETCH_REVIEWS,
      payload: selectedReviewType,
    });
  };
}
