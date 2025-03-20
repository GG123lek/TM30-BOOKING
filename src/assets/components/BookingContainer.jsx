import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import bokpic from "../../assets/bokimage.png";
import mark from "../../assets/CheckOne.png";
import alertIcon from "../../assets/alert.png";
import { CiCalendar } from "react-icons/ci";
import PaymentPage from "./PaymentPage"; 

const BookingContainer = ({ onBack }) => {

    const [showPayment, setShowPayment] = useState(false);

    if (showPayment) {
      return <PaymentPage onBack={() => setShowPayment(false)}/>; 
    }
  

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

      <div className=" flex justify-between items-start  p-6 gap-6 min-h-[750px]">
        <div className="w-[55%] self-start  p-6 rounded-lg">
          <div className="flex items-center p-4">
            <img src={bokpic} alt="Booking Image" className="" />
            <div className="ml-4">
              <span className="text-gray-800 font-semibold text-xl block">
                Shakira Sherafin House
              </span>

              <div className="flex items-center space-x-2 mt-1">
                <div className="flex">
                  {Array(4).fill(
                    <span className="text-yellow-500 text-xl">★</span>
                  )}
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
                <span className="text-gray-600 font-medium text-sm">
                  4.5 (138 reviews)
                </span>
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

          <label className="text-gray-800 font-semibold text-lg block mt-8 px-4">
  Enter Your Details
</label>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-4 mt-4 px-4">
  {/** First Name */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">First Name</label>
    <input
      type="text"
      placeholder="Abiola"
      className="p-2 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
  </div>

  {/** Last Name */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">Last Name</label>
    <input
      type="text"
      placeholder="Fisola"
      className="p-2 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
  </div>

  {/** Email */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      placeholder="fisoprima@gmail.com"
      className="p-2 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
  </div>

  {/** Phone Number */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">Phone Number</label>
    <div className="relative flex items-center border border-gray-300 rounded-md bg-white p-2">
      <span className="text-sm font-medium px-2">+234</span>
      <input
        type="tel"
        value="9069350833"
        className="flex-1 h-full outline-none bg-transparent"
      />
    </div>
  </div>
</div>

<label className="text-gray-800 font-semibold text-lg block mt-8 px-4">
  Enter Guest Details (Optional)
</label>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-4 mt-4 px-4">
  {/** Guest First Name */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">First Name</label>
    <input
      type="text"
      placeholder="Abiola"
      className="p-2 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
  </div>

  {/** Guest Last Name */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">Last Name</label>
    <input
      type="text"
      placeholder="Fisola"
      className="p-2 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
  </div>

  {/** Guest Email */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      placeholder="guest@example.com"
      className="p-2 bg-white border border-gray-300 rounded-md w-full outline-none"
    />
  </div>

  {/** Guest Phone Number */}
  <div className="flex flex-col min-w-[260px] relative">
    <label className="text-[#344054] text-sm font-medium mb-1">Phone Number</label>
    <div className="relative flex items-center border border-gray-300 rounded-md bg-white p-2">
      <span className="text-sm font-medium px-2">+234</span>
      <input
        type="tel"
        value="9069350833"
        className="flex-1 h-full outline-none bg-transparent"
      />
    </div>
  </div>
</div>

        </div>

        <div className="w-[30%] bg-white p-6 shadow-md rounded-lg flex flex-col min-h-[400px] self-start">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-black text-xl">
                Booking Details
              </span>
              <span className="text-pink-300 text-md"></span>
            </div>
          </div>

          <div className="w-full h-[2px] bg-[#D9D9D9] my-2 "></div>

          <div className="flex items-center w-[280px]justify-between  py-4">
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#999999]">Check-in</span>
              <span className="text-sm font-medium text-gray-900">
                Jan 15, 2025
              </span>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-end items-start">
              <span className="text-xs text-[#999999]">Check-out</span>
              <span className="text-sm font-medium text-gray-900">
                March 15, 2025
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start">
           
            <span className="text-xs text-[#999999]">No. of Guests</span>

          
            <div className="flex items-center gap-2">
              <CiCalendar className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">
                2 Guests
              </span>
            </div>
          </div>

          <div className="w-full h-[2px] bg-[#D9D9D9] my-2 "></div>

          <div>
            <div>
              <p className="text-base font-semibold">Payment Details</p>
            </div>
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

              <div className="w-full h-[1px] bg-[#D9D9D9] my-2"></div>

              <div className="flex justify-between text-lg font-bold my-2">
                <span className="text-[#344054]">Total</span>
                <span className="text-gray-600">$135,050</span>
              </div>
            </div>
          </div>

           <button
          onClick={() => setShowPayment(true)}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full mt-6 cursor-pointer"
        >
          Make Payment
        </button>
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;
