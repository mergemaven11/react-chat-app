import React, { useContext } from 'react';
import UserProvider from './providers/UserProvider';

import HomeLanding from './components/authentication/HomeLanding';

function App() {
  return (
    <UserProvider>
      <HomeLanding />
    </UserProvider>
  );
}

export default App;
