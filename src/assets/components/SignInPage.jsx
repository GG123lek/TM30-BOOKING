import React from "react";
import backgroundImage from "../../assets/framesignup.png";

const SigninPage = () => {
  return (
    <div className="h-screen w-screen flex">
     
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          
         
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#475467] mb-2">
              Create an account
            </h2>
            <p className="text-sm text-gray-500">
              Get the best from our brand now
            </p>
          </div>

          
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Sign Up
            </button>
          </form>

         
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
