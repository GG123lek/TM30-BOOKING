import React from "react";
import { CiCalendar } from "react-icons/ci";

const BookingSummaryCard = () => {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Summary</h2>

      {/* Dates */}
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Check-in</p>
          <p className="text-base font-medium text-gray-800">Jan 15, 2025</p>
        </div>
        <div className="h-10 w-px bg-gray-300"></div>
        <div>
          <p className="text-sm text-gray-500">Check-out</p>
          <p className="text-base font-medium text-gray-800">Mar 15, 2025</p>
        </div>
      </div>

      {/* Guests with calendar icon */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Guests</p>
        <div className="flex items-center gap-2 mt-1">
        <CiCalendar className="text-gray-500"/>
          <p className="text-base font-medium text-gray-800">2 Guests</p>
        </div>
      </div>

      <hr className="my-4 text-[#D9D9D9]" />

      {/* Payment Details Label */}
      <div className="mb-3">
        <p className="text-lg font-semibold text-gray-800">Payment Details</p>
      </div>

      {/* Payment breakdown */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>$45,000 × 3 months</span>
          <span>$135,000</span>
        </div>
        <div className="flex justify-between">
          <span>Home4U service fee</span>
          <span>$50</span>
        </div>
      </div>

      <hr className="my-4 text-[#D9D9D9]" />

      {/* Total */}
      <div className="flex justify-between text-base font-semibold text-gray-900 mt-auto">
        <span>Total</span>
        <span>$135,050</span>
      </div>
    </div>
  );
};

export default BookingSummaryCard;
