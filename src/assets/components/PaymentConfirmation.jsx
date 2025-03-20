import React from "react";
import { IoArrowBack } from "react-icons/io5";
import successIcon from "../../assets/markcircle.png"
import markCircle from "../../assets/markarc.png"
import infoIcon from "../../assets/kelin.png"
import { AiOutlineStar } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";

const PaymentConfirmation = ({ onBack }) => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
     
      <div className="bg-white shadow-md border-b border-[#D9D9D9] py-4 px-6 flex items-center justify-center relative">
        <div className="flex items-center justify-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#008000] text-white font-bold rounded-full">
              1
            </div>
            <span className="text-gray-700 font-medium">Personal Details</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#008000] text-white font-bold rounded-full">
              2
            </div>
            <span className="text-gray-700 font-medium">Payment</span>
          </div>
          <div className="w-30 h-[2px] bg-[#999999]"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-[#008000] text-white font-bold rounded-full">
              3
            </div>
            <span className="text-gray-700 font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      
      <div className="p-8 flex gap-2 items-center">
        <IoArrowBack className="text-gray-700 text-2xl cursor-pointer" onClick={onBack} />
        <p className="text-xl text-gray-700">Back</p>
      </div>

      <div className="flex justify-between p-8">
      <div className="w-[615px] h-[552px] bg-white rounded-lg p-6 flex flex-col items-center shadow-md">
          <img src={successIcon} alt="Success" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-bold text-[#03B66B]">Success</h2>
          <p className="text-[#333333] text-md mt-2">You will receive a confirmation mail shortly</p>
          <div className="mt-6 w-[567px] h-[45px] bg-[#F5F5F5] rounded-md flex items-center px-4 shadow-sm">
            <img src={markCircle} alt="Mark" className="w-6 h-6 mr-3" />
            <span className="text-[#333333] text-md">Congrats! We have made your bookings available for you.</span>
          </div>
           <br/>
          <div className="w-full h-[1px] bg-[#D9D9D9] my-2"></div>
          <div className="flex  items-start mt-6 w-full space-y-4 justify-between">
           
            <div className="flex flex-col">
              <label className="text-[#333333] font-semibold">Name</label>
              <span className="text-[#666666]">Abiola Fisolami</span>
            </div>

           
            <div className="flex flex-col">
              <label className="text-[#333333] font-semibold">Email</label>
              <span className="text-[#666666]">fisolamiabioola@gmail.com</span>
            </div>

            <div className="flex flex-col">
              <label className="text-[#333333] font-semibold">Phone No</label>
              <span className="text-[#666666]">09069350833</span>
            </div>
          </div>

          <div className="flex items-start mt-6 w-full justify-between">
  
          <div className="flex flex-col flex-grow">
            <label className="text-[#333333] font-semibold">Location</label>
            <span className="text-[#666666] whitespace-nowrap">
              No 12, Murry Bergtraum Softball, New York City, USA
            </span>
          </div>

  
          <div className="flex flex-col items-end w-full">
            <label className="text-[#333333] font-semibold">Booking ID</label>
            <span className="text-[#666666]">948283BKT</span>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col items-start">
            <label className="text-[#333333] font-semibold">Give Rating</label>
                      <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, index) => (
              <AiOutlineStar key={index} className="text-gray-400 text-2xl" />
            ))}
          </div>
          </div>

          
          <div className="mt-6 w-full flex items-center">
            <img src={infoIcon} alt="Info" className="w-5 h-5 mr-2" />
            <p className="text-sm text-[#333333]">
              You'd be returned back to the dashboard after 30 seconds! or you can click
              <span className="text-[#3D3E40]-300 underline ml-1 cursor-pointer">here</span>.
            </p>
          </div>
        </div>

        
       

 
  <div className="w-[442px] h-[440px] bg-white shadow-md rounded-lg p-6">
           <div>
              <span className="font-bold text-black text-xl">
                Booking Details
              </span>
              <span className="text-pink-300 text-md"></span>
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
  </div>


</div>
 
    
    </div>
  );
};

export default PaymentConfirmation;
