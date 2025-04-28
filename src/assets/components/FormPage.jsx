import React from "react";
import { FaCheck,FaChevronDown } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

const FormPage = () => {
  return (
    <div className=" flex flex-col items-start space-y-16">
      
      {/* Section: Enter Your Details */}
      <div className="space-y-4 w-full max-w-5xl">
        {/* Label */}
        <label className="block text-lg font-semibold">Enter Your Details</label>

        {/* Top Row: First Name + Last Name */}
        <div className="flex flex-wrap gap-x-6 gap-y-6">
          {/* First Name */}
          <div className="relative w-[300px] h-[44px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-full border border-gray-300 rounded-md px-4 pr-10 outline-none bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] text-white p-1 rounded-full text-xs">
              <FaCheck />
            </span>
          </div>

          {/* Last Name */}
          <div className="relative w-[300px] h-[44px]">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-full border border-gray-300 rounded-md px-4 pr-10 outline-none bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] text-white p-1 rounded-full text-xs">
              <FaCheck />
            </span>
          </div>
        </div>

        {/* Bottom Row: Email + Phone Number */}
        <div className="flex flex-wrap gap-x-6 gap-y-6 mt-4">
          {/* Email */}
          <div className="relative w-[300px] h-[44px]">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full border border-red-500 rounded-md px-4 pr-10 outline-none bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-100 text-white p-1 rounded-full text-xs">
            <FiAlertCircle />
            </span>
          </div>

          {/* Phone Number */}
                    <div className="relative w-[300px] h-[44px]">
            <div className="flex items-center h-full border border-gray-300 rounded-md px-3 w-full bg-white">
                <span className="text-gray-600 mr-2 flex items-center">
                +234 <FaChevronDown className="ml-1" />
                </span>
                <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 outline-none bg-white"
                />
            </div>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] text-white p-1 rounded-full text-xs">
                <FaCheck />
            </span>
            </div>

        </div>
      </div>

      {/* Section: Enter Guest Details */}
      <div className="space-y-4 w-full max-w-5xl">
        {/* Label */}
        <label className="block text-lg font-semibold">Enter Guest Details</label>

        {/* Top Row: Guest First Name + Last Name */}
        <div className="flex flex-wrap gap-x-6 gap-y-6">
          {/* Guest First Name */}
          <div className="relative w-[300px] h-[44px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-full border border-gray-300 rounded-md px-4 pr-10 outline-none bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] text-white p-1 rounded-full text-xs">
              <FaCheck />
            </span>
          </div>

          {/* Guest Last Name */}
          <div className="relative w-[300px] h-[44px]">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-full border border-gray-300 rounded-md px-4 pr-10 outline-none bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] text-white p-1 rounded-full text-xs">
              <FaCheck />
            </span>
          </div>
        </div>

        {/* Bottom Row: Guest Email + Phone Number */}
        <div className="flex flex-wrap gap-x-6 gap-y-6 mt-4">
          {/* Guest Email */}
          <div className="relative w-[300px] h-[44px]">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full border border-red-500 rounded-md px-4 pr-10 outline-none bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-100 text-white p-1 rounded-full text-xs">
            <FiAlertCircle />
            </span>
          </div>

          {/* Guest Phone Number */}
                        <div className="relative w-[300px] h-[44px]">
                <div className="flex items-center h-full border border-gray-300 rounded-md px-3 w-full bg-white">
                    <span className="text-gray-600 mr-2 flex items-center">
                    +234 <FaChevronDown className="ml-1" />
                    </span>
                    <input
                    type="text"
                    placeholder="Phone Number"
                    className="flex-1 outline-none bg-white"
                    />
                </div>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] text-white p-1 rounded-full text-xs">
                    <FaCheck />
                </span>
                </div>

        </div>
      </div>

    </div>
  );
};

export default FormPage;
