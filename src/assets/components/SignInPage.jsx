import React, { useState } from "react";
import backgroundImage from "../../assets/framesignup.png";

const SigninPage = () => {
  // State to track the current step
  const [step, setStep] = useState(1);

  // Form fields for the first step (First Name, Last Name, Email)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Form fields for the second step (Username, Password, Confirm Password)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Form submitted:", { firstName, lastName, email, username, password });
    } else {
      console.error("Passwords do not match");
    }
  };

  // Move to the next step
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  // Move to the previous step
  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Left Side with Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Right Side with Form */}
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#475467] mb-2">Create an account</h2>
            <p className="text-sm text-gray-500">Get the best from our brand now</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Step: First Name, Last Name, Email */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Next Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Second Step: Username, Password, Confirm Password */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-gray-600 mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                    minLength="8"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Re-enter your password"
                    required
                    minLength="8"
                  />
                </div>

                {/* Back and Submit Buttons */}
               
                    <div className="flex space-x-4 mt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-gray-300 text-black py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Sign Up
                      </button>
                    </div>

              </>
            )}
          </form>

          {/* Sign In Link */}
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
