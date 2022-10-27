import PropTypes from 'prop-types';

import getRandomHexColor from 'components/utils/utility';
import Box from 'components/utils/Box';
import { StatisticsLabel, StatisticsItem, StatisticsPercentage } from './StatisticsList.styled';

const StatisticsList = ({ items }) => {
  return (
    <Box
      as="ul"
      display="grid"
      gridAutoFlow="column"
      gridAutoColumns="minmax(100px, 1fr)"
    >
      {items.map(item => (
        <StatisticsItem
          key={item.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <StatisticsLabel>{item.label}</StatisticsLabel>
          <StatisticsPercentage>{item.percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </Box>
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
