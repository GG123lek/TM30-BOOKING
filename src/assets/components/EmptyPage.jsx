import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaWifi, FaSwimmingPool, FaBed } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import FormPage from "./FormPage";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const iconMapping = {
    "3 Beds": <FaBed />,
    "5 Beds": <FaBed />,
    "11 Beds": <FaBed />,
    "2 Beds": <FaBed />,
    "Wi-Fi": <FaWifi />,
    "Pool": <FaSwimmingPool />,
  };

  const location = useLocation();
  const { image, name, locationName, rating, reviews, features } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      
      {/* Top White Background Section */}
      <div className="bg-white w-full py-4 px-6 flex items-center justify-center shadow-sm">
        <div className="flex items-center w-full max-w-3xl">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
            <span className="ml-2 text-sm font-medium text-blue-600">Personal</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#999999] text-gray-700 flex items-center justify-center text-sm font-bold">
              2
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">Payment</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#999999] text-gray-700 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col p-6">
        
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="flex items-center text-green-700 hover:text-green-900 mb-8 self-start"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-md font-semibold">Back</span>
        </button>

        {/* Image and Content Side by Side */}
        <div className="flex gap-6">
          {/* Image */}
          <div className="w-[180px] h-[140px]">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">No Image</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <p className="text-gray-600 mb-2">{locationName}</p>

            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500">({reviews} reviews)</p>
            </div>

            <div className="flex gap-4 mb-4">
              <button className="bg-gray-200 text-blue-300 px-3 py-1 rounded-full text-sm">
                Top Rated
              </button>
              <button className="bg-gray-100 text-purple-200 px-3 py-1 rounded-full text-sm">
                Newly Added
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                  {iconMapping[feature] || "✨"}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
       
       <div>
        <FormPage/>
       </div>
    </div>
  );
};

export default SuccessPage;
