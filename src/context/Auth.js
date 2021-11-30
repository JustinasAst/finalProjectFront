/* import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState();
	return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

export default AuthProvider; */

/* import React, { useState, createContext } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

	const [user, setUser] = useState();
	
	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
 */

/* import React, { createContext } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const user = JSON.parse(window.localStorage.getItem('user'));

	const setUser = (newUser) => localStorage.setItem('user', JSON.stringify(newUser));

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
 */
