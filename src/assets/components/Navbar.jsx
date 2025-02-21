import React from "react";
import { FaSearch, FaRegBell, FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md p-4 flex items-center justify-end border-b border-gray-200">
      {/* Right Section: Search Bar + Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#D9D9D9] text-black pl-10 pr-4 py-2 w-64 rounded-md focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5C5E64] text-lg" />
        </div>

        {/* Notification & Help Icons */}
        <FaRegQuestionCircle className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer" />
        <FaRegBell className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
