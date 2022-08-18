import React from 'react';
import AccountsCard from '../AccountsCard';


function Accounts({user}) {
  

  function displayedAccounts() {
    return user.map((user) => (
      <AccountsCard
        key={user.id}
        user={user}
      />
    ));
  }

  return <div className="list">{displayedAccounts()}</div>;
}

export default Accounts;