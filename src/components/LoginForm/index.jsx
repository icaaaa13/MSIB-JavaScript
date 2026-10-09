import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginForm({ isRegister = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      alert(`Pendaftaran Berhasil! Akun ${email} telah dibuat.`);
      navigate('/login');
    } else {
      alert(`Login Berhasil! Selamat datang.`);
      navigate('/');
    }
  };

  return (
    <div className="card shadow-sm border-0 p-4" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h3 className="text-center fw-bold mb-4">{isRegister ? 'Register' : 'Login'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-primary btn-lg" type="submit">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>

      <hr className="my-4" />

      <div className="text-center">
        <p className="mb-2 text-muted">Or use a third-party</p>
        <button className="btn btn-outline-secondary w-100 mb-2">
          {isRegister ? 'Register with Twitter' : 'Login with Twitter'}
        </button>
        <button className="btn btn-outline-primary w-100 mb-2">
          {isRegister ? 'Register with Facebook' : 'Login with Facebook'}
        </button>
        <button className="btn btn-outline-dark w-100 mb-3">
          {isRegister ? 'Register with GitHub' : 'Login with GitHub'}
        </button>

        {isRegister ? (
          <small className="text-secondary">
            Sudah punya akun? <Link to="/login">Login di sini</Link>
          </small>
        ) : (
          <small className="text-secondary">
            Belum punya akun? <Link to="/register">Daftar di sini</Link>
          </small>
        )}
      </div>
    </div>
  );
}

export default LoginForm;