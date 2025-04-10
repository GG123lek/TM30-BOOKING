import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import ApartmentCard from "../../components/ApartmentCard"; 
import QuickViewPage from "../../components/QuickViewPage"; 
import QuickViewPageTwo from "../../components/QuickViewPageTwo"; 
import { useNavigate, useParams } from 'react-router-dom';

const DiscoverPage = () => {
  const [activeTab, setActiveTab] = useState("all-apartment");
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isQuickViewTwoOpen, setIsQuickViewTwoOpen] = useState(false);
  const [apartments, setApartments] = useState([]);

  const navigate = useNavigate();


  const handleCardClick = () => {
    navigate(`/booking/${id}`);
  };

  useEffect(() => {
    const fetchApartments = async () => {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      };
    
      try {
        const response = await fetch('https://home4u-3.onrender.com/reservation/?homepage=home', { headers });
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
          tag: item.status,
          features: [
            item.wifi ? { icon: <i className="fa fa-wifi"></i>, label: "Wi-Fi" } : null,
            item.swimmingpool ? { icon: <i className="fa fa-swimmer"></i>, label: "Pool" } : null,
            { icon: <i className="fa fa-bed"></i>, label: `${item.beds} Beds` },
          ].filter(Boolean),
        }));

        setApartments(formatted);
      } catch (error) {
        console.error("Fetching apartments failed:", error);
      }
    };
    

    fetchApartments();
  }, []);

 
  const filteredApartments = apartments.filter(apartment => 
    activeTab === "all-apartment" || 
    (activeTab === "top-rated" && apartment.status === "Top rated") || 
    (activeTab === "newly-added" && apartment.status === "Newly added")
  );

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      {isQuickViewOpen ? (
        <QuickViewPage onBack={() => setIsQuickViewOpen(false)} />
      ) : isQuickViewTwoOpen ? (
        <QuickViewPageTwo onBack={() => setIsQuickViewTwoOpen(false)} />
      ) : (
        <>
         
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
            <div className="flex items-center px-6 py-2 bg-[#F5F7F9] rounded-md cursor-pointer">
              <IoFilterOutline className="text-gray-600 text-lg mr-2" />
              <p className="text-gray-700">Filter</p>
            </div>
          </div>
          
         
          <div className="w-full flex-grow bg-[#FAFAFA] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApartments.map((apartment, index) => (
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

export default DiscoverPage;
