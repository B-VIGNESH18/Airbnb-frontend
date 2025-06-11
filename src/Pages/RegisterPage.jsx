import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function registerUser(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    // Basic validation
    if (name.length < 3) {
      setError('Name must be at least 3 characters long.');
      setLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      const userDoc = await axios.post('https://airbnb-backend-aaky.onrender.com/register', {
        name,
        email,
        password
      }, {
        withCredentials: true
      });
      setSuccess('User registered successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      console.error('There was an error!', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex justify-center m-8 grow flex items-center justify-around bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-md w-full p-6 border rounded-md shadow-md dark:border-gray-700 dark:bg-gray-800'>
        <div className='text-center mb-4'>
          <h3 className='text-4xl mb-4 text-gray-900 dark:text-gray-100'>Register</h3>
          <h5 className='text-3xl text-gray-800 dark:text-gray-300'>Welcome to Airbnb</h5>
        </div>
        <form className='w-full' onSubmit={registerUser}>
          <input
            type="text"
            placeholder='Enter your full name'
            className='w-full p-2 mb-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder='user@gmail.com'
            className='w-full p-2 mb-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='***'
            className='w-full p-2 mb-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className='w-full bg-primary text-white p-2 rounded-md'>
            {loading ? 'Registering...' : 'Register'}
          </button>
          {success && <p className='text-green-500 text-center mt-4'>{success}</p>}
          {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
          <div className='text-center py-2 text-gray-400 dark:text-gray-500'>
            Already a member? <Link className="underline text" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
