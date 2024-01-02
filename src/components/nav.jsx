import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/favicon.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 h-32">
      <div className="container mx-auto flex translate-y-[-35px] items-center justify-between">
        <div className="flex items-center space-x-10">
          <img src={logo} alt="Logo" className="w-20 h-24" />
          <h1 className="text-white text-4xl font-bold ml-2 max-md:mt-3">WMHS</h1>
        </div>

        <div className="flex items-center max-md:hidden">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 w-[400px] px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
      />
      <button className="bg-blue-500 text-white px-7  p-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
        Search
      </button>
    </div>

        <div className="hidden lg:flex space-x-4">
          <NavLink to="#" text="Home" />
          <NavLink to="#" text="Academics" />
          <NavLink to="#" text="Updates" />
          <NavLink to="#" text="About us" />
          <NavLink to="#" text="Join now" />
        </div> 

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} className="mt-9" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-2">
          <MobileNavLink to="#" text="Home" />
          <MobileNavLink to="#" text="Academics" />
          <MobileNavLink to="#" text="Updates" />
          <MobileNavLink to="#" text="About us" />
          <MobileNavLink to="#" text="Join now" />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, text }) => (
  <a
    href={to}
    className="text-white hover:text-gray-400 transition duration-300"
  >
    {text}
  </a>
);

const MobileNavLink = ({ to, text }) => (
  <a
    href={to}
    className="block py-2 px-4 text-white hover:bg-gray-700 transition duration-300"
  >
    {text}
  </a>
);

export default Nav;
