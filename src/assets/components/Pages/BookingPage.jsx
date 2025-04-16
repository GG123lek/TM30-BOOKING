import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import ApartmentCard from "../../components/ApartmentCard";
import QuickViewPage from "../../components/QuickViewPage";
import QuickViewPageTwo from "../../components/QuickViewPageTwo";
import { FaWifi, FaBed, FaSwimmingPool } from "react-icons/fa";

const BookingPage = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isQuickViewTwoOpen, setIsQuickViewTwoOpen] = useState(false);
  // const [selectedApartment, setSelectedApartment] = useState(null);
  const [selectedApartmentId, setSelectedApartmentId] = useState(null);

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await fetch(
          "https://home4u-3.onrender.com/reservation/?homepage=home",
          { headers }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const formatted = data.results.map((item) => ({
          id: item.id,
          image: item.images[0]?.image_url || "",
          name: item.house,
          price: item.price,
          location: item.address,
          rating: Math.round(item.average_rating) || 0,
          reviews: item.ratings_reviews,
          features: [
            item.wifi ? { icon: <FaWifi className="text-lg" />, label: "Wi-Fi" } : null,
            item.swimmingpool ? { icon: <FaSwimmingPool className="text-lg" />, label: "Pool" } : null,
            { icon: <FaBed className="text-lg" />, label: `${item.beds} Beds` },
          ].filter(Boolean),
        }));

        setApartments(formatted);
      } catch (error) {
        console.error("Error fetching booking apartments:", error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      {isQuickViewOpen ? (
        <QuickViewPage
          apartment={selectedApartment}
          onBack={() => setIsQuickViewOpen(false)}
        />
      ) : isQuickViewTwoOpen ? (
        <QuickViewPageTwo
          apartment={selectedApartment}
          onBack={() => setIsQuickViewTwoOpen(false)}
        />
      ) : (
        <>
          {/* Title Section */}
          <div className="w-full bg-white py-4 px-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Recent Bookings</h2>
            <div className="flex items-center px-6 py-2 bg-[#F5F7F9] rounded-md cursor-pointer">
              <IoFilterOutline className="text-gray-600 text-lg mr-2" />
              <p className="text-gray-700">Filter</p>
            </div>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {apartments.map((apartment, index) => (
              <ApartmentCard
                key={apartment.id}
                {...apartment}
                onQuickView={() => {
                  setSelectedApartmentId(apartment.id);
                  index < 3 ? setIsQuickViewOpen(true) : setIsQuickViewTwoOpen(true);
                }}
                
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookingPage;
