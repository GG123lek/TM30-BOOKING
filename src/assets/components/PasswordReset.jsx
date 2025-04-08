import React, { useState } from "react";
import backgroundImage from "../../assets/framesignup.png"; 
import { FaLongArrowAltLeft } from "react-icons/fa";

const PasswordReset = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); 

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  return (
    <div className="h-screen w-screen flex">
      
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
         
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Password Reset</h2>
            <p className="text-sm text-gray-500 mt-1">
              We sent a code to{" "}
              <span className="text-blue-600">primafiso@gmail.com</span>
            </p>
          </div>

          
          <div className="flex justify-between mb-6">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Continue
          </button>

          
          <div className="text-sm text-center text-gray-600 mt-4">
            <span>Didn't receive the code? </span>
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Click to resend
            </span>
          </div>

          
          <div className="text-sm text-center text-gray-600 mt-4">
            <span className="flex items-center justify-center">
             
              <FaLongArrowAltLeft className="w-5 h-5 text-gray-600 mr-2 cursor-pointer"/>
              Back to login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
