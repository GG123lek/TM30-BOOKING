import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import Layout from './assets/components/Layout';
import DiscoverPage from './assets/components/Pages/DiscoverPage';
import FavoritePage from './assets/components/Pages/FavoritePage';
import BookingPage from './assets/components/Pages/BookingPage';
import LogIn from './assets/components/LogIn';
import Signup from './assets/components/SignUp';
import ForgotPassword from './assets/components/ForgotPassword';
import PasswordReset from './assets/components/PasswordReset';
import SetNewPassword from './assets/components/SetNewPassword';
import Loader from './assets/components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<DiscoverPage />} />
            <Route path="discover" element={<DiscoverPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="booking" element={<BookingPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/discover" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
