import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({
  review: {
    Message,
  },
}) => (
  <div className='app__reviews__item'>
    {Message}
  </div>
);

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
