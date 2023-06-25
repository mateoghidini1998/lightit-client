import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
 
export default function PrivateRoute({ children }) {
  let location = useLocation();
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  
  if (!isAuthenticated && !isLoading) {
    return <Navigate to='/' state={{ from: location }} replace />;
  } else {
    return children;
  }
}