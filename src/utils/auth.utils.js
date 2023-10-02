// utils/auth.js

import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Replace with your actual API URL

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to store the JWT token in local storage
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('jwtToken', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('jwtToken');
  }
};

// Function to log out a user and remove the JWT token
export const logoutUser = () => {
  setAuthToken(null);
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('jwtToken');

  if (token) {
    return true;
  }

  return false;
};
