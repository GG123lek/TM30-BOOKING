import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaHeart, FaBook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/4 min-h-screen bg-white shadow-md  p-6">
      {/* Home4U Logo (Aligned with "MAIN" and NavLinks) */}
      <div className="flex items-center space-x-2 mb-8 pl-4">
        <FaHome className="text-black-600 text-2xl" />
        <h3 className="text-2xl font-bold text-gray-800">Home4U</h3>
      </div>

      {/* Main & Navigation Links */}
      <p className="text-gray-500 text-sm font-semibold mb-4 pl-4">MAIN</p>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive ? "flex items-center space-x-2 text-blue-600 font-semibold pl-4" : "flex items-center space-x-2 text-gray-700 pl-4"
            }
          >
            <FaHome className="text-lg" />
            <p>Discover</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? "flex items-center space-x-2 text-blue-600 font-semibold pl-4" : "flex items-center space-x-2 text-gray-700 pl-4"
            }
          >
            <FaHeart className="text-lg" />
            <p>Favorite</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "flex items-center space-x-2 text-blue-600 font-semibold pl-4" : "flex items-center space-x-2 text-gray-700 pl-4"
            }
          >
            <FaBook className="text-lg" />
            <p>Booking</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
