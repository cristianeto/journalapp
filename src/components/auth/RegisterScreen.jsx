import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: 'Geova',
    email: 'geova@mail.com',
    password: '123456',
    confirm_password: '123456',
  });

  const { name, email, password, confirm_password } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirm_password);
  };

  const isFormValid = () => {
    // TODO:
  };
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>
        <input
          autoComplete='off'
          className='auth__input'
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleInputChange}
          value={email}
        />
        <input
          className='auth__input'
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleInputChange}
          value={name}
        />
        <input
          className='auth__input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleInputChange}
          value={password}
        />
        <input
          className='auth__input'
          type='password'
          name='confirm_password'
          placeholder='Confirm password'
          onChange={handleInputChange}
          value={confirm_password}
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
