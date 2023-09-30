import { Routes, Route } from 'react-router-dom';
import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SharedLayoutRestricted from './SharedLayoutRest';
import SharedLayoutPrivate from './SharedLayoutPriv';
import PrivateRoute from '../components/PrivateRoute';
import RestrictedRoute from '../components/RestrictedRoute';
import Login from '../pages/login';
import { refreshUser } from '../redux/auth/actions';

const Registration = lazy(() => import('../pages/registration'));
const DashBoard = lazy(() => import('../pages/dashboard'));
const Currency = lazy(() => import('../components/Currency/Currency'));
const Statistics = lazy(() => import('../pages/statistics'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="Wallet/" element={<SharedLayoutRestricted />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/Wallet/dashboard"
                component={<Login />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/Wallet/dashboard"
                component={<Registration />}
              />
            }
          />
        </Route>
        <Route path="Wallet/dashboard" element={<SharedLayoutPrivate />}>
          <Route
            index
            element={
              <PrivateRoute
                redirectTo="/Wallet/"
                component={<DashBoard />}
              />
            }
          />
          <Route
            path="diagram"
            element={
              <PrivateRoute
                redirectTo="/Wallet/"
                component={<Statistics />}
              />
            }
          />
          <Route
            path="currency"
            element={
              <PrivateRoute
                redirectTo="/Wallet/"
                component={<Currency />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
