import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BookingSuccess from "./BookingSuccess";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Step Progress Bar */}
      <div className="bg-white w-full py-4 px-6 flex items-center justify-start shadow-sm mb-6">
        <div className="flex items-center w-full max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">1</div>
            <span className="ml-2 text-sm font-medium">Personal details</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">2</div>
            <span className="ml-2 text-sm font-medium">Payment</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">3</div>
            <span className="ml-2 text-sm font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex-grow px-6 py-6 bg-gray-100">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="text-gray-600 hover:text-gray-800 flex items-center mb-6"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-md font-semibold cursor-pointer">Back</span>
        </button>

        {/* Content: Left (Yellow) and Right (Red) */}
        <BookingSuccess />
      </div>
    </div>
  );
};

export default Confirmation;
