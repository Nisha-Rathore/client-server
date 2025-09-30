import React, { useState } from "react";
import { BiCog, BiUser } from "react-icons/bi";
import { FaDashcube } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const logOut = () => {};
  return (
    <div
      className={`bg-gray-800 text-white transition-all duration-300 ${
        openSidebar ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-lg font-bold ${!openSidebar && "hidden"}`}>
          MyApp
        </h1>
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="bg-gray-700 px-2 py-1 rounded"
        >
          {openSidebar ? "<" : ">"}
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="flex gap-3 items-center">
              <FaDashcube /> Dashboard
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/product" className="flex gap-3 items-center">
              <BiUser /> Product
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/setting" className="flex gap-3 items-center">
              <BiCog /> Settings
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <span onClick={() => logOut()} className="flex gap-3 items-center">
              <LuLogOut /> Logout
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;