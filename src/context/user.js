export const getUser = () => JSON.parse(window.localStorage.getItem('user'));

export const setUser = (newUser) => localStorage.setItem('user', JSON.stringify(newUser));
