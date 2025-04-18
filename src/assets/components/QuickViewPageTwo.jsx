import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { IoArrowBack, IoShareSocial } from "react-icons/io5";
import { FaBed, FaWifi, FaSwimmingPool, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import content from "../../assets/contentimage.png";
import BookingContainer from "./BookingContainer";

// Custom Guest Dropdown Component
const GuestDropdown = ({ guests, setGuests }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setGuests(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="p-2 border rounded-md cursor-pointer flex justify-between items-center"
      >
        <span>{guests ? `${guests} Guest${guests > 1 ? 's' : ''}` : "Select guests"}</span>
        <IoIosArrowDown className="text-gray-500" />
      </div>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto">
          {[...Array(10)].map((_, i) => (
            <li
              key={i + 1}
              onClick={() => handleSelect(i + 1)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {i + 1} Guest{i + 1 > 1 ? "s" : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const QuickViewPageTwo = ({ id, onBack }) => {
  const [isBookingPage, setIsBookingPage] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  // ✅ Loading state

  // Form state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  useEffect(() => {
    const fetchReservationDetails = async () => {
      setLoading(true);  // Start loading
      try {
        const response = await axios.get(`https://home4u-3.onrender.com/reservation/${id}/`);
        setReservationDetails(response.data);
        setLoading(false);  // Stop loading when data is fetched
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);  // Stop loading in case of error
        console.error('Error fetching reservation details:', error);
      }
    };

    if (id) {
      fetchReservationDetails();
    }
  }, [id]);

  if (isBookingPage) {
    return (
      <BookingContainer 
        onBack={() => setIsBookingPage(false)} 
        reservationData={reservationDetails}
      />
    );
  }

  if (loading) return <div>Loading...</div>;  // ✅ Loading feedback
  if (error) return <div>{error}</div>;
  if (!reservationDetails) return <div>No details available</div>;

  const { posts } = reservationDetails;

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
        {/* Left Content */}
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
          <p className="mt-4 text-lg font-semibold text-gray-900">{posts.house}</p>
          <p className="mt-2 text-sm text-gray-700">{posts.address}</p>
          <p className="mt-6 text-base font-semibold text-gray-900">Description</p>
          <div className="w-12 h-[2px] bg-gray-300 mt-2"></div>
          <p className="mt-4 text-sm text-gray-700">{posts.description}</p>
          <p className="mt-4 text-base font-semibold text-blue-500">Features</p>
          <div className="w-5 h-[5px] bg-blue-300 mt-2"></div>
          <div className="mt-6 flex space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaBed className="text-lg" />
              <span className="text-sm">{posts.beds} Beds</span>
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
              <span className="font-bold text-black">${posts.price}</span>
              <span className="text-pink-300">/month</span>
            </div>
            <div className="bg-[#00D77D] text-white px-2 py-1 text-xs rounded-md font-medium">30% Off</div>
          </div>

          <form className="flex flex-col space-y-4 flex-grow">
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2">
                <label className="text-sm font-medium mb-1">Check-in</label>
                <input 
                  type="date" 
                  value={checkIn} 
                  onChange={(e) => setCheckIn(e.target.value)} 
                  className="p-2 border rounded-md" 
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm font-medium mb-1">Check-out</label>
                <input 
                  type="date" 
                  value={checkOut} 
                  onChange={(e) => setCheckOut(e.target.value)} 
                  className="p-2 border rounded-md" 
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1">No. of Guests</label>
              <GuestDropdown guests={guests} setGuests={setGuests} />
            </div>

            <div className="mt-auto">
              <div className="flex justify-between text-lg mt-4">
                <span>${dailyPrice.toFixed(2)} x 3 days</span>
                <span className="text-gray-600 font-bold">${(dailyPrice * 3).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-[#344054]">Home4U service fee</span>
                <span className="text-gray-600 font-bold">$50</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9] my-4"></div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-gray-600">${(dailyPrice * 3 + 50).toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="button"
              onClick={async () => {
                try {
                  const payload = {
                    check_in: checkIn,
                    check_out: checkOut,
                    guests: guests,
                  };

                  const response = await axios.post(
                    `https://home4u-3.onrender.com/reservation/${id}/create/`,
                    payload
                  );

                  console.log("Reservation created:", response.data);

                  setReservationDetails((prev) => ({
                    ...prev,
                    newReservation: response.data,
                    checkIn,
                    checkOut,
                    guests,
                  }));

                  setIsBookingPage(true);
                } catch (err) {
                  console.error("Failed to create reservation:", err);
                  alert("Booking failed. Please try again.");
                }
              }}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPageTwo;
