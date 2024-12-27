import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../features/authSelectors';
import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
        )}
      </div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <NavLink to="/register" className={styles.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navigation;




