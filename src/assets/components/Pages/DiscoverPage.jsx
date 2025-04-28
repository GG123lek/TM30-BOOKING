import React, { useState } from "react";
import { FaWifi, FaSwimmingPool, FaBed } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import projectone from "../../../assets/sulephototwo.png";
import projecttwo from "../../../assets/sulephotoone.png";
import projectthree from "../../../assets/sulephotothree.png";
import projectfour from "../../../assets/sulephotofour.png";
import projectfive from "../../../assets/sulephotofive.png";
import projectsix from "../../../assets/sulephotosix.png";

const DiscoverPage = () => {
  const [activeTab, setActiveTab] = useState("all-apartment");
  const navigate = useNavigate();

  const apartments = [
    {
      id: 1,
      name: "The Regen House",
      location: "Los Angeles, USA",
      price: "$20,000",
      rating: 4,
      reviews: 130,
      image: projectone,
      features: ["3 Beds", "Wi-Fi", "Pool"],
    },
    {
      id: 2,
      name: "Shakira Sherafin House",
      location: "New York City, USA",
      price: "$45,000",
      rating: 5,
      reviews: 138,
      image: projecttwo,
      features: ["5 Beds", "Wi-Fi", "Pool"],
    },
    {
      id: 3,
      name: "White House",
      location: "Los Angeles, USA",
      price: "$120,000",
      rating: 5,
      reviews: 130,
      image: projectthree,
      features: ["11 Beds", "Wi-Fi", "Pool"],
    },
    {
      id: 4,
      name: "Obrs House",
      location: "Miami, USA",
      price: "$10,000",
      rating: 3,
      reviews: 77,
      image: projectfour,
      features: ["3 Beds", "Wi-Fi", "Pool"],
    },
    {
      id: 5,
      name: "TM30 House",
      location: "Los Angeles, USA",
      price: "$20,000",
      rating: 4,
      reviews: 130,
      image: projectfive,
      features: ["2 Beds", "Wi-Fi", "Pool"],
    },
    {
      id: 6,
      name: "Prima's House",
      location: "New York City, USA",
      price: "$75,000",
      rating: 4,
      reviews: 135,
      image: projectsix,
      features: ["5 Beds", "Wi-Fi", "Pool"],
    },
  ];

  const iconMapping = {
    "3 Beds": <FaBed />,
    "5 Beds": <FaBed />,
    "11 Beds": <FaBed />,
    "2 Beds": <FaBed />,
    "Wi-Fi": <FaWifi />,
    "Pool": <FaSwimmingPool />,
  };
  

  const handleQuickView = (apartment) => {
    navigate(`/apartment/${apartment.id}`, {
      state: {
        image: apartment.image,
        name: apartment.name,
        price: apartment.price,
        locationName: apartment.location, // ✅ fixed this!
        rating: apartment.rating,
        reviews: apartment.reviews,
        features: apartment.features,
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      <div className="w-full bg-white py-4 px-6 flex justify-between items-center">
        <div className="flex space-x-4">
          {["all-apartment", "top-rated", "newly-added"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-gray-700 bg-[#F5F7F9] cursor-pointer ${
                activeTab === tab ? "font-semibold bg-gray-300" : ""
              }`}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex-grow bg-[#FAFAFA] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            className="group bg-white rounded-lg shadow-sm overflow-hidden relative hover:shadow-md transition-all"
          >
            <div className="h-[288px] group-hover:h-[240px] transition-all duration-300 overflow-hidden">
              <img
                src={apartment.image}
                alt={apartment.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            <div className="p-4 transition-all duration-300 group-hover:-translate-y-4">
  <div className="flex justify-between items-center mb-1">
    <h2 className="text-lg font-semibold">{apartment.name}</h2>
    <p className="text-md font-bold text-gray-800">{apartment.price}</p>
  </div>

  <p className="text-gray-600 mb-2">{apartment.location}</p>

  <div className="flex mb-1 space-x-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < apartment.rating ? "★" : "☆"}</span>
    ))}
  </div>

  <p className="text-sm text-gray-500 mb-3">
    ({apartment.reviews} reviews)
  </p>

  {/* Features with Icons */}
  <div className="flex flex-wrap justify-between gap-3 text-sm text-gray-600 mb-6">
    {apartment.features.map((feature, index) => (
      <div key={index} className="flex items-center gap-1">
        {iconMapping[feature]}
        <span>{feature}</span>
      </div>
    ))}
  </div>
</div>


            <button
              onClick={() => handleQuickView(apartment)}
              className="absolute bottom-4 left-4 right-4 bg-blue-600
               text-white py-2 rounded-md opacity-0 translate-y-4
               group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              Quick View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
