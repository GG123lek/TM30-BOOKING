import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCcMastercard } from "react-icons/fa";
import { IoAlertCircleOutline, IoCheckmarkCircle } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import carding from "../../assets/mastercard.png";
import lot from "../../assets/illustration.png";
import NewFormTwo from "./NewFormTwo";

const PaymentCheckout = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Stepper Section */}
      <div className="bg-white w-full py-4 px-6 flex items-center justify-start shadow-sm mb-6">
        <div className="flex items-center w-full max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
            <span className="ml-2 text-sm font-medium text-blue-600">Personal details</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
              2
            </div>
            <span className="ml-2 text-sm font-medium text-blue-600">Payment</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#999999] text-white flex items-center justify-center text-sm font-bold">
              3
            </div>
            <span className="ml-2 text-sm font-medium text-blue-600">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Main Content Section with Gray Background */}
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-6 bg-gray-100 flex-grow">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Back Button */}
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-800 flex items-center mb-6"
          >
            <FaArrowLeft className="mr-2" />
            <span className="text-md font-semibold cursor-pointer">Back</span>
          </button>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Checkout</h1>

          {/* Cancellation Policy */}
          <div className="bg-[#FFE6B7] p-3 rounded-md">
            <h2 className="text-md font-semibold text-[#344054] mb-2">Cancellation Policy</h2>
            <div className="flex items-start gap-3">
              <div className="bg-[#B45309] text-white rounded-full p-1 flex items-center justify-center mt-1">
                <IoAlertCircleOutline className="w-5 h-5" />
              </div>
              <p className="text-sm text-[#3C424A]">
                At Home4U, when you book an apartment with us, you have the freedom to cancel.
                However, cancellations made within 2 days of the check-in date will not be refunded.
              </p>
            </div>
          </div>

          {/* Card Number Field */}
          <div className="relative mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <img src={carding} alt="Card Logo" className="h-5 w-auto" />
              </span>
              <input
                type="text"
                defaultValue="1234 4567 7890"
                placeholder="1234 5678 9012 3456"
                className="w-full pl-14 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#008000] text-xl">
                <IoCheckmarkCircle />
              </span>
            </div>
          </div>

          {/* Expiry & CVV Fields */}
          <div className="flex gap-4">
            {/* Expiry */}
            <div className="relative flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
              <input
                type="text"
                defaultValue="02/28"
                placeholder="MM/YY"
                className="w-full pr-10 py-2 px-3 border border-gray-300 
                rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <span className="absolute right-3 top-9 text-[#008000] text-xl">
                <IoCheckmarkCircle />
              </span>
            </div>

            {/* CVV */}
            <div className="relative flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input
                type="text"
                defaultValue="123"
                placeholder="123"
                className="w-full pr-10 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-9 text-[#008000] text-xl">
                <IoCheckmarkCircle />
              </span>
            </div>
          </div>

          {/* Upload Section */}
          <div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center text-center">
              {/* Icon placed at the top inside the container */}
              <div className="mb-4">
                <img src={lot} alt="Illustration" className="h-24 w-auto" />
              </div>

              {/* Text under the icon */}
              <p className="text-sm text-gray-600 mb-2">Start uploading here</p>

              {/* Main content inside the container */}
              <p className="text-gray-600 mb-1">Any assets uploaded will live here.</p>
              <p className="text-gray-600 mb-4">Upload your file to complete your booking.</p>

              {/* Upload button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2">
                <IoCloudUploadOutline className="text-2xl text-white" />
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* Right Column with reduced width and pushed to the right */}
        <div className="w-full lg:w-1/2 max-w-[500px] ml-auto">
          <div>
            <NewFormTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckout;
