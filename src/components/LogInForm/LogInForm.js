import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = () => {
  return (
    <div className='w-50 mx-auto mt-5 border border-1 border-info p-5 rounded-3'>
      <Form>
        <h2>Please Login</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
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
