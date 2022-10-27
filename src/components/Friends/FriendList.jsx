import PropTypes from 'prop-types';

import FriendsListItem from './FriendListItem';
import Box from 'components/utils/Box';

const FriendsList = ({ friends }) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" mt={5}>
      <Box as="ul" display="flex" flexDirection="column" alignItems="start">
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
      </Box>
    </Box>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendsList;
