import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authOperations';
import { getUserEmail } from '../../features/authSelectors';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div className={styles.container}>
      <p className={styles.email}>{email}</p>
      <button
        className={styles.logoutButton}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;


