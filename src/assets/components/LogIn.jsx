import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../../assets/framesignup.png";
import SuccessModal from "./SuccessModal";

const LogIn = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://home4u-3.onrender.com/login/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username, 
          password 
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.detail || 
          data.message || 
          `Login failed with status ${response.status}`
        );
      }

      const data = await response.json();
      localStorage.setItem("token", data.access);
      localStorage.setItem("username", username);
      localStorage.setItem("userData", JSON.stringify(data.user || {}));
      

      setIsAuthenticated(true);
      setShowSuccessModal(true);

      setTimeout(() => {
        navigate("/discover");
      }, 2000);

    } catch (err) {
      let errorMessage = err.message;
      
      if (err.message.includes("Failed to fetch")) {
        errorMessage = "Could not connect to server. Please check your internet connection.";
      } else if (err.message.includes("Network error")) {
        errorMessage = "Network error. Is the backend server running?";
      }

      setError(errorMessage);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Login Form */}
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Log in to your account</h2>
            <p className="text-sm text-gray-500 mt-1">Welcome back! Please enter your details.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-lg">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="6"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2 rounded text-blue-600 focus:ring-blue-500" 
                />
                Remember for 30 days
              </label>
              <Link 
                to="/forgot-password" 
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : "Sign in"}
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal 
          message="Login successful! Redirecting to your dashboard..."
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default LogIn;
