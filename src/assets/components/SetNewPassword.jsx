import React, { useState } from 'react';
import backgroundImage from '../../assets/framesignup.png'; // Background image


const SetNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      
      console.log('Password successfully set!');
    } else {
      
      console.error('Passwords do not match');
    }
  };

  return (
    <div className="h-screen w-screen flex">
      
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
         
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Set New Password</h2>
            <p className="text-sm text-gray-500 mt-2">
               must be at least 8 characters
            </p>
          </div>

          
          <form onSubmit={handleSubmit}>
          
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="8"
              />
            </div>

            
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="8"
              />
            </div>

           
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={togglePasswordVisibility}
                className="mr-2"
              />
              <label
                htmlFor="showPassword"
                className="text-sm text-gray-500"
              >
                Show Password
              </label>
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Reset Password
            </button>
          </form>

          
          <div className="text-sm text-center text-gray-600 mt-4">
            <span>Remembered yet? </span>
            <a
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
