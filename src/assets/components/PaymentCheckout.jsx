import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PaymentCheckout = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="min-h-screen  justify-center bg-gray-100 p-4">
      <div className=" p-6 rounded-lg  w-full max-w-md relative">
         
       
        <button
          onClick={handleGoBack}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-sm font-semibold">Back</span>
        </button>

        
        <div className="pt-12"> 
         
        </div>

      </div>
    </div>
  );
};

export default PaymentCheckout;
