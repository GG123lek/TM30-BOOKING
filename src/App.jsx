import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout and pages
import Layout from "./assets/components/Layout";
import DiscoverPage from "./assets/components/Pages/DiscoverPage";
import FavoritePage from "./assets/components/Pages/FavoritePage";
import BookingPage from "./assets/components/Pages/BookingPage";
import DetailPage from "./assets/components/DetailPage";
import PaymentCheckout from "./assets/components/PaymentCheckout";
import Confirmation from "./assets/components/Confirmation";
import EmptyPage from "./assets/components/EmptyPage";
import SignUp from "./assets/components/SignUp";
import Login from "./assets/components/LogIn";  
import ForgetPassword from "./assets/components/ForgotPassword";
import PasswordReset from "./assets/components/PasswordReset";
import SetNewPassword from "./assets/components/SetNewPassword";

function App() {
  return (
    <Routes>
      {/* Main app routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<DiscoverPage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="apartment/:id" element={<DetailPage />} />
        <Route path="checkout" element={<PaymentCheckout />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="empty" element={<EmptyPage />} />
      </Route>

      {/* Temporarily accessible SignUp page */}
      <Route path="/signup" element={<SignUp />} />
      
      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      <Route path="/forgot-password" element={<ForgetPassword />} />

      <Route path="/password-reset" element={<PasswordReset />} />
      
      <Route path="/setnewpassword" element={<SetNewPassword />} />
      

      
      {/* Default fallback redirect to SignUp */}
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
