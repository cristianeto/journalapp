import React from 'react';

const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <input type='text' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Login</button>
        <hr />
        Google
      </form>
    </>
  );
};

export default LoginScreen;
