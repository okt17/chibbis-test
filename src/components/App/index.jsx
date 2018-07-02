import React from 'react';
import Reviews from '../Reviews';
import Header from '../Header';
import './style';

const App = ({
  fetchReviews,
  isLoading,
  pagination,
  reviews,
  reviewTypes,
  selectedReviewType,
}) => (
  <div className='app'>
    <Header
      selectedReviewType={selectedReviewType}
      reviewTypes={reviewTypes}
      setReviewType={fetchReviews}
    />

    <Reviews
      fetchReviews={fetchReviews}
      reviews={reviews}
      pagination={pagination}
      isLoading={isLoading}
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
