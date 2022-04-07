import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../../firebase.init.';

const auth = getAuth(app);
const LogInForm = () => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setValidated(true);
    setError('');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('password reset mail sent');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className='w-50 mx-auto mt-5 border border-1 border-info p-5 rounded-3'>
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <h2>Please Login</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <Form.Text className='text-danger'>{error}</Form.Text>
        <button
          onClick={handlePasswordReset}
          className='border-0 bg-white text-primary text-decoration-underline p-0'>
          Forget Password?
        </button>
        <div className='mb-3'>
          <Link to={'/register'}>Don't have an account?</Link>
        </div>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LogInForm;
