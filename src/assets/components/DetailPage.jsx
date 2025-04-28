import React from "react";
import { FaWifi, FaSwimmingPool, FaBed } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";

const iconMapping = {
  "3 Beds": <FaBed />,
  "5 Beds": <FaBed />,
  "11 Beds": <FaBed />,
  "2 Beds": <FaBed />,
  "Wi-Fi": <FaWifi />,
  "Pool": <FaSwimmingPool />,
};

const DetailPage = () => {
  const location = useLocation();
  const {
    image,
    name,
    price,
    location: locationName,
    rating,
    reviews,
    features,
  } = location.state || {};

  const navigate = useNavigate();

  const monthlyPrice = parseInt(price.replace(/\D/g, ""), 10); // remove $ sign
const numberOfMonths = 3;
const serviceFee = 50;

const subtotal = monthlyPrice * numberOfMonths;
const finalTotal = subtotal + serviceFee;

const handleBookNow = () => {
  navigate("/empty", {
    state: { image, name, price, locationName, rating, reviews, features },
  });
};

  return (

    <div className="p-6 flex flex-col gap-6 bg-[#FAFAFA] min-h-screen">
       <button
      onClick={() => navigate(-1)}
      className="flex items-center text-gray-700 hover:text-gray-900 mb-4 cursor-pointer"
    >
      <FaArrowLeft className="mr-2" /> 
      <span className="text-sm font-medium">Back</span>
    </button>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Images and Info */}
        <div className="flex-1 md:w-2/3">
          {/* Images */}
          {image ? (
            <>
             <div className="flex gap-4">
  {/* Big Image */}
  <div className="w-[442px] h-[293px]">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Small Images Container */}
  <div className="flex flex-col justify-between h-[293px] w-[180px]">
    <div className="w-full h-[140px]">
      <img
        src={image}
        alt={`${name} small`}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="w-full h-[140px]">
      <img
        src={image}
        alt={`${name} small`}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>


              {/* Title and Basic Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Newly added
                    </span>
                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Top rated
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold">{name}</h1>
                  <p className="text-gray-600">{locationName}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">({reviews} reviews)</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  At the {name}, we focus on individual attention as our main asset and have made a team of professionals that will respond to any questions or requests available to our guests.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Our house, completely renovated and equipped with all the necessary services, will put the finishing touch to a comfortable and quiet stay in a city with a lot of history.
                </p>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Features</h2>
                <div className="flex flex-wrap gap-4">
                  {features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      {iconMapping[feature]}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Right Side: Form */}
        {/* Price Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[442px] h-[455px] mt-6 md:mt-0 flex flex-col justify-between">
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">
        {price}<span className="text-sm font-normal">/month</span>
      </h2>
      <span className="text-green-600 bg-green-100 text-xs font-semibold px-2 py-1 rounded">30% off</span>
    </div>

    {/* Horizontal Line */}
    <hr className="my-4 border-gray-300" />


    {/* Three Inputs */}
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Guests input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">No. of guests</label>
        <input
          type="number"
          min="1"
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="2 Guests"
        />
      </div>
    </div>

    {/* Add Horizontal Line Again */}
    <hr className="my-4 border-gray-100" />


    {/* PRICE BREAKDOWN */}
    <div className="flex flex-col gap-2">
      {/* Price x Months */}
      <div className="flex justify-between text-sm font-semibold">
        <span>{price} * {numberOfMonths} months</span>
        <span>${subtotal.toLocaleString()}</span>
      </div>

      {/* Service Fee */}
      <div className="flex justify-between text-sm font-semibold">
        <span>Home4U service fee</span>
        <span>${serviceFee}</span>
      </div>
    </div>

    {/* Total */}
    <div className="flex justify-between text-md font-bold mt-4">
      <span>Total</span>
      <span>${finalTotal.toLocaleString()}</span>
    </div>

    {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Book now
            </button>
  </div>
</div>
``


      </div>
    </div>
  );
};

export default DetailPage;
