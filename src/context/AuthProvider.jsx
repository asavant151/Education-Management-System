import React, { createContext, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUserContext] = useState(null);

  const setUserWithRedux = (userData) => {
    setUserContext(userData);
    dispatch(setUser(userData));
  };

  return (
    <AuthContext.Provider value={{ user, setUser: setUserWithRedux }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
