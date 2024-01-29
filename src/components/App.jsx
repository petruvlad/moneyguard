import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from 'your-media-query-library'; // Înlocuiește 'your-media-query-library' cu biblioteca ta de media query

import { PrivateRoute, RestrictedRoute } from './Routes';

const Login = lazy(() => import('../components/LoginForm'));
const Dashboard = lazy(() => import('./partials/Dashboard')); // Asigură-te că ai o componentă Dashboard
const WrongPage = lazy(() => import('./partials/WrongPage')); // Asigură-te că ai o componentă WrongPage

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Asigură-te că ai un slice de stare 'auth' în store
  const token = useSelector(state => state.auth.token); // Asigură-te că ai un slice de stare 'auth' în store
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  useEffect(() => {
    if (!isLoggedIn && token) dispatch(refreshUser());
  }, [dispatch, isLoggedIn, token]);

  // Asigură-te că SpinnerLoader, ToastContainer și GlobalStyles sunt importate și definite corespunzător

  return (
    <>
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" />} // Poți schimba redirectTo="/home" cu un simplu redirect către pagina de login
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                condition={!isLoggedIn}
                component={<Login />}
              />
            }
          />
          <PrivateRoute
            path="/dashboard"
            element={<Dashboard />}
            isLoggedIn={isLoggedIn}
          />
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
      {/* Asigură-te că GlobalStyles este importată și definită corespunzător */}
    </>
  );
};

export default App;
