import user from '../data/user.json'
import dataStatistics from '../data/data.json';
import friends from '../data/friends.json';
import transctions from '../data/transactions.json'

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendsList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" stats={dataStatistics} />
      <Statistics stats={dataStatistics} />

      <FriendsList friends={friends} />
      
      <TransactionHistory items={transctions} />
    </div>
  );
};
