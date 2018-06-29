/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const REVIEWS_URL = 'https://arh.chibbistest.ru/api/reviews';

export function getReviews({ reviewType = 0, page = 1, pageSize = 10 } = {}) {
  return axios.get(`${REVIEWS_URL}?reviewType=${reviewType}&page=${
    page}&pageSize=${pageSize}`)
    .then(res => ({
      data: res.data,
      pagination: JSON.parse(res.headers['paging-headers']),
    }));
}
