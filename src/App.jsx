// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./assets/components/Layout";
import DiscoverPage from "./assets/components/Pages/DiscoverPage";
import FavoritePage from "./assets/components/Pages/FavoritePage";
import Loader from "./assets/components/Loader";
import BookingPage from "./assets/components/Pages/BookingPage";
import DetailPage from "./assets/components/DetailPage";
import EmptyPage from "./assets/components/EmptyPage"

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
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
            <Route path="apartment/:id" element={<DetailPage />} />
            <Route path="/empty" element={<EmptyPage />} />
            <Route path="*" element={<Navigate to="/discover" />} />
          </Route>
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App; // Ensure you have this line!
