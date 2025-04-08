
import React from 'react';
import { FaHome } from 'react-icons/fa';

const Loader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
    <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    <div className="flex items-center space-x-2 mt-4">
      <FaHome className="text-black text-2xl" />
      <h3 className="text-2xl font-bold text-gray-800">Home4U</h3>
    </div>
  </div>
);

export default Loader;
