import React, { useState } from "react";
import mecss from "../../assets/mecs.png"; // Your image
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // For password show/hide icons

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-screen">

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={mecss}  // Add your image here
            alt="Forgot Password"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full h-full p-6 md:p-10 flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Forgot Password</h2>
          <p className="text-gray-600 mb-4 text-sm">No worries, lets get you back on track</p>

          <form className="space-y-3 w-full max-w-sm">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              Send Reset Link
            </button>
          </form>

          {/* "Go back to login" Link */}
          <p className="text-sm text-center text-gray-600 mt-2">
            Remember Yet?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
               login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
