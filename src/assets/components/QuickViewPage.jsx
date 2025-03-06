import React, { useState } from "react"; 
import { IoArrowBack, IoShareSocial } from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import content from "../../assets/contentimage.png";
import BookingContainer from "./BookingContainer";

const QuickViewPage = ({ onBack }) => {
  const [guestDropdown, setGuestDropdown] = useState(false);
  const [isBookingPage, setIsBookingPage] = useState(false);

  if (isBookingPage) {
    return <BookingContainer onBack={() => setIsBookingPage(false)} />;
  }

  return (
    <div className="p-6 bg-[#FAFAFA] min-h-screen">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-700 font-semibold mb-4 cursor-pointer"
      >
        <IoArrowBack className="text-xl" />
        <span>Back</span>
      </button>

      <div className="flex justify-between items-start">
        <div className="w-[50%]">
          <img src={content} alt="" className="mt-4 mb-4 w-full rounded-md" />

          <div className="flex items-center justify-between mt-2">
            <div className="flex space-x-2">
              <div className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md font-medium">Newly Added</div>
              <div className="bg-green-500 text-white px-2 py-1 text-xs rounded-md font-medium">Top Rated</div>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-gray-800 text-sm font-semibold">4.5 (138 reviews)</span>
              <IoShareSocial className="text-gray-600 text-lg cursor-pointer" />
            </div>
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-900">Shakira Sherafin House</p>
          <p className="mt-2 text-sm text-gray-700">No 12, Murry Bergtraum Softball, New York City, USA</p>
          <p className="mt-6 text-base font-semibold text-gray-900">Description</p>
          <div className="w-12 h-[2px] bg-gray-300 mt-2"></div>
          <p className="mt-4 text-sm text-gray-700">
            At the Shakira Sherafin House, we focus on individual attention as our main asset and have made a team of professionals that will respond to any questions or requests available to our guests.
            <br /><br />
            Our house, completely renovated and equipped with all the necessary services, will put the finishing touch to a comfortable and quiet stay in a city with a lot of history.
          </p>
          <p className="mt-4 text-base font-semibold text-blue-500">Features</p>
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

        {/* Booking Section */}
        <div className="w-[40%] bg-white p-6 shadow-md rounded-md flex flex-col min-h-[550px]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="font-bold text-black">$45,000</span>
              <span className="text-pink-300">/month</span>
            </div>
            <div className="bg-[#00D77D] text-white px-2 py-1 text-xs rounded-md font-medium">30% Off</div>
          </div>

          <div className="w-full h-[2px] bg-[#D9D9D9] mb-4"></div>

          <form className="flex flex-col space-y-4 flex-grow">
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2">
                <label className="text-[#344054] text-sm font-medium mb-1">Check-in</label>
                <input type="text" placeholder="Jan 15, 2025" className="p-2 border border-[#D9D9D9] rounded-md w-full outline-none" />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-[#344054] text-sm font-medium mb-1">Check-out</label>
                <input type="text" placeholder="March 15, 2025" className="p-2 border border-[#D9D9D9] rounded-md w-full outline-none" />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-[#344054] text-sm font-medium mb-1">No. of Guests</label>
              <div className="relative w-full">
                <input type="text" placeholder="Select Guests" className="p-2 border border-[#D9D9D9] rounded-md w-full outline-none" />
                <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" 
                  onClick={() => setGuestDropdown(!guestDropdown)}
                />
              </div>
            </div>

            {/* Ensure pricing text remains in place */}
            <div className="mt-auto">
              <div className="flex justify-between text-lg mt-4">
                <span>
                  <span className="font-light text-[#344054]">$45,000</span>
                  <span className="text-[#344054]"> x 3 months</span>
                </span>
                <span className="text-gray-600 font-bold">$135,000</span> 
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-[#344054]">Home4U service fee</span>
                <span className="text-gray-600 font-bold">$50</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9] my-4"></div>

              <div className="flex justify-between text-lg font-bold">
                <span className="text-[#344054]">Total</span>
                <span className="text-gray-600">$135,050</span>
              </div>
            </div>

            <button 
              type="button"
              onClick={() => setIsBookingPage(true)}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full mt-4 cursor-pointer"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPage;
