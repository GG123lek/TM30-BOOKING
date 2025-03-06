import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
     
      <div className="absolute left-[20%] md:left-[25%] lg:left-[20%] top-0 h-full w-[1px] bg-pink-200"></div>

      <Navbar />

     
      <div className="flex flex-grow overflow-hidden">
       
        <div className="w-[20%] md:w-[25%] lg:w-[20%] hidden md:block bg-[#D9D9D9]">
          <Sidebar />
        </div>

       
       <div className="w-[80%] flex-grow overflow-auto relative border border-purple-100">
        <Outlet />
      </div>

      </div>
    </div>
  );
};

export default Layout;
