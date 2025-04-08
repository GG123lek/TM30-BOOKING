import React from "react";
import backgroundImage from "../../assets/framesignup.png";  
const ForgotPassword = () => {
  return (
    <div className="h-screen w-screen flex">
      
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}  
      ></div>

     
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
         
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Forgot your password?</h2>
            <p className="text-sm text-gray-500 mt-1">No worries, let’s get you back on track.</p>
          </div>

         
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Reset Password
            </button>

           
            <p className="text-sm text-center text-gray-600 mt-4">
              Remembered yet?{" "}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                Login here
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
