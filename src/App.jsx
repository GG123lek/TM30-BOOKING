import React from "react";
import { Routes, Route } from "react-router-dom";  
import Layout from "./assets/components/Layout";
import DiscoverPage from "./assets/components/Pages/DiscoverPage";
import FavoritePage from "./assets/components/Pages/FavoritePage";
import BookingPage from "./assets/components/Pages/BookingPage";
import SignInPage from "./assets/components/SignInPage"; 
import SignIn from "./assets/components/Signin"; 
import ForgotPassword from "./assets/components/ForgotPassword"; 
import PasswordReset from "./assets/components/PasswordReset";
import SetNewPassword from "./assets/components/SetNewPassword";

function App() {
  return (
    <Routes>
      
      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signinpage" element={<SignInPage />} /> 
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/set-new-password" element={<SetNewPassword />} />
     

      <Route path="/" element={<Layout />}>
        <Route index element={<DiscoverPage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
