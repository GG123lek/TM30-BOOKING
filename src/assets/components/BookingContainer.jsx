import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool } from "react-icons/fa";
import bokpic from "../../assets/bokimage.png";
import PaymentPage from "./PaymentPage";
import Loader from "../components/Loader"; // Import the loader

const BookingContainer = ({ onBack, reservationData }) => {
  const [phone, setPhone] = useState("9069350833");
  const [guestPhone, setGuestPhone] = useState("9069350833");
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [loading, setLoading] = useState(true); // loader state

  // Fake data loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1.5 seconds
    }, 1500); // 1.5s fake load time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleGuestPhoneChange = (e) => setGuestPhone(e.target.value);

  if (loading) return <Loader />; // Show loader during data load

  if (showPaymentPage) {
    return <PaymentPage onBack={() => setShowPaymentPage(false)} />;
  }

  // Extracting reservation data (assuming it’s passed down as props)
  const { posts, checkIn, checkOut, totalPrice, guests } = reservationData;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="bg-white shadow-md border-b border-[#D9D9D9] py-4 px-6 flex items-center justify-center relative">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#305FEC] text-white font-bold rounded-full">1</div>
            <span className="text-gray-700 font-medium">Personal Details</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">2</div>
            <span className="text-gray-700 font-medium">Payment</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">3</div>
            <span className="text-gray-700 font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      <button onClick={onBack} className="flex items-center space-x-2 text-gray-700 font-semibold cursor-pointer pl-8 pt-6">
        <IoArrowBack className="text-xl" />
        <span>Back</span>
      </button>

      <div className="flex justify-between items-start p-6 gap-6 min-h-[750px]">
        <div className="w-[55%] self-start p-6 rounded-lg">
          {/* House Info */}
          <div className="flex items-center p-4">
            <img src={bokpic} alt="Booking Image" />
            <div className="ml-4">
              <span className="text-gray-800 font-semibold text-xl block">{posts.house}</span>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex">
                  {Array(5).fill().map((_, index) => (
                    <span key={index} className={index < 4 ? "text-yellow-500 text-xl" : "text-yellow-300 text-xl"}>★</span>
                  ))}
                </div>
                <span className="text-gray-600 font-medium text-sm">4.5 (138 reviews)</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <div className="bg-pink-200 text-[#9747FF] px-3 py-1 rounded-md text-sm font-semibold">Top Rated</div>
                <div className="bg-pink-200 text-[#800080] px-3 py-1 rounded-md text-sm font-semibold">Newly Added</div>
              </div>
              <div className="flex items-center space-x-6 mt-3">
                <div className="flex items-center space-x-1 text-gray-700 text-sm"><FaBed className="text-lg" /><span>{posts.beds} Bed</span></div>
                <div className="flex items-center space-x-1 text-gray-700 text-sm"><FaWifi className="text-lg" /><span>WiFi Available</span></div>
                <div className="flex items-center space-x-1 text-gray-700 text-sm"><FaSwimmingPool className="text-lg" /><span>Swimming Pool</span></div>
              </div>
            </div>
          </div>

          {/* User Details */}
          <label className="text-gray-800 font-semibold text-lg block mt-8 px-4">Enter Your Details</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 mt-4 px-4">
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">First Name</label><input type="text" placeholder="Abiola" className="p-2 bg-white border border-gray-300 rounded-md" /></div>
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">Last Name</label><input type="text" placeholder="Fisola" className="p-2 bg-white border border-gray-300 rounded-md" /></div>
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">Email</label><input type="email" placeholder="fisoprima@gmail.com" className="p-2 bg-white border border-gray-300 rounded-md" /></div>
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">Phone Number</label>
              <div className="flex items-center border border-gray-300 rounded-md bg-white p-2"><span className="text-sm font-medium px-2">+234</span><input type="tel" value={phone} onChange={handlePhoneChange} className="flex-1 outline-none bg-transparent" /></div>
            </div>
          </div>

          {/* Guest Details */}
          <label className="text-gray-800 font-semibold text-lg block mt-8 px-4">Enter Guest Details (Optional)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 mt-4 px-4">
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">First Name</label><input type="text" placeholder="Abiola" className="p-2 bg-white border border-gray-300 rounded-md" /></div>
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">Last Name</label><input type="text" placeholder="Fisola" className="p-2 bg-white border border-gray-300 rounded-md" /></div>
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">Email</label><input type="email" placeholder="guest@example.com" className="p-2 bg-white border border-gray-300 rounded-md" /></div>
            <div className="flex flex-col"><label className="text-[#344054] text-sm font-medium mb-1">Phone Number</label>
              <div className="flex items-center border border-gray-300 rounded-md bg-white p-2"><span className="text-sm font-medium px-2">+234</span><input type="tel" value={guestPhone} onChange={handleGuestPhoneChange} className="flex-1 outline-none bg-transparent" /></div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="w-[30%] bg-white p-6 shadow-md rounded-lg flex flex-col min-h-[400px] self-start">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-black text-xl">Booking Details</span>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#D9D9D9] my-2 "></div>
          <div className="flex items-center justify-between py-4">
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#999999]">Check-in</span>
              <span className="text-sm font-medium text-gray-900">{checkIn}</span>
            </div>
            <div className="w-px h-8 bg-gray-300 mx-4"></div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-[#999999]">Check-out</span>
              <span className="text-sm font-medium text-gray-900">{checkOut}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="text-sm font-semibold text-gray-700">Total Price</div>
            <div className="text-sm font-semibold text-gray-700">{totalPrice}</div>
          </div>

          <button
            onClick={() => setShowPaymentPage(true)}
            className="bg-[#305FEC] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#264b8c] transition-all duration-300 mt-8"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;
