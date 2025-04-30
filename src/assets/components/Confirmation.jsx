import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import lot from "../../assets/illustration.png"; // Assuming you have your illustration for confirmation

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Stepper Section (Full Width at the Top with White Background) */}
      <div className="bg-white w-full py-4 px-6 flex items-center justify-start shadow-sm mb-6">
        <div className="flex items-center w-full max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
            <span className="ml-2 text-sm font-medium ">Personal details</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
              2
            </div>
            <span className="ml-2 text-sm font-medium ">Payment</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
              3
            </div>
            <span className="ml-2 text-sm font-medium ">Confirmation</span>
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Confirmation Page</h1>

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

          {/* Confirmation Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center text-center">
            {/* Icon placed at the top inside the container */}
            <div className="mb-4">
              <img src={lot} alt="Illustration" className="h-24 w-auto" />
            </div>

            {/* Text under the icon */}
            <p className="text-sm text-gray-600 mb-2">Confirmation Successful</p>

            {/* Main content inside the container */}
            <p className="text-gray-600 mb-4">Your payment has been successfully processed.</p>
          </div>
        </div>

        {/* Right Column (You can add more content here or leave it empty) */}
        <div className="w-full lg:w-1/2 max-w-[500px] ml-auto">
          {/* You can place additional content here if necessary */}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
