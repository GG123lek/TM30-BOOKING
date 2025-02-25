import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import ApartmentCard from "../../components/ApartmentCard"; 
import QuickViewPage from "../../components/QuickViewPage"; 

const DiscoverPage = () => {
  const [activeTab, setActiveTab] = useState("all-apartment");
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false); // Track Quick View state

  return (
    <div className="p-6 flex flex-col gap-6 bg-[#FAFAFA] min-h-screen">
      
      {/* Show Back Button in Quick View */}
      {isQuickViewOpen ? (
        <QuickViewPage onBack={() => setIsQuickViewOpen(false)} />
      ) : (
        <>
          {/* Buttons & Filter */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              {["all-apartment", "top-rated", "newly-added"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-gray-700 bg-[#F5F7F9] cursor-pointer ${
                    activeTab === tab ? "font-semibold" : ""
                  }`}
                >
                  {tab.replace("-", " ")}
                </button>
              ))}
            </div>

            <div className="flex items-center px-6 py-2 bg-[#F5F7F9] rounded-md cursor-pointer">
              <IoFilterOutline className="text-gray-600 text-lg mr-2" />
              <p className="text-gray-700">Filter</p>
            </div>
          </div>

          {/* Apartment List */}
          {activeTab === "all-apartment" && (
            <div className="flex">
              <ApartmentCard onQuickView={() => setIsQuickViewOpen(true)} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DiscoverPage;
