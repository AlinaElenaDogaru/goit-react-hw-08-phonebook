import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import PrivateRoute from '../features/PrivateRoute';
import PublicRoute from '../features/PublicRoute';
import RegisterPage from '../components/Register/Register';
import LoginPage from '../components/Login/Login';
import ContactsPage from '../components/ContactsPage/contactsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUserThunk } from '../features/authThunks';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
