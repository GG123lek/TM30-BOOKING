import React, { useState } from "react";
import mecss from "../../assets/mecs.png"; // Your image
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowLeft } from "react-icons/ai"; // For icons

const PasswordReset = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers

    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);
    if (index < 3 && value) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log("OTP submitted:", otp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-screen">

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={mecss}  // Your image here
            alt="Reset Password"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full h-full p-6 md:p-10 flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Password Reset</h2>
          <p className="text-gray-600 mb-4 text-sm">We sent a code to <strong className="text-blue-400">primafiso@gmail.com</strong></p>

          <form className="space-y-3 w-full max-w-sm" onSubmit={handleSubmit}>
            {/* OTP Fields */}
            <div className="flex justify-between space-x-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="w-12 h-12 text-center border rounded-lg text-xl font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              Continue
            </button>
          </form>

          {/* Resend Code Link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Didn't receive the code?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
              Click to resend
            </a>
          </p>

          {/* Back to Login Link */}
          <div className="mt-4 text-center">
            <a href="/login" className="flex justify-center items-center text-blue-500 hover:text-blue-700 font-semibold">
              <AiOutlineArrowLeft className="mr-2 text-lg" />
              Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
