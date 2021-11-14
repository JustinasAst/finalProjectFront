import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
	const authContext = useContext(AuthContext);
	return authContext.token ? children : <Navigate replace to='/login' />;
};

export default PrivateRoute;
