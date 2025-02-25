import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaHeart, FaBook } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6"; // ✅ Correct Import
import profilepics from "../../assets/Avatar.png"

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-#D9D9D9-400 shadow-md flex flex-col relative">
      {/* Main Navigation Links */}
      <div className="p-6">
        <p className="text-gray-500 text-sm font-semibold mb-4 pl-4">MAIN</p>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 text-blue-600 font-semibold pl-4"
                  : "flex items-center space-x-2 text-gray-700 pl-4"
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
                isActive
                  ? "flex items-center space-x-2 text-blue-600 font-semibold pl-4"
                  : "flex items-center space-x-2 text-gray-700 pl-4"
              }
            >
              <FaHeart className="text-lg "  />
              <p>Favorite</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 text-blue-600 font-semibold pl-4"
                  : "flex items-center space-x-2 text-gray-700 pl-4"
              }
            >
              <FaBook className="text-lg" />

              <p>Booking</p>
            </NavLink>
          </li>
        </ul>
      </div>

     
      <div className="bg-[#FAFAFA] w-full py-4 px-6 flex items-center justify-between border-t border-gray-300 absolute bottom-1/3 left-0">
       
        <img src={profilepics} alt='' className="w-12 h-12 bg-gray-300 rounded-full"/>

        
        <p className="text-gray-700 font-medium">Prime Abiola</p>

      
        <FaArrowRightFromBracket className="text-red-500 cursor-pointer hover:text-red-500 text-lg" />
      </div>
    </div>
  );
};

export default Sidebar;
