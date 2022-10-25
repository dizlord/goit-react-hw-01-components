import user from '../user.json'
// import dataStatistics from '../data.json';
// import friends from '../friends.json';
// import transctions from '../transactions.json'

import Profile from "./Profile/Profile";
// import Statistics from "./Statistics/Statistics";
// import FriendsList from './Friends/FriendList';
// import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      // style={{
      //   // height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      //   padding: 15,
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      {/* <Statistics title="Upload stats" stats={dataStatistics} />
      <Statistics stats={dataStatistics} />

      <FriendsList friends={friends} />
      
      <TransactionHistory items={transctions} /> */}
    </div>
  );
};
