import PropTypes from 'prop-types';

import TransactionHistoryItem from './TransactionHistoryItem';
import Box from 'components/utils/Box';
import { TableHead, HeadString, HeadColumn, TableBody } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  let count = 0;
  return (
    <Box as="table" textAlign="center" mx="auto" my={5} boxShadow="card" borderRadius="normal">
      <TableHead>
        <HeadString>
          <HeadColumn>Type</HeadColumn>
          <HeadColumn>Amount</HeadColumn>
          <HeadColumn>Currency</HeadColumn>
        </HeadString>
      </TableHead>

      <TableBody>
        {items.map(item => {
          count += 1;
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              count={count}
            />
          );
        })}
      </TableBody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default TransactionHistory;
