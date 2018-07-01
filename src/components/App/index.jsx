import React from 'react';
import Reviews from '../Reviews';
import Header from '../Header';
import './style';

const App = ({
  fetchReviews,
  pagination,
  reviews,
  reviewType,
  reviewTypes,
}) => (
  <div className='app'>
    <Header
      reviewType={reviewType}
      reviewTypes={reviewTypes}
      setReviewType={fetchReviews}
    />

    <Reviews
      fetchReviews={fetchReviews}
      reviews={reviews}
      pagination={pagination}
    />
  </div>
);

const {
  setReviewType,
  ...restHeaderPropTypes
} = Header.propTypes;

App.propTypes = {
  ...restHeaderPropTypes,
  ...Reviews.propTypes,
};

export default App;
