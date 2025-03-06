import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import ApartmentCard from "../../components/ApartmentCard"; 
import QuickViewPage from "../../components/QuickViewPage"; 
import QuickViewPageTwo from "../../components/QuickViewPageTwo"; 

import houseOne from "../../../assets/sulephototwo.png";
import houseTwo from "../../../assets/sulephotoone.png";
import houseThree from "../../../assets/sulephotothree.png";
import houseFour from  "../../../assets/sulephotofour.png";
import houseFive from "../../../assets/sulephotofive.png";
import houseSix from "../../../assets/sulephotosix.png"

import { FaWifi, FaBed, FaSwimmingPool } from "react-icons/fa";

const BookingPage = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isQuickViewTwoOpen, setIsQuickViewTwoOpen] = useState(false);

  const apartments = [
    {
      image: houseOne,
      name: "The Regen House",
      price: 20000,
      location: "Los Angeles, USA",
      rating: 4,
      reviews: 130,
      features: [
        { icon: <FaBed className="text-lg" />, label: " 3 Beds" },
        { icon: <FaWifi className="text-lg" />, label: "WiFi Available" },
        { icon: <FaSwimmingPool className="text-lg" />, label: "Swimming Pool" },
      ],
    },
    {
      image: houseTwo,
      name: "Shakira Sherafin House",
      price: 45000,
      location: "New York City, USA",
      rating: 5,
      reviews: 130,
      features: [
        { icon: <FaBed className="text-lg" />, label: "5 Beds" },
         { icon: <FaWifi className="text-lg" />, label: "WiFi Available" },
        { icon: <FaSwimmingPool className="text-lg" />, label: "Swimming Pool" },
      ],
    },
    {
      image: houseThree,
      name: "White House",
      price: 120000,
      location: "Los Angeles, USA",
      rating: 4,
      reviews: 130,
      features: [
        { icon: <FaBed className="text-lg" />, label: "11 Beds" },
        { icon: <FaWifi className="text-lg" />, label: "WiFi Available" },
        { icon: <FaSwimmingPool className="text-lg" />, label: "Swimming Pool" },
      ],
    },
    {
      image: houseFour,
      name: "Obi’s House",
      price: 10000,
      location: "Miami, USA",
      rating: 4,
      reviews: 77,
      features: [
        { icon: <FaBed className="text-lg" />, label: "3 Beds" },
        { icon: <FaWifi className="text-lg" />, label: "WiFi Available" },
        { icon: <FaSwimmingPool className="text-lg" />, label: "Swimming Pool" },
      ],
    },
    {
      image: houseFive,
      name: "TM30 House",
      price: 20000,
      location: "Los Angeles, USA",
      rating: 4,
      reviews: 130,
      features: [
        { icon: <FaBed className="text-lg" />, label: "2 Beds" },
        { icon: <FaWifi className="text-lg" />, label: "WiFi Available" },
        { icon: <FaSwimmingPool className="text-lg" />, label: "Swimming Pool" },
      ],
    },
    {
      image: houseSix,
      name: "Prima’s House",
      price: 75000,
      location: "New York City, USA",
      rating: 4,
      reviews: 135,
      features: [
        { icon: <FaBed className="text-lg" />, label: "5 Beds" },
        { icon: <FaWifi className="text-lg" />, label: "WiFi Available" },
        { icon: <FaSwimmingPool className="text-lg" />, label: "Swimming Pool" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      {isQuickViewOpen ? (
        <QuickViewPage onBack={() => setIsQuickViewOpen(false)} />
      ) : isQuickViewTwoOpen ? (
        <QuickViewPageTwo onBack={() => setIsQuickViewTwoOpen(false)} />
      ) : (
        <>
          {/* Title Section */}
          <div className="w-full bg-white py-4 px-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Recent Bookings</h2>
          </div>
          
          {/* Card Section */}
          <div className="w-full flex-grow bg-[#FAFAFA] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apartment, index) => (
              <ApartmentCard 
                key={index} 
                {...apartment}
                onQuickView={() => index < 3 ? setIsQuickViewOpen(true) : setIsQuickViewTwoOpen(true)} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookingPage;
