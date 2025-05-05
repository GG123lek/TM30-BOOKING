import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import medal from "../../assets/mecs.png"; // Ensure path is correct

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("New password set:", newPassword);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-screen">

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={medal}
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full h-full p-6 md:p-10 flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Set New Password</h2>
          <p className="text-gray-600 mb-2 text-sm">Must be at least 8 characters</p>

          <form className="space-y-3 w-full max-w-sm" onSubmit={handleSubmit}>
            {/* New Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border rounded py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-2 top-2 text-gray-600 focus:outline-none"
                >
                  {showNewPassword ? (
                    <AiOutlineEyeInvisible className="h-5 w-5 text-blue-500" />
                  ) : (
                    <AiOutlineEye className="h-5 w-5 text-blue-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border rounded py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-gray-600 focus:outline-none"
                >
                  {showConfirmPassword ? (
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
              Reset Password
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Remembered yet?{" "}
              <a href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
