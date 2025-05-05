import React from 'react';
import gret from "../../assets/greencard.png";
import BookingSummaryCard from './BookingSummaryCard';

const BookingSuccess = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      
      {/* Left: Booking Info */}
      <div className="w-full lg:w-[615px] bg-white p-6 rounded-xl shadow border border-gray-200">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <img src={gret} alt="Success icon" className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-semibold text-green-600">Success!</h1>
          <p className="text-gray-600 text-sm">You will receive a confirmation mail shortly.</p>
        </div>

        <div className="bg-green-50 text-green-800 text-sm rounded-md px-4 py-3 mb-6 border-b border-green-200">
          <p>Congrats! We have made your bookings available for you.</p>
        </div>

        <div className="text-sm text-gray-700 mb-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium text-gray-600 mb-1">Name</p>
              <p>Abiola Fisolami</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 mb-1">Email</p>
              <p>fisolamiabioola@gmail.com</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 mb-1">Phone No</p>
              <p>09069350833</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-600 mb-1">Location</p>
              <p>No 12, Murry Bergtraum Softball, New York City, USA</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 mb-1">Booking ID</p>
              <p className="font-medium">948283BKT</p>
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

        <p className="text-sm text-gray-700">
          You’ll be returned back to the dashboard after 30 seconds, or you can{' '}
          <a href="#" className="text-blue-600 underline font-medium">click here</a>.
        </p>
      </div>

      {/* Right: Booking Summary */}
      <div className="w-full lg:w-[442px]">
        <BookingSummaryCard />
      </div>
    </div>
  );
};

export default BookingSuccess;
