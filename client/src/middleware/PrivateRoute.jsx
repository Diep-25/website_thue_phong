import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const token = Cookies.get('token');
  const user = Cookies.get('user');

  if (!token || !user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default PrivateRoute;
