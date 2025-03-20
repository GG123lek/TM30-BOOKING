import React, { useState} from "react";
import { IoArrowBack } from "react-icons/io5";
import totimage from "../../assets/line image.png"
import gatt from "../../assets/magnet.png"
import barr from "../../assets/correct icon.png"
import uploadImage from "../../assets/illustration.png"
import { CiCalendar } from "react-icons/ci";
import PaymentConfirmation from "../components/PaymentConfirmation";


const PaymentPage = ({ onBack }) => {  

    const [isPaymentComplete, setIsPaymentComplete] = useState(false);

    
    if (isPaymentComplete) {
      return <PaymentConfirmation onBack={() => setIsPaymentComplete(false)} />;
    }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
     
      <div className="bg-white shadow-md border-b border-[#D9D9D9] py-4 px-6 flex items-center justify-center relative">
       
        <div className="flex items-center justify-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#008000] text-white font-bold rounded-full">1</div>
          <span className="text-gray-700 font-medium">Personal Details</span>
        </div>
        <div className="w-30 h-[2px] bg-[#999999]"></div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#305FEC] text-white font-bold rounded-full">2</div>
          <span className="text-gray-700 font-medium">Payment</span>
        </div>
        <div className="w-30 h-[2px] bg-[#999999]"></div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#999999] text-white font-bold rounded-full">3</div>
          <span className="text-gray-700 font-medium">Confirmation</span>
        </div>
      </div>
      </div>

      
  
   <div className="p-8 flex gap-2 items-center">

   <IoArrowBack className="text-gray-700 text-2xl cursor-pointer" onClick={onBack} />
   <p className="text-xl">Back</p>
   </div>
     
   <div className="flex justify-between gap-6 p-6">
 
  <div className="w-[700px] h-[620px]  p-6 flex flex-col rounded-lg">
   
    <h2 className="text-lg font-bold mb-4">Payment CheckOut</h2>
    
   
    <img src={totimage} alt="Checkout" className="mb-4" />

   
    <div className="relative w-full mb-4">
      <label className="text-sm font-medium">Card Number</label>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="1234 4567 7890"
          className="p-3 pl-12 pr-10 border border-gray-300 rounded-md outline-none bg-white w-full"
        />
       
        <img
          src={gatt}
          alt="Payment Method"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-5"
        />
       
        <img
          src={barr}
          alt="Correct Icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
    </div>

   
    <div className="flex gap-4 mb-4">
     
      <div className="relative">
        <label className="text-sm font-medium">Expiration Date</label>
        <div className="relative">
          <input
            type="text"
            placeholder="MM/YY"
            className="p-3 pr-12 border border-gray-300 rounded-md outline-none bg-white w-32"
          />
        
          <img
            src={barr}
            alt="Correct Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
      </div>

     
      <div className="relative">
        <label className="text-sm font-medium">CVV</label>
        <div className="relative">
          <input
            type="text"
            placeholder="***"
            className="p-3 pr-12 border border-gray-300 rounded-md outline-none bg-white w-24"
          />
          
          <img
            src={barr}
            alt="Correct Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
      </div>
    </div>

   
    <div className="flex flex-col items-start gap-2">
      <label className="text-sm font-medium">
        Upload government document (NIN, Driver License, Birth Certificate)
      </label>

    
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-full text-center">
      
        <img src={uploadImage} alt="Upload" className="w-16 h-16 mb-3" />
        <p className="text-lg font-semibold text-gray-700">
          Start by uploading a file
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Any assets uploaded will live here. Upload your file to complete your booking.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
          Upload
        </button>
      </div>
    </div>
  </div>

  
  <div className="w-[442px] h-[440px] bg-white shadow-md p-6">
  <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-black text-xl">
                Booking Details
              </span>
              <span className="text-pink-300 text-md"></span>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#D9D9D9] my-2 "></div>
          <div className="flex items-center w-[280px]justify-between  py-4">
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#999999]">Check-in</span>
              <span className="text-sm font-medium text-gray-900">
                Jan 15, 2025
              </span>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-end items-start">
              <span className="text-xs text-[#999999]">Check-out</span>
              <span className="text-sm font-medium text-gray-900">
                March 15, 2025
              </span>
            </div>
          </div>

            <div className="flex flex-col items-start">
                     
                      <span className="text-xs text-[#999999]">No. of Guests</span>
          
                    
                      <div className="flex items-center gap-2">
                        <CiCalendar className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900">
                          2 Guests
                        </span>
                      </div>
            </div>

                    <div className="w-full h-[2px] bg-[#D9D9D9] my-2 "></div>

                    <div>
            <div>
              <p className="text-base font-semibold">Payment Details</p>
            </div>
            <div className="mt-auto">
              <div className="flex justify-between text-lg mt-4">
                <span>
                  <span className="font-light text-[#344054]">$45,000</span>
                  <span className="text-[#344054]"> x 3 months</span>
                </span>
                <span className="text-gray-600 font-bold">$135,000</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-[#344054]">Home4U service fee</span>
                <span className="text-gray-600 font-bold">$50</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9] my-2"></div>

              <div className="flex justify-between text-lg font-bold my-2">
                <span className="text-[#344054]">Total</span>
                <span className="text-gray-600">$135,050</span>
              </div>
            </div>
          </div>

          
          <button
         
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full mt-6 cursor-pointer"
          onClick={() => setIsPaymentComplete(true)}
        >
          Make Payment
        </button>
  </div>
</div>

  

    </div>
  );
};

export default PaymentPage;
