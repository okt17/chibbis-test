import React from 'react';
import PropTypes from 'prop-types';
import './style';

const REVIEW_TYPES = {
  0: 'Все',
  1: 'Положительные',
  2: 'Отрицательные',
};

class Header extends React.PureComponent {
  static propTypes = {
    reviewType: PropTypes.number.isRequired,
    reviewTypes: PropTypes.object.isRequired,
    setReviewType: PropTypes.func.isRequired,
  };
  handleReviewTypeClick = (event) => {
    const reviewType = Number(event); // TODO: event.target.name

    if (reviewType !== this.props.reviewType) {
      this.props.setReviewType(reviewType);
    }
  };
  render() {
    const {
      reviewType,
      reviewTypes,
    } = this.props;

    return (
      <div className='app_header'>
        {
          Object.entries(reviewTypes).map(([key, value]) => (
            <div key={key} name={key} onClick={() => this.handleReviewTypeClick(key)}>
              {value}
              {value === reviewType && ' selected'}
            </div>
          ))
        }
      </div>
    );
  }
}

export default Header;
