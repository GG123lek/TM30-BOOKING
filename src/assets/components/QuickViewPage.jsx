import React from "react";
import { IoArrowBack } from "react-icons/io5";

const QuickViewPage = ({ onBack }) => {
  return (
    <div className="p-6 flex items-center">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center text-blue-600 text-lg">
        <IoArrowBack className="mr-2 text-xl" /> Back
      </button>
    </div>
  );
};

export default QuickViewPage;
