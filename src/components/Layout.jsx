import React, { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";


const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {children}
        {/* Page Content */}
      </div>
    </div>
  );
};

export default Layout;