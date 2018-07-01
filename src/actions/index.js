import {
  FETCH_REVIEWS,
  SET_REVIEWS,
  SET_PAGINATION,
  SET_REVIEW_TYPE,
} from './types';
import { getReviews } from '../api';

export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  };
}

export function setPagination(pagination) {
  return {
    type: SET_PAGINATION,
    payload: pagination,
  };
}

export function setReviewType(reviewType) {
  return {
    type: SET_REVIEW_TYPE,
    payload: reviewType,
  };
}

export function fetchReviews(revType) {
  return (dispatch, getState) => {
    let {
      reviewType,
      // eslint-disable-next-line prefer-const
      pagination: { PageNumber, PageSize },
    } = getState();

    reviewType = revType !== undefined ? revType : reviewType;

    getReviews({
      reviewType,
      page: PageNumber + 1,
      pageSize: PageSize,
    })
      .then((res) => {
        dispatch(setReviewType(reviewType));
        dispatch(setReviews(res.data));
        dispatch(setPagination(res.pagination));
      })
      .catch(() => {
        dispatch(setReviews([]));
        dispatch(setPagination({
          HasNextPage: false,
        }));
      });

    return {
      type: FETCH_REVIEWS,
    };
  };
}
