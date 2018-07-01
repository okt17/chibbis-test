import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReviewItem from './ReviewItem';
import './style';

class Reviews extends React.PureComponent {
  static propTypes = {
    fetchReviews: PropTypes.func.isRequired,
    reviews: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.fetchReviews();
  }
  render() {
    const { reviews } = this.props;

    return (
      <div className='app__reviews'>
        {/* <InfiniteScroll
          dataLength={reviews.length}
          // next = this.fetchData
          // hasMore // next page from pagind headers
        > */}
        {reviews.map(review => <ReviewItem key={review.Id} review={review} />)}
        {/* </InfiniteScroll> */}
      </div>
    );
  }
}

export default Reviews;
