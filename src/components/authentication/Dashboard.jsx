import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { auth } from './Firebase';

const Dashboard = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);

  return (
    <div>
      <div>
        <div
          style={{
            background: `url( ${
              photoURL ||
              'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'
            })  no-repeat center center`,
            backgroundSize: 'cover',
            height: '200px',
            width: '200px',
          }}
        />
        <div className="md:pl-4">
          <h2>{displayName}</h2>
          <h3>{email}</h3>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};
export default Dashboard;
