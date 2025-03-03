import React from "react";
import { IoArrowBack, IoShareSocial ,} from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import content from "../../assets/contentimage.png";

const QuickViewPage = ({ onBack }) => {
  return (
    <div className="p-6 bg-[#FAFAFA] min-h-screen">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-700 font-semibold mb-4"
      >
        <IoArrowBack className="text-xl" />
        <span>Back</span>
      </button>
      <div className="w-fit">
        <img src={content} alt='' className="mt-4 mb-4 w-full rounded-md" />
        
        {/* Container wrapping labels and rating section */}
        <div className="flex items-center justify-between mt-2">
          {/* Left - Labels */}
          <div className="flex space-x-2">
            <div className="bg-pink-100 text-purple-300 px-2 py-1 text-xs rounded-md font-medium">Newly Added</div>
            <div className="bg-pink-200 text-purple-500 px-2 py-1 text-xs rounded-md font-medium">Top Rated</div>
          </div>
          
          {/* Right - Rating and Share Icon */}
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-gray-800 text-sm font-semibold">4.5 (138 reviews)</span>
            <IoShareSocial className="text-white text-lg cursor-pointer" />
          </div>
        </div>

        {/* Text Underneath */}
        <p className="mt-4 text-lg font-semibold text-gray-900">Shakira Sherafin House</p>
        <p className="mt-2 text-sm text-gray-700">No 12, Murry Bergtraum Softball, New York City, USA</p>
       
         {/* Description Text */}
         <p className="mt-4 text-base font-semibold text-blue-500">Description</p>
         <div className="w-5 h-[5px] bg-blue-300 mt-2"></div>

         <p className="mt-4 text-sm text-gray-500">
          At the Shakira Sherafin House, we focus on individual attention 
          as our main asset and have made a team <br/> of professionals that 
          will respond to any questions or requests available to our guests.
          <br /><br />
          Our house, completely renovated and equipped with all the 
          necessary services,<br/>will put the finishing touch to a comfortable 
          and quiet stay in a city with a lot of history.
        </p>

        <p className="mt-4 text-base font-semibold text-blue-500" >Features</p>
        <div className="w-5 h-[5px] bg-blue-300 mt-2"></div>

        <div className="mt-6 flex space-x-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <FaBed className="text-lg" />
            <span className="text-sm">5 Beds</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaWifi className="text-lg" />
            <span className="text-sm">WiFi Available</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaSwimmingPool className="text-lg" />
            <span className="text-sm">Swimming Pool</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPage;
