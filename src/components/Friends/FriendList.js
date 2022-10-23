import PropTypes from 'prop-types';

import FriendsListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendsList;
