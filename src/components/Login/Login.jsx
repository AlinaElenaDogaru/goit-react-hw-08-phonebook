import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authOperations';
import styles from './Login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
