import React from 'react';
import Reviews from '../Reviews';
import Header from '../Header';
import './style';

class App extends React.PureComponent {
  static propTypes = {
    ...Header.propTypes,
    ...Reviews.propTypes,
  };
  render() {
    const {
      selectedReviewType,
      fetchReviews,
      reviews,
    } = this.props;

    return (
      <div className='app'>
        <Header selectedReviewType={selectedReviewType} />

        <Reviews
          reviews={reviews}
          fetchReviews={fetchReviews}
        />
      </div>
    );
  }
}

export default App;
