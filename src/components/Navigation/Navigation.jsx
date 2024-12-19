import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <AppBar position="static" className={styles.nav}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Contact Book
        </Typography>
        <Button color="inherit" component={Link} to="/register" className={styles.navItem}>Register</Button>
        <Button color="inherit" component={Link} to="/login" className={styles.navItem}>Login</Button>
        <Button color="inherit" component={Link} to="/contacts" className={styles.navItem}>Contacts</Button>
      </Toolbar>
    </AppBar>
  );
}


export default Navigation;


