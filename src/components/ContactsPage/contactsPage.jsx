import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getIsLoggedIn } from '../../features/authSelectors';
import styles from './contactsPage.module.css';

function ContactsPage() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return <p>Please login to view your contacts.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Your Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
