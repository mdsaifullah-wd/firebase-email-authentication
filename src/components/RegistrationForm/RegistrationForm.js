import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init.';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, name, password, error);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className='w-50 mx-auto mt-5 border border-1 border-info p-5 rounded-3'>
      <Form onSubmit={handleRegistration}>
        <h2>Please Register</h2>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            onBlur={handleNameBlur}
            required
            type='text'
            placeholder='Enter your name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            required
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            required
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Link className='d-block mb-3' to={'/'}>
          Already have an account?
        </Link>
        <Button variant='primary' type='submit'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
