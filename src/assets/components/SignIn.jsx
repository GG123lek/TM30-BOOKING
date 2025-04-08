import React from "react";
import backgroundImage from "../../assets/framesignup.png";  
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="h-screen w-screen flex">
      
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}  
      ></div>

      
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
        
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Log in to your account</h2>
            <p className="text-sm text-gray-500 mt-1">Welcome back! Please enter your details.</p>
          </div>

          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember for 30 days
              </label>
              <span className="text-blue-600 cursor-pointer hover:underline">Forgot password</span>
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Sign in
            </button>

        
            <p className="text-sm text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
            <Link to="/signinpage" className="text-blue-600 font-medium hover:underline">
              Sign up
            </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
