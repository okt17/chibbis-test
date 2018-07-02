import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import positivePic from 'app/assets/comment_positive';
import negativePic from 'app/assets/comment_negative';
import './style';

const positiveAvatar = <Comment.Avatar src={positivePic} />;
const negativeAvatar = <Comment.Avatar src={negativePic} />;

const ReviewItem = ({
  review: {
    DateAdded,
    IsPositive,
    Message,
    UserName,
  },
}) => (
  <div className='app__reviews__item'>
    <Comment>
      {
        IsPositive === false
          ? negativeAvatar
          : positiveAvatar
      }

      <Comment.Content>
        <Comment.Author>{UserName}</Comment.Author>

        <Comment.Metadata>{DateAdded}</Comment.Metadata>

        <Comment.Text>{Message}</Comment.Text>
      </Comment.Content>
    </Comment>
  </div>
);

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
