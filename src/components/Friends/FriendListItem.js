import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={isOnline ? 'status onLine' : 'status offLine'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
