import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Layout from './assets/components/Layout';
import DiscoverPage from './assets/components/Pages/DiscoverPage';
import FavoritePage from './assets/components/Pages/FavoritePage';
import BookingPage from './assets/components/Pages/BookingPage';
import SignIn from './assets/components/Signin';
import SigninPage from './assets/components/SigninPage';
import ForgotPassword from './assets/components/ForgotPassword';
import PasswordReset from './assets/components/PasswordReset';
import SetNewPassword from './assets/components/SetNewPassword';
import Loader from './assets/components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authStatus = await fakeAuthCheck();
        setIsAuthenticated(authStatus);
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
          {/* Redirect any unknown routes to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signinpage" element={<SigninPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          {/* Redirect any unknown routes to the sign-in page */}
          <Route path="*" element={<Navigate to="/signin" />} />
        </>
      )}
    </Routes>
  );
}

export default App;

// Simulated authentication check function
const fakeAuthCheck = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isAuthenticated = false; // Change this based on actual auth status
      resolve(isAuthenticated);
    }, 2000); // Simulate a network delay
  });
};
