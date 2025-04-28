import React from "react";
import { FaWifi, FaSwimmingPool, FaBed } from "react-icons/fa";
import progone from "../../../assets/lekphotoone.png";
import progtwo from "../../../assets/lekphotoone.png";
import progthree from "../../../assets/lekphototwo.png";
import progfour from "../../../assets/lekphotothree.png";
import progfive from "../../../assets/lekphotofour.png";
import progsix from "../../../assets/lekphotosix.png";

const FavoritePage = () => {
  const favorites = [
    {
      id: 1,
      name: "The Regen House",
      location: "Los Angeles, USA",
      price: "$20,000",
      rating: 5,
      reviews: 130,
      image: progone,
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
      reviews: 98,
      image: progtwo,
      features: [
        { icon: <FaBed />, label: "5 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
    {
      id: 3,
      name: "White House",
      location: "Los Angeles, USA",
      price: "$120,000",
      rating: 5,
      reviews: 130,
      image: progthree,
      features: [
        { icon: <FaBed />, label: "11 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
    {
      id: 4,
      name: "Obi's House",
      location: "Maimi, USA",
      price: "$10,000",
      rating: 5,
      reviews: 77,
      image: progfour,
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
      image: progfive,
      features: [
        { icon: <FaBed />, label: "5 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
    {
      id: 6,
      name: "Prima's House",
      location: "New York City, USA",
      price: "$75,000",
      rating: 5,
      reviews: 135,
      image: progsix,
      features: [
        { icon: <FaBed />, label: "5 Beds" },
        { icon: <FaWifi />, label: "Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] p-6">
      <h1 className="text-2xl  mb-6">Favorites Apartment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <div
            key={fav.id}
            className="group bg-white rounded-lg shadow-sm overflow-hidden relative hover:shadow-md transition-all"
          >
            {/* Image shrink on hover */}
            <div className="h-[288px] group-hover:h-[240px] transition-all duration-300 overflow-hidden">
              <img
                src={fav.image}
                alt={fav.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Text slides up */}
            <div className="p-4 transition-all duration-300 group-hover:-translate-y-4">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold">{fav.name}</h2>
                <p className="text-md font-bold text-gray-800">{fav.price}</p>
              </div>

              <p className="text-gray-600 mb-2">{fav.location}</p>

              <div className="flex mb-1 space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < fav.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-3">
                ({fav.reviews} reviews)
              </p>

              <div className="flex justify-between text-sm text-gray-600 mb-10">
                {fav.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {feature.icon}
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick View Button */}
            <button className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white py-2 rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Quick View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
