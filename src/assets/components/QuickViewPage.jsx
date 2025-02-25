import React from "react";
import { IoArrowBack } from "react-icons/io5";

const QuickViewPage = ({ onBack }) => {
  return (
    <div className="p-6 bg-[#FAFAFA] min-h-screen flex items-start">
      <button 
        onClick={onBack} 
        className="text-gray-700 text-2xl flex items-center gap-2 cursor-pointer"
      >
        <IoArrowBack className="text-3xl" />
        <span className="text-lg">Back</span>
      </button>
    </div>
  );
};

export default QuickViewPage;
