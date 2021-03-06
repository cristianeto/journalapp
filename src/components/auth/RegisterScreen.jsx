import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    name: 'Geova',
    email: 'geova@mail.com',
    password: '123456',
    confirm_password: '123456',
  });

  const { name, email, password, confirm_password } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    // TODO:
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== confirm_password || password.length < 5) {
      dispatch(
        setError('Password doesnt match and must be less than 5 characteres')
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form
        onSubmit={handleRegister}
        className='animate__animated animate__fadeIn animate__faster'
      >
        {msgError && <div className='auth__alert-error'>{msgError}</div>}
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

        <Link to='/auth/login' className='link'>
          Already register?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
