import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReviewItem from './ReviewItem';
import './style';

class Reviews extends React.PureComponent {
  static propTypes = {
    fetchReviews: PropTypes.func.isRequired,
    reviews: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
  };
  componentWillMount() {
    this.props.fetchReviews();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.pagination.PageNumber > 1
      &&
      this.props.pagination.PageNumber === 1
    ) {
      // если прокрутка начинается опять с первой страницы
      // то прокручиваем элемент вверх
      this.ref.current.scrollTop = 0;
    }
  }
  ref = React.createRef();
  render() {
    const
      {
        fetchReviews,
        reviews,
        pagination: {
          HasNextPage,
        },
      } = this.props,
      domNode = this.ref.current;

    return (
      <div className='app__reviews' ref={this.ref}>
        {
          // нужно для правильной инициализации scrollableTarget в InfiniteScroll
          domNode !== null
          &&
          <InfiniteScroll
            dataLength={reviews.length}
            endMessage={
              <h5 className='app__reviews__end-message'>
                Все отзывы загружены.
              </h5>
            }
            hasMore={HasNextPage}
            next={fetchReviews}
            scrollableTarget={this.ref.current}
          >
            <Comment.Group className='app__reviews__comments' size='large'>
              {reviews.map(review => <ReviewItem key={review.Id} review={review} />)}
            </Comment.Group>
          </InfiniteScroll>
        }
      </div>
    );
  }
}

export default Reviews;
