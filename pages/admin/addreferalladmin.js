import Sidebar1 from "./Sidebar1";

import React, { useState } from "react";
 

import { FaBars } from "react-icons/fa"; //
import Reffreraluser1 from "./Reffreraluser1";
import Addreferalladmin1 from "./Addreferalladmin1";
import Navbar from "./AdminNavbar/Navbar";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="w-full shadow-md">
          <Navbar />
        </div>
        <div className="flex flex-1 w-full  mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          {/* Hamburger icon for mobile view */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="p-4 focus:outline-none">
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`md:w-64 flex-shrink-0 md:block  ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            <Sidebar1 onClose={closeSidebar} />
          </div>

          {/* Content area */}
          <div className="flex-1 w-full max-w-8xl p-4 overflow-auto">
            <Addreferalladmin1 />
          </div>
        </div>
      </div>
    </div>
  );
}
