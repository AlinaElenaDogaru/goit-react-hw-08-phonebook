import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './UserMenu.module.css';

function UserMenu({ email, onLogout }) {
  return (
    <Box className={styles.mainDiv}>
      <Box className={styles.userMenu}>
        <Typography variant="body1" className={styles.email}>{email}</Typography>
        <Button variant="contained" color="secondary" className={styles.logoutButton} onClick={onLogout}>Logout</Button>
      </Box>
    </Box>
  );
}

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
