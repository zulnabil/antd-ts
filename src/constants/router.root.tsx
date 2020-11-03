import React, { lazy } from 'react';

const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const CreateShipment = lazy(() => import('pages/CreateShipment'));
const PendingCheckout = lazy(() => import('pages/PendingCheckout'));
const Shipments = lazy(() => import('pages/Shipments'));
const Topup = lazy(() => import('pages/Topup'));
const Transactions = lazy(() => import('pages/Transactions'));
const Account = lazy(() => import('pages/Account'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Logout = lazy(() => import('pages/Logout'));

export const router = [
  {
    path: '/',
    name: 'Dashboard',
    component: <Dashboard />,
    exact: true,
  },
  {
    path: '/create-shipment',
    name: 'CreateShipment',
    component: <CreateShipment />,
  },
  {
    path: '/pending-checkout',
    name: 'PendingCheckout',
    component: <PendingCheckout />,
  },
  {
    path: '/shipments',
    name: 'Shipments',
    component: <Shipments />,
  },
  {
    path: '/topup',
    name: 'Topup',
    component: <Topup />,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: <Transactions />,
  },
  {
    path: '/account',
    name: 'Account',
    component: <Account />,
  },
  {
    path: '/login',
    name: 'Login',
    component: <Login />,
  },
  {
    path: '/register',
    name: 'Register',
    component: <Register />,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: <Logout />,
  },
];
