// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser } from '@/utils/auth.utils'; // Import your authentication functions
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Used to determine if authentication data is being loaded

  // Function to log in a user and store the access token
  const login = async (username, password) => {
    try {
      const response = await loginUser({ username, password });
      const { token } = response;
      // Store the token in local storage for future use
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userID', response.user._id);
      // Set the user state
      setUser(response.user);
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');

    // Clear the user state
    setUser(null);
  };

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUser(true);

      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
