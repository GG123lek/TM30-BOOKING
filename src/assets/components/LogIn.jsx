import React, { useState } from "react";
import medal from "../../assets/mecs.png"; // Update with your correct path
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icons from react-icons

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-screen">

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={medal}
            alt="Image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full h-full p-6 md:p-10 flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Log into your account</h2>
          <p className="text-gray-600 text-sm mb-4">Welcome back! Please enter your details.</p>

          <form className="space-y-3 w-full max-w-sm">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border rounded py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="h-5 w-5 text-blue-500" />
                  ) : (
                    <AiOutlineEye className="h-5 w-5 text-blue-500" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              Log In
            </button>
          </form>

          {/* "Don't have an account?" Link */}
          <p className="text-sm text-center text-gray-600 mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
