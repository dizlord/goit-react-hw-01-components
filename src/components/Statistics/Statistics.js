import PropTypes from 'prop-types';

import StatisticsList from './StatisticsList';
import Box from 'components/utils/Box';
import { StatisticsSection } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Box mt="5" display="inline-block" textAlign="center">
        {title && <h2 className="title">{title}</h2>}
        <StatisticsList items={stats} />
      </Box>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
