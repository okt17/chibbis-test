import { FETCH_REVIEWS } from './types';
import { getReviews } from '../api';

// add more exports to get rid of the Eslint's prefer-default-export
// eslint-disable-next-line import/prefer-default-export
export function fetchReviews(options) {
  return (dispatch) => {
    getReviews(options)
      .then((res) => {
        debugger;
      })
      .catch((err) => {
        debugger;
      });

    return {
      type: FETCH_REVIEWS,
    };
  };
}
