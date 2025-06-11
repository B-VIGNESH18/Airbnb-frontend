import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import LayOut from './LayOut';
import RegisterPage from './Pages/RegisterPage';
import axios from 'axios';

import { UserContextProvider } from './UseContext';
import AccountPage from './Pages/AccountPage';
import PlacesFormPage from './Pages/PlacesFormPage';
import PlacesPages from './Pages/PlacesPages';
import { useState } from 'react';
import PlacePage from './Pages/PlacePage';
import Footer from './Pages/Footer'
import BookingsPage from './Pages/BookingsPage';
import BookingPage  from './Pages/BookingPage';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  axios.defaults.withCredentials=true;

  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300`}>
      
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
         
            <Route path="/account/places" element={<PlacesPages />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/account/places/:id" element={<PlacesPages />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route  path="/account/bookings" element={<BookingsPage />}/>
            <Route path="/account/bookings/:id" element={<BookingPage />}/>
          </Route>
        </Routes>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;

