import React, { useState, createContext } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
