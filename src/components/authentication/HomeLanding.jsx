import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { UserContext } from '../../providers/UserProvider'
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import PasswordReset from './PasswordReset';

function HomeLanding() {
  const user = useContext(UserContext)
  return user ? (
    <Dashboard />
  ) : (
    <Router>
      <Register path="signUp" />
      <Login path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}

export default HomeLanding;
