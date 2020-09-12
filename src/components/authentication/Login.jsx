import React, { useState } from 'react';
import { Link } from '@reach/router';

import { auth, signInWithGoogle } from './Firebase';
import Form from './styled/form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <Form.LiBox>
      <Form.LeftSide>
        <h1>Sign In</h1>
        {error !== null && <div>{error}</div>}
        <form>
          {/* <label htmlFor="userEmail">Email:</label> */}
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: youremail@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          {/* <label htmlFor="userPassword">Password:</label> */}
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            type="button"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </button>
        </form>
        <Form.Divide>or</Form.Divide>
      </Form.LeftSide>
      <Form.RightSide>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <p>
          Don't have an account? <Link to="signUp">Sign up here</Link> <br />{' '}
          <Link to="passwordReset">Forgot Password?</Link>
        </p>
      </Form.RightSide>
    </Form.LiBox>
  );
};
export default Login;
