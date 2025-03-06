import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool } from "react-icons/fa";
import bokpic from "../../assets/bokimage.png";

const BookingContainer = ({ onBack }) => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="bg-white shadow-md border-b border-[#D9D9D9] py-4 px-6 flex items-center justify-center relative">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#305FEC] text-white font-bold rounded-full">
              1
            </div>
            <span className="text-gray-700 font-medium">Personal Details</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">
              2
            </div>
            <span className="text-gray-700 font-medium">Payment</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">
              3
            </div>
            <span className="text-gray-700 font-medium">Confirmation</span>
          </div>
        </div>
      </div>
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-700 font-semibold mb-2 cursor-pointer px-6 py-8"
      >
        <IoArrowBack className="text-xl" />
        <span>Back</span>
      </button>
      <div className="flex items-center px-6">
        <img src={bokpic} alt="Booking Image" className="" />
        <div className="ml-4">
          <span className="text-gray-800 font-semibold text-lg block">
            Shakira Sherafin House
          </span>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-300 text-xl">★</span>
            </div>
            <span className="text-gray-600 font-medium text-sm">4.5 (138 reviews)</span>
          </div>
          <div className="flex space-x-4 mt-3">
            <div className="bg-pink-200 text-[#9747FF] px-3 py-1 rounded-md text-sm font-semibold">
              Top Rated
            </div>
            <div className="bg-pink-200 text-[#800080] px-3 py-1 rounded-md text-sm font-semibold">
              Newly Added
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-3">
            <div className="flex items-center space-x-1 text-gray-700 text-sm">
              <FaBed className="text-lg" />
              <span>3 Bed</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-700 text-sm">
              <FaWifi className="text-lg" />
              <span>WiFi Available</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-700 text-sm">
              <FaSwimmingPool className="text-lg" />
              <span>Swimming Pool</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;
