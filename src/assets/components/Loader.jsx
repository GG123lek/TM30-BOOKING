// src/components/Loader.jsx
import React from "react";
import { FaHome } from "react-icons/fa"; // Import home icon from react-icons

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="flex items-center space-x-2 animate-pulse text-blue-700 drop-shadow-lg">
        <FaHome className="text-4xl font-bold" />
        <span className="text-xl font-bold">Home4U</span>
      </div>
    </div>
  );
};

export default Loader;
