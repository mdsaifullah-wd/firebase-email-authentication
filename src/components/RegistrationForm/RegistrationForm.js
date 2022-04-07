import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className='w-50 mx-auto mt-5 border border-1 border-info p-5 rounded-3'>
      <Form>
        <h2>Please Register</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Your name</Form.Label>
          <Form.Control required type='text' placeholder='Enter your name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control required type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control required type='password' placeholder='Password' />
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
