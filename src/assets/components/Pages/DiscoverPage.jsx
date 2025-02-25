import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import ApartmentCard from "../../components/ApartmentCard";
import QuickViewPage from "../../components/QuickViewPage";
import houseImage1 from "../../../assets/framehouseone.png";
import houseImage2 from "../../../assets/framehouseone.png";
import houseImage3 from "../../../assets/framehousethree.png";
import houseImage4 from "../../../assets/framehousefour.png";
import houseImage5 from "../../../assets/framehousefive.png";
import houseImage6 from "../../../assets/framehousesix.png";

const apartments = [
  { id: 1, image: houseImage1, title: "Regen House", price: "20,000", location: "Los Angeles, USA" },
  { id: 2, image: houseImage2, title: "Sunset Villa", price: "25,000", location: "Miami, USA" },
  { id: 3, image: houseImage3, title: "Palm Heights", price: "18,000", location: "Dubai, UAE" },
  { id: 4, image: houseImage4, title: "Skyline Tower", price: "22,000", location: "New York, USA" },
  { id: 5, image: houseImage5, title: "Beachfront Condo", price: "30,000", location: "Malibu, USA" },
  { id: 6, image: houseImage6, title: "Cityscape Loft", price: "15,000", location: "Toronto, Canada" },
];

const DiscoverPage = () => {
  const [activeTab, setActiveTab] = useState("all-apartment");
  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <div className="p-6 flex flex-col gap-6 bg-[#FAFAFA] min-h-screen">
      {selectedApartment ? (
        // Show Quick View Page when an apartment is selected
        <QuickViewPage apartment={selectedApartment} onBack={() => setSelectedApartment(null)} />
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
            <div className="grid grid-cols-3 gap-6">
              {apartments.map((apt) => (
                <ApartmentCard key={apt.id} apartment={apt} onQuickView={() => setSelectedApartment(apt)} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DiscoverPage;
