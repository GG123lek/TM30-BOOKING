import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { FaWifi, FaBed, FaSwimmingPool } from "react-icons/fa";

const ApartmentCard = ({ image, name, price, location, rating, reviews, features, tag, onQuickView }) => {
  return (
    <div className="h-[400px] bg-white rounded-lg shadow-md overflow-hidden relative group hover:shadow-lg transition-all duration-300 m-4">
      
      {/* Wrapper */}
      <div className="relative flex flex-col p-4 transition-all duration-300 group-hover:translate-y-[-10px]">
        
        {/* Apartment Image */}
        <div className="relative w-full rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer">
            <FaRegHeart className="text-gray-500 text-lg" />
          </div>
          {tag && (
            <span className="absolute bottom-3 left-3 bg-purple-600 text-white text-sm px-3 py-1 rounded-md">
              {tag}
            </span>
          )}
        </div>

        {/* Apartment Details */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-lg font-semibold text-black-600">${price}</p>
          </div>
          <p className="text-gray-500 text-sm">{location}</p>

          {/* Ratings */}
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
             <AiFillStar key={index} className={index < rating ? "text-gray-200" : "text-gray-300"} />

              ))}
            </div>
            <p className="text-gray-500 text-sm">({reviews} reviews)</p>
          </div>

          {/* Features */}
          <div className="flex justify-between items-center text-gray-600 text-sm mt-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-1">
                {feature.icon}
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick View Button */}
      <button
        onClick={onQuickView}
        className="absolute bottom-2 left-0 w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
      >
        Quick View
      </button>

    </div>
  );
};

export default ApartmentCard;
