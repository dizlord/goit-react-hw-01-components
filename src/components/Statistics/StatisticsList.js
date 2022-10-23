import PropTypes, { shape } from 'prop-types';

const StatisticsList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default StatisticsList;
