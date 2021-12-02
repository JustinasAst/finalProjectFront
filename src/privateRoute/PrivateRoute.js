import { getUser } from '../context/user';
import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
	return getUser() ? children : <Navigate replace to='/login' />;
};

export default PrivateRoute;
