import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/authOperations';
import { getIsLoadingLogin, getLoginError, getIsLoggedIn } from '../../features/authSelectors';
import styles from './Login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // For loading indicator

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoadingLogin = useSelector(getIsLoadingLogin);
  const loginError = useSelector(getLoginError);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      alert('Login successful!');
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          disabled={isLoadingLogin}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          disabled={isLoadingLogin}
        />
        <div className={styles.buttonContainer}> {/* Wrapper for button and loader */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.button}
            disabled={isLoadingLogin}
          >
            {isLoadingLogin ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </div>
        {loginError && <p className={styles.errorText} style={{ color: 'red' }}>Error: {loginError}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
