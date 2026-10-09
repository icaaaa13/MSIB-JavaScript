import React from 'react';
import LoginForm from '../../components/LoginForm';

function AuthLogin({ isRegister = false }) {
  return (
    <div className="container my-5">
      <LoginForm isRegister={isRegister} />
    </div>
  );
}

export default AuthLogin;