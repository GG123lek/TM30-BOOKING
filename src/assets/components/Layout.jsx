import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="layout-page flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-6/4 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
