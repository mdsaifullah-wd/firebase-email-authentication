import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from 'react';

const LogInForm = () => {
  return (
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
      <Button variant='primary' type='submit'>
        Login
      </Button>
    </Form>
  );
};

export default LogInForm;
