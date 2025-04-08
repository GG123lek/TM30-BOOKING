import React from "react";
import { Routes, Route } from "react-router-dom";  
import Layout from "./assets/components/Layout";
import DiscoverPage from "./assets/components/Pages/DiscoverPage";
import FavoritePage from "./assets/components/Pages/FavoritePage";
import BookingPage from "./assets/components/Pages/BookingPage";
import SignInPage from "./assets/components/SignInPage"; 
import SignIn from "./assets/components/Signin"; 

function App() {
  return (
    <Routes>
      
      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signinpage" element={<SignInPage />} /> 
     

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
