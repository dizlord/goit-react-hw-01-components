import PropTypes from 'prop-types';

import StatisticsList from './StatisticsList';
import Box from 'components/utils/Box';
import { StatisticsTitle } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      textAlign="center"
      mt="5"
      display="grid"
      justifyContent="center"
    >
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : <StatisticsTitle>No title</StatisticsTitle>}
      <StatisticsList items={stats} />
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
