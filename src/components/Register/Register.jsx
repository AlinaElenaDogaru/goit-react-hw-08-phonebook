import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/authOperations';
import { getIsLoadingRegister, getRegisterError } from '../../features/authSelectors';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoadingRegister = useSelector(getIsLoadingRegister);
  const registerError = useSelector(getRegisterError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoadingRegister} />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoadingRegister} />
      </label>
      <button type="submit" disabled={isLoadingRegister}>
        {isLoadingRegister ? 'Registering...' : 'Register'}
      </button>
      {registerError && <p style={{ color: 'red' }}>Error: {registerError}</p>}
    </form>
  );
}

export default RegisterPage;

