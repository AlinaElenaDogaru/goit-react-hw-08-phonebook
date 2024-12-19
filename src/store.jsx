import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import contactsReducer from './features/contacts/contactsSlice';
import filterReducer from './features/filter/filterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;


