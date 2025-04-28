import React from "react";
import { FaWifi, FaSwimmingPool, FaBed } from "react-icons/fa";
import imgOne from "../../../assets/sulephotoone.png";
import imgTwo from "../../../assets/sulephototwo.png";
import imgThree from "../../../assets/lekphotothree.png";
import imgFour from "../../../assets/sulephotofour.png";
import imgFive from "../../../assets/sulephotofive.png";
import imgSix from "../../../assets/sulephotosix.png";

const BookingPage = () => {
  const bookings = [
    {
      id: 1,
      name: "The Regen House",
      location: "Los Angeles, USA",
      price: "$20,000",
      rating: 5,
      reviews: 130,
      image: imgOne,
      features: [
       
        { icon: <FaBed />, label: "3 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
    {
      id: 2,
      name: "Shakira Sherafin House",
      location: "New York City, USA",
      price: "$45,000",
      rating: 4,
      reviews: 138,
      image: imgTwo,
      features: [
        
        { icon: <FaBed />, label: "5 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
    {
      id: 3,
      name: "The White House",
      location: "Los Angeles, USA",
      price: "$120,000",
      rating: 5,
      reviews: 130,
      image: imgThree,
      features: [
        { icon: <FaBed />, label: "11 Beds" },
        { icon: <FaSwimmingPool />, label: "Pool" },
        { icon: <FaWifi />, label: "Wi-Fi" }
      ],
    },
    {
      id: 4,
      name: "Obi's House",
      location: "Miami, USA",
      price: "$10,000",
      rating: 4,
      reviews: 77,
      image: imgFour,
      features: [
        { icon: <FaBed />, label: "3 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },   
      ],
    },
    {
      id: 5,
      name: "TM30 House",
      location: "Los Angeles, USA",
      price: "$20,000",
      rating: 5,
      reviews: 130,
      image: imgFive,
      features: [
        { icon: <FaBed />, label: "2 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
        
      ],
    },
    {
      id: 6,
      name: "Prima's House",
      location: "Nashville, USA",
      price: "$75,000",
      rating: 3,
      reviews: 135,
      image: imgSix,
      features: [
        { icon: <FaBed />, label: "5 Bed" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] p-6">
      <h1 className="text-2xl  mb-6"> Recent Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-lg shadow-sm overflow-hidden relative hover:shadow-lg transition-all"
          >
            {/* Image with shrinking height on hover */}
            <div className="h-[288px] group-hover:h-[240px] overflow-hidden transition-all duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Text Content that moves up */}
            <div className="p-4 transition-all duration-300 group-hover:-translate-y-4">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-md font-bold text-gray-800">{item.price}</p>
              </div>

              <p className="text-gray-600 mb-2">{item.location}</p>

              <div className="flex mb-1 space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-3">
                ({item.reviews} reviews)
              </p>

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {feature.icon}
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick View button stays at the bottom of the card */}
            <button className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white py-2 rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Quick View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
