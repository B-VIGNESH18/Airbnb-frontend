import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UseContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    return isValid;
  };

  async function handleLoginSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      const { data } = await axios.post(
        'https://airbnb-backend-aaky.onrender.com/login',
        { email, password }
       
      );
      localStorage.setItem('token', data.token);
      setUser(data.userDoc);
      setRedirect(true);
    } catch (error) {
      console.error('There was an error!', error);
      setError('Login failed. Please try again.');
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center m-8 grow items-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-6 border rounded-md shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="text-center mb-4">
          <h3 className="text-4xl mb-4 text-gray-900 dark:text-gray-100">Login or Sign up</h3>
          <h5 className="text-3xl text-gray-800 dark:text-gray-300">Welcome to Airbnb</h5>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="w-full" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            placeholder="user@gmail.com"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 mb-4">{emailError}</p>}
          <input
            type="password"
            placeholder="***"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
          <button className="w-full bg-primary text-white p-2 rounded-md">Login</button>
          <div className="text-center py-2 text-gray-400 dark:text-gray-500">
            Don't have an Account? <Link className="underline text" to={'/register'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
