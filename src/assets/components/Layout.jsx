import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className=" overflow-hidden ">
      <div className="">
        <Navbar />
      </div>

      <div className="w-full min-h-screen flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] " >
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
