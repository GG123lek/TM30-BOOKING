import React from "react";
import { IoArrowBack } from "react-icons/io5";

const QuickViewPageTwo = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] p-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-700 font-semibold"
      >
        <IoArrowBack className="text-xl text-black" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default QuickViewPageTwo;
