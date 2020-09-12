import React, { useState } from 'react';
import { Link } from '@reach/router';

import { auth, signInWithGoogle, generateUserDocument } from './Firebase';
import Form from './styled/form';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  return (
    <Form.LiBox>
      <Form.LeftSide>
        <h1>Sign Up</h1>
        {error !== null && <div>{error}</div>}
        <form>
          {/* <label htmlFor="displayName">Display Name:</label> */}
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: CoolCat213"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
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
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <Form.Divide>or</Form.Divide>
      </Form.LeftSide>
      <Form.RightSide>
        <button type="button" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <p>
          Already have an account? <Link to="/">Sign in here</Link>
        </p>
      </Form.RightSide>
    </Form.LiBox>
  );
};
export default Register;
