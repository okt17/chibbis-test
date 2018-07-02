import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './style';

class Header extends React.PureComponent {
  static propTypes = {
    selectedReviewType: PropTypes.number.isRequired,
    reviewTypes: PropTypes.array.isRequired,
    setReviewType: PropTypes.func.isRequired,
  };
  handleReviewTypeClick = (event) => {
    const reviewType = Number(event.target.name);

    if (reviewType !== this.props.selectedReviewType) {
      this.props.setReviewType(reviewType);
    }
  };
  render() {
    const {
      selectedReviewType,
      reviewTypes,
    } = this.props;

    return (
      <div className='app__header'>
        <Button.Group>
          {
            reviewTypes.map(({ key, alias }, i, arr) => (
              <React.Fragment key={key}>
                <Button
                  className='app__header__button'
                  name={key}
                  onClick={this.handleReviewTypeClick}
                  primary={key === selectedReviewType}
                > {alias}
                </Button>

                {
                  i < arr.length - 1
                  &&
                  <Button.Or text='' />
                }
              </React.Fragment>
            ))
          }
        </Button.Group>
      </div>
    );
  }
}

export default Header;
