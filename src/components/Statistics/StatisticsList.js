import PropTypes from 'prop-types';

import getRandomHexColor from 'components/utility';

const StatisticsList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li
          className="item"
          key={item.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
