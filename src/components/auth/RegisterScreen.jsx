import React from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form>
        <input
          autoComplete='off'
          className='auth__input'
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          className='auth__input'
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          className='auth__input'
          type='password'
          name='password'
          placeholder='Password'
        />
        <input
          className='auth__input'
          type='password'
          name='confirm_password'
          placeholder='Confirm password'
        />
        <button className='btn btn-primary btn-block mb-5' type='submit'>
          Register
        </button>

        <Link to='/auth/register' className='link'>
          {' '}
          Already register?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
