import { getUser } from '../context/user';
/* import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const token = window.localStorage.getItem('token');
	return token.user ? children : <Navigate replace to='/login' />;
};

export default PrivateRoute; */

import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
	/* const authContext = useContext(AuthContext); */

	return getUser() ? children : <Navigate replace to='/login' />;
};

export default PrivateRoute;
