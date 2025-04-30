import React from 'react';
import gret from "../../assets/greencard.png";

const BookingSuccess = () => {
  return (
    <div className="max-w-xl p-6 bg-white rounded-xl shadow border border-gray-200 text-left">
      
      <div className="mb-6 flex items-center space-x-3">
        
        
      </div>

      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <img src={gret} alt="" />
        </div>
        <h1 className="text-xl font-semibold text-green-600">Success!</h1>
        <p className="text-gray-600 text-sm">You will receive a confirmation mail shortly</p>
      </div>

      <div className="bg-green-50 text-green-800 text-sm rounded-md px-4 py-3 mb-6 border-b border-green-200">
        <p>Congrats! We have made your bookings available for you.</p>
      </div>

      <div className="text-sm text-gray-700 mb-6 space-y-6">
        {/* Top Row - 3 columns */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="font-medium text-gray-600 mb-2">Name</p>
            <p>Abiola Fisolami</p>
          </div>
          <div>
            <p className="font-medium text-gray-600 mb-2">Email</p>
            <p>fisolamiabioola@gmail.com</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-600 mb-2">Phone No</p>
            <p>09069350833</p>
          </div>
        </div>

        {/* Bottom Row - 2 columns */}
        <div className="grid grid-cols-2 gap-6">
          <div className="break-words">
            <p className="font-medium text-gray-600 mb-2">Location</p>
            <p className="text-sm">No 12, Murry Bergtraum Softball, New York City, USA</p>
          </div>
          <div>
            <p className="font-sm text-gray-600 mb-2">Booking ID</p>
            <p className="text-md font-medium">948283BKT</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Give Rating</p>
        <div className="flex space-x-1 text-xl text-gray-300">
          {Array.from({ length: 5 }).map((_, idx) => (
            <button key={idx} className="hover:text-yellow-500 focus:outline-none">★</button>
          ))}
        </div>
      </div>

     
      <div className="text-sm text-gray-700">
        You’ll be returned back to the dashboard after 30 seconds! or you can{' '}
        <a href="#" className="text-md font-medium underline">click here</a>
      </div>
    </div>
  );
};

export default BookingSuccess;
