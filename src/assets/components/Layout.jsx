import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="w-[20%] md:w-[25%] lg:w-[20%] hidden md:block bg-[#D9D9D9]">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="w-[80%] flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
