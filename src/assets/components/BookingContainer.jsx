import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool } from "react-icons/fa";
import bokpic from "../../assets/bokimage.png";
import mark from "../../assets/CheckOne.png"
import alertIcon from "../../assets/alert.png"
import maple from "../../assets/maple.png"
const BookingContainer = ({ onBack }) => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="bg-white shadow-md border-b border-[#D9D9D9] py-4 px-6 flex items-center justify-center relative">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#305FEC] text-white font-bold rounded-full">
              1
            </div>
            <span className="text-gray-700 font-medium">Personal Details</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">
              2
            </div>
            <span className="text-gray-700 font-medium">Payment</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">
              3
            </div>
            <span className="text-gray-700 font-medium">Confirmation</span>
          </div>
        </div>
      </div>
     
     
      <button
      onClick={onBack}
      className="flex items-center space-x-2 text-gray-700 font-semibold cursor-pointer pl-8 pt-6"
    >
      <IoArrowBack className="text-xl" />
      <span>Back</span>
    </button>
     
    <div className="relative flex justify-between items-start p-6 space-x-8  min-h-[750px]">
  
 
  <div className="w-[55%] self-start  p-6 rounded-lg">
    
   
    <div className="flex items-center p-4">  
      <img src={bokpic} alt="Booking Image" className="" />
      <div className="ml-4">
        <span className="text-gray-800 font-semibold text-xl block">
          Shakira Sherafin House
        </span>

      
        <div className="flex items-center space-x-2 mt-1">
          <div className="flex">
            {Array(4).fill(<span className="text-yellow-500 text-xl">★</span>)}
            <span className="text-yellow-300 text-xl">★</span>
          </div>
          <span className="text-gray-600 font-medium text-sm">4.5 (138 reviews)</span>
        </div>

       
        <div className="flex space-x-4 mt-2">
          <div className="bg-pink-200 text-[#9747FF] px-3 py-1 rounded-md text-sm font-semibold">
            Top Rated
          </div>
          <div className="bg-pink-200 text-[#800080] px-3 py-1 rounded-md text-sm font-semibold">
            Newly Added
          </div>
        </div>

       
        <div className="flex items-center space-x-6 mt-3">
          <div className="flex items-center space-x-1 text-gray-700 text-sm">
            <FaBed className="text-lg" />
            <span>3 Bed</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-700 text-sm">
            <FaWifi className="text-lg" />
            <span>WiFi Available</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-700 text-sm">
            <FaSwimmingPool className="text-lg" />
            <span>Swimming Pool</span>
          </div>
        </div>
      </div>
    </div>

  
    <label className="text-gray-800 font-semibold text-lg block mt-6 ml-4">
      Enter Your Details
    </label>

    <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-4 ml-4">
  {/* First Name */}
  <div className="flex flex-col w-[250px] relative">
  <label className="text-[#344054] text-sm font-medium mb-1">First Name</label>
  <div className="relative">
    <input 
      type="tel" 
      placeholder="Abiola" 
      className="p-3 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
    <img src={mark} alt="Alert Icon" 
      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
    />
  </div>
</div>
 

  {/* Last Name */}
  <div className="flex flex-col w-[250px] relative">
  <label className="text-[#344054] text-sm font-medium mb-1">Last Name</label>
  <div className="relative">
    <input 
      type="tel" 
      placeholder="Fisola" 
      className="p-3 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
    <img src={mark} alt="Alert Icon" 
      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
    />
  </div>
</div>
  

  {/* Phone Number */}
  <div className="flex flex-col w-[250px] relative">
  <label className="text-[#344054] text-sm font-medium mb-1">Email</label>
  <div className="relative">
    <input 
      type="tel" 
      placeholder="fisoprima@gmailcom" 
      className="p-3 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
    <img src={alertIcon} alt="Alert Icon" 
      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
    />
  </div>
</div>



  <div className="flex flex-col w-[250px] relative">
  <label className="text-[#344054] text-sm font-medium mb-1">Phone Number</label>
  <div className="relative">
    <input 
      type="tel" 
      placeholder="+1234567890" 
      className="p-3 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
    <img src={mark} alt="Alert Icon" 
      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
    />
  </div>
</div>

</div>


  
    <label className="text-gray-800 font-semibold text-lg block mt-8 ml-4">
      Enter Guest Details (Optional)
    </label>

    <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-4 ml-4">
     
      <div className="flex flex-col w-[250px]">
        <label className="text-[#344054] text-sm font-medium mb-1">Guest First Name</label>
        <input 
          type="text" 
          placeholder="Guest Name" 
          className="p-3 bg-gray-100 rounded-md w-[120%] outline-none"
        />
      </div>

     
      <div className="flex flex-col w-[250px]">
        <label className="text-[#344054] text-sm font-medium mb-1">Guest Last Name</label>
        <input 
          type="text" 
          placeholder="Guest Last Name" 
          className="p-3 bg-gray-100 rounded-md w-[120%] outline-none"
        />
      </div>

    
      <div className="flex flex-col w-[250px]">
        <label className="text-[#344054] text-sm font-medium mb-1">Guest Phone Number</label>
        <input 
          type="tel" 
          placeholder="+1234567890" 
          className="p-3 bg-gray-100 rounded-md w-[120%] outline-none"
        />
      </div>

      
      <div className="flex flex-col w-[250px]">
        <label className="text-[#344054] text-sm font-medium mb-1">Guest Email</label>
        <input 
          type="email" 
          placeholder="guest@example.com" 
          className="p-3 bg-gray-100 rounded-md w-[120%] outline-none"
        />
      </div>
    </div>

  </div>

  <div className="w-[40%] bg-white p-6 shadow-md rounded-lg flex flex-col min-h-[550px] self-start">
    <div className="flex justify-between items-center">
      <div>
        <span className="font-bold text-black text-xl">$45,000</span>
        <span className="text-pink-300 text-md">/month</span>
      </div>
      <div className="bg-[#00D77D] text-white px-3 py-1 text-xs rounded-md font-medium">
        30% Off
      </div>
    </div>

    <div className="w-full h-[2px] bg-[#D9D9D9] my-2"></div>

    <form className="flex flex-col space-y-6 flex-grow">
      <div className="flex space-x-6">
        <div className="flex flex-col w-1/2">
          <label className="text-[#344054] text-sm font-medium mb-1">Check-in</label>
          <input type="text" placeholder="Jan 15, 2025" className="p-2 bg-gray-100 rounded-md w-full outline-none" />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-[#344054] text-sm font-medium mb-1">Check-out</label>
          <input type="text" placeholder="March 15, 2025" className="p-2 bg-gray-100 rounded-md w-full outline-none" />
        </div>
      </div>
    </form>
  </div>
</div>





     
    </div>
  );
};

export default BookingContainer;
