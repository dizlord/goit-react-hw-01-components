import PropTypes from 'prop-types';

import { TableRow, TableColumn } from './TransactionHistoryItem.styled';

const TransactionHistoryItem = ({ type, amount, currency, count }) => {
  return (
    <TableRow count={count}>
      <TableColumn>{type}</TableColumn>
      <TableColumn>{amount}</TableColumn>
      <TableColumn>{currency}</TableColumn>
    </TableRow>
  );
};

TransactionHistoryItem.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
