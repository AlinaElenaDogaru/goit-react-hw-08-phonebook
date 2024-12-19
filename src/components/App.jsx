import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Navigation from './Navigation/Navigation.jsx';
import UserMenu from './UserMenu/UserMenu.jsx';
import { fetchContacts, addContact, deleteContact } from '../features/contacts/contactsSlice.jsx';
import { setFilter } from '../features/filter/filterSlice.jsx';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  const handleAddContact = (newContact) => {
    const duplicate = contacts.find(contact => contact.name === newContact.name);
    if (duplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Router>
      <Navigation />
      <Container className={styles.container}>
        {token ? (
          user ? (
            <>
              <UserMenu email={user.email} onLogout={handleLogout} />
              <Routes>
                <Route path="/contacts" element={
                  <>
                    <Typography variant="h3" component="h1" gutterBottom>Phonebook</Typography>
                    <ContactForm addContact={handleAddContact} />
                    <Typography variant="h4" component="h2" gutterBottom>Contacts</Typography>
                    <Filter filter={filter} setFilter={(value) => dispatch(setFilter(value))} />
                    {isLoading && <CircularProgress />}
                    {error && <Typography color="error">Error: {error}</Typography>}
                    <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
                  </>
                } />
                <Route path="*" element={<Navigate to="/contacts" />} />
              </Routes>
            </>
          ) : (
            <CircularProgress />
          )
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Container>
    </Router>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  dispatch: PropTypes.func,
  token: PropTypes.string,
  email: PropTypes.string,
};

export default App;
