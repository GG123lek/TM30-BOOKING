import React from "react";
import { useNavigate } from "react-router-dom";

const NewForm = () => {

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/checkout");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md font-sans">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Booking details</h1>

      {/* Check-in / Divider / Check-out */}
      <div className="flex items-center justify-between mb-6">
        {/* Check-in */}
        <div className="flex flex-col text-left w-[45%]">
          <p className="text-gray-500 text-sm mb-1">Check-in</p>
          <p className="font-medium text-gray-900">Jan 15, 2025</p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-gray-300"></div>

        {/* Check-out */}
        <div className="flex flex-col text-left w-[45%]">
          <p className="text-gray-500 text-sm mb-1">Check-out</p>
          <p className="font-medium text-gray-900">March 15, 2025</p>
        </div>
      </div>

      {/* No. of Guests */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm mb-1">No. of guests</p>
        <p className="font-medium text-gray-900">2 Guests</p>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-6" />

      {/* Payment Details */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Payment Details</h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span>$45,000 × 3 months</span>
            <span>$135,000</span>
          </div>

          <div className="flex justify-between">
            <span>Home4U service fee</span>
            <span>$50</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-6" />

      {/* Total Section */}
      <div className="flex justify-between items-center mb-8">
        <span className="font-bold text-gray-900">Total</span>
        <span className="font-bold text-lg text-gray-900">$135,050</span>
      </div>

      {/* Payment Button */}
      <button 
      onClick={handlePayment}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3
       px-4 rounded-md transition-colors cursor-pointer">
        Make payment
      </button>
    </div>
  );
};

export default NewForm;
